"use client"

import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Formbutton from '@/utils/Formbutton';
import { FaEllipsis } from 'react-icons/fa6';
import ManageGoal from '@/components/user/savingGoals/ManageGoal';

const columns = [
    'Amount',
    'Topup Date',
    ''
];


const rows = [
    { amount: "-$300,000", date: '10/20/2024 05:20 AM' },
    { amount: "+$300,000", date: '10/20/2024 05:20 AM' },
    { amount: "-$300,000", date: '10/20/2024 05:20 AM' },
    { amount: "+$300,000", date: '10/20/2024 05:20 AM' },
    { amount: "+$300,000", date: '10/20/2024 05:20 AM' },
    { amount: "+$300,000", date: '10/20/2024 05:20 AM' },
    { amount: "-$300,000", date: '10/20/2024 05:20 AM' },
    { amount: "-$300,000", date: '10/20/2024 05:20 AM' },
    { amount: "+$300,000", date: '10/20/2024 05:20 AM' },
    { amount: "+$300,000", date: '10/20/2024 05:20 AM' },
    { amount: "+$300,000", date: '10/20/2024 05:20 AM' },
    { amount: "+$300,000", date: '10/20/2024 05:20 AM' },
    { amount: "+$300,000", date: '10/20/2024 05:20 AM' },
];

export default function SingleSavingsPage() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [open, setOpen] = React.useState(false)

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <>
        <ManageGoal 
        open={open}
        onClose={() => setOpen(false)}
        />
        <div className='w-11/12 mx-auto mt-5'>
            <div className="bg-primary p-4 my-5 rounded-lg">
                <div className="flex items-center justify-between">
                    <div className="">
                        <div className="text-white text-xl font-semibold">Goal Tracker</div>
                        <div className="font-bold text-2xl text-green-400">$300,000</div>
                    </div>
                    <Formbutton title="Manage" onClick={() => setOpen(true)} />
                </div>
            </div>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 500 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column, index) => (
                                    <TableCell
                                        key={index}
                                    >
                                        {column}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>

                                            <TableCell> <div className={`${row.amount.startsWith('-') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'} w-fit py-1.5 px-3`}>{row.amount}</div> </TableCell>
                                            <TableCell> {row.date} </TableCell>
                                            <TableCell onClick={() => setOpen(true)} className='cursor-pointer'> <FaEllipsis /> </TableCell>
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </div>
        </>
    );
}