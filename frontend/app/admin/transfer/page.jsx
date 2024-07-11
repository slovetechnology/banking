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
import { FaEllipsis } from 'react-icons/fa6';
import { TransactionStatus } from '@/utils/functions';

const columns = [
    'User',
    'Transfered to',
    'Amount',
    'Description',
    'Status',
    'Transaction Date',
    ''
];


const rows = [
    { name: 'John willson', transfered: 'jenifer martins', amount: "$300,000", description: 'Deposited from wema bank into account', status: 'completed', date: '10/20/2024 05:20 AM' },
    { name: 'John willson', transfered: 'jenifer martins', amount: "$300,000", description: 'Deposited from wema bank into account', status: 'pending', date: '10/20/2024 05:20 AM' },
    { name: 'John willson', transfered: 'jenifer martins', amount: "$300,000", description: 'Deposited from wema bank into account', status: 'completed', date: '10/20/2024 05:20 AM' },
    { name: 'John willson', transfered: 'jenifer martins', amount: "$300,000", description: 'Deposited from wema bank into account', status: 'completed', date: '10/20/2024 05:20 AM' },
    { name: 'John willson', transfered: 'jenifer martins', amount: "$300,000", description: 'Deposited from wema bank into account', status: 'failed', date: '10/20/2024 05:20 AM' },
    { name: 'John willson', transfered: 'jenifer martins', amount: "$300,000", description: 'Deposited from wema bank into account', status: 'failed', date: '10/20/2024 05:20 AM' },
    { name: 'John willson', transfered: 'jenifer martins', amount: "$300,000", description: 'Deposited from wema bank into account', status: 'completed', date: '10/20/2024 05:20 AM' },
    { name: 'John willson', transfered: 'jenifer martins', amount: "$300,000", description: 'Deposited from wema bank into account', status: 'completed', date: '10/20/2024 05:20 AM' },
    { name: 'John willson', transfered: 'jenifer martins', amount: "$300,000", description: 'Deposited from wema bank into account', status: 'pending', date: '10/20/2024 05:20 AM' },
    { name: 'John willson', transfered: 'jenifer martins', amount: "$300,000", description: 'Deposited from wema bank into account', status: 'completed', date: '10/20/2024 05:20 AM' },
    { name: 'John willson', transfered: 'jenifer martins', amount: "$300,000", description: 'Deposited from wema bank into account', status: 'pending', date: '10/20/2024 05:20 AM' },
    { name: 'John willson', transfered: 'jenifer martins', amount: "$300,000", description: 'Deposited from wema bank into account', status: 'completed', date: '10/20/2024 05:20 AM' },
    { name: 'John willson', transfered: 'jenifer martins', amount: "$300,000", description: 'Deposited from wema bank into account', status: 'failed', date: '10/20/2024 05:20 AM' },
    { name: 'John willson', transfered: 'jenifer martins', amount: "$300,000", description: 'Deposited from wema bank into account', status: 'completed', date: '10/20/2024 05:20 AM' },
    { name: 'John willson', transfered: 'jenifer martins', amount: "$300,000", description: 'Deposited from wema bank into account', status: 'failed', date: '10/20/2024 05:20 AM' },
    { name: 'John willson', transfered: 'jenifer martins', amount: "$300,000", description: 'Deposited from wema bank into account', status: 'completed', date: '10/20/2024 05:20 AM' },
    { name: 'John willson', transfered: 'jenifer martins', amount: "$300,000", description: 'Deposited from wema bank into account', status: 'completed', date: '10/20/2024 05:20 AM' },
];


export default function AdminTransaferPage() {
    const [open, setOpen] = React.useState(false)
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <>

            <div className='w-11/12 mx-auto mt-5'>
                <div className="grid grid-cols-1 lg:grid-cols-2 my-5">
                <div className="bg-primary p-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="mb-8 border-b lg:border-none pb-5">
                            <div className="text-white text-xl font-semibold">Total Amount</div>
                            <div className="font-bold text-2xl text-green-400 mt-5">$300,000</div>
                        </div>
                        <div className="">
                            <div className="text-white text-xl font-semibold text-left lg:text-right">Total Transfers</div>
                            <div className="font-bold text-2xl text-green-400 text-left lg:text-right mt-5">50</div>
                        </div>
                    </div>
                </div>
                <div className="bg-zinc-200 p-4">
                    <div className="grid grid-cols-2 gap-5 py-3 border-b border-zinc-300">
                        <div className="">Total Completed (10)</div>
                        <div className="text-right font-bold">$300,000</div>
                    </div>
                    <div className="grid grid-cols-2 gap-5 py-3 border-b border-zinc-300">
                        <div className="">Total Failed (30)</div>
                        <div className="text-right font-bold">$300,000</div>
                    </div>
                    <div className="grid grid-cols-2 gap-5 py-3">
                        <div className="">Total Pending (15)</div>
                        <div className="text-right font-bold">$300,000</div>
                    </div>
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
                                            className="truncate"
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

                                                <TableCell className='truncate'> {row.name} </TableCell>
                                                <TableCell className='truncate'> {row.transfered} </TableCell>
                                                <TableCell> <div className={` w-fit py-1.5 px-3`}>{row.amount}</div> </TableCell>
                                                <TableCell className="truncate"> {row.description} </TableCell>
                                                <TableCell className={`capitalize ${TransactionStatus(row.status)}`}> {row.status} </TableCell>
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
    )
}
