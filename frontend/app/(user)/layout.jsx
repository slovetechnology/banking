"use client"

import Sidebar from '@/components/user/Sidebar';
import UserNavbar from '@/components/user/UserNavbar'
import { Sitename } from '@/utils/functions';
import { Box, LinearProgress, SwipeableDrawer } from '@mui/material';
import Link from 'next/link';
import React, { useState } from 'react'
import { FaRegCopyright } from 'react-icons/fa6';
import { createTheme, ThemeProvider } from '@mui/material';
import { Nunito } from "next/font/google";

const nunito = Nunito({
  weight: ["300", "400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});



const theme = createTheme({
  typography: {
    fontFamily: nunito.style.fontFamily,
  },
});


export default function Layout({ children }) {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = useState(true)

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }, [])
  if (loading) return (
    <div>
      <div className="flex items-center h-screen">
        <div className="hidden lg:block w-[23%] bg-white border-r h-full pt-10">
          {new Array(10).fill(0).map((ele, index) => (
            <div className="bg-slate-200 h-14 mb-2 w-11/12 mx-auto rounded-lg" key={index}></div>
          ))}
        </div>
        <div className="w-full ml-auto bg-slate-100 h-screen">
          <div className="flex items-center justify-between bg-white p-3">
            <div className="">
              <div className="w-10 h-10 bg-slate-200 rounded-lg"></div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-slate-200 rounded-lg"></div>
              <div className="w-10 h-10 bg-slate-200 rounded-lg"></div>
              <div className="w-10 h-10 bg-slate-200 rounded-lg"></div>
            </div>
          </div>
          <div className="h-[91.1dvh] flex items-center w-4/5 max-w-xl mx-auto justify-center pb-10 overflow-y-auto">
            <Box sx={{ width: '100%' }}>
              <LinearProgress />
            </Box>
          </div>
        </div>
      </div>
    </div>
  )
  return (
    <div>

      <ThemeProvider theme={theme}>
        <SwipeableDrawer open={open} onClose={toggleDrawer(false)}>
          <Sidebar
            open={toggleDrawer} />
        </SwipeableDrawer>
        <div className="flex items-center h-screen">
          <div className="hidden lg:block w-[23%] bg-white border-r h-full">
            <Sidebar
              open={toggleDrawer} />
          </div>
          <div className="w-full ml-auto bg-slate-100 h-screen">
            <UserNavbar
              open={toggleDrawer}
            />
            <div className="h-[91.1dvh] pb-28 overflow-y-auto">
              {children}
              <div className="flex items-center justify-center mt-5 gap-2 text-zinc-500 text-sm"> <FaRegCopyright />2022, {Sitename} . All rights reserved </div>
              <div className="flex items-center justify-center gap-5 mt-3">
                <Link href="" className='text-blue-700 text-sm font-semibold'>Terms</Link>
                <Link href="" className='text-blue-700 text-sm font-semibold'>Privacy</Link>
                <Link href="" className='text-blue-700 text-sm font-semibold'>Support</Link>
              </div>
            </div>
          </div>
        </div>

      </ThemeProvider>
    </div>
  )
}
