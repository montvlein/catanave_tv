'use client'

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { usePathname  } from 'next/navigation'
import { paths } from '@/utils/routes';
import { Menu, Youtube, BookImage, CalendarRange } from 'lucide-react';
import { isMobile } from 'react-device-detect';

const RemoteControl = ({children}) => {
  const pathname = usePathname()
  const isActive = (path) => pathname === path;
  const styles = (selectedPath) => {
    return `p-2 px-4 text-center w-full text-white rounded-xl transition-all flex items-center justify-between gap-1
    ${isActive(selectedPath) ? "bg-rose-700" : "bg-gray-700 hover:bg-gray-600 active:scale-98"}`
  }

  const [isTranslated, setIsTranslated] = useState(isMobile ? true : false);
  const [colorCircle, setColorCircle] = useState("bg-green-700")
  const showControl = (e) => {
    setIsTranslated(!isTranslated)
  }

  useEffect(()=>{
    showControl()
  },[])

  const changeColor = (e) => {
    setColorCircle((prevColor) => prevColor === "bg-orange-300" ? "bg-green-700" : "bg-orange-300")
  }

  return (
    <nav className="fixed -bottom-4 sm:-bottom-24 -right-24 md:-bottom-20 md:-right-10 perspective-1000 z-50">
      <button onClick={showControl} type='button' aria-label='show_menu' className='md:hidden fixed bottom-20 right-4 p-4 bg-gray-500 rounded-full'>
        <Menu />
      </button>
      <div onClick={changeColor} className="w-[200px] bg-gray-800 rounded-3xl p-6 shadow-lg transition-transform duration-700 ease-in-out" style={{
          transform: isTranslated
            ? 'rotate(-15deg) skew(0deg, -5deg) translate(-50px, -115px)'
            : 'rotate(-15deg) skew(0deg, -5deg) translate(100px, 100px)',
          filter: 'drop-shadow(0px 2px 6px rgba(255, 255, 255, 0.3))'
        }}>
        <div className={`w-3 h-3 ${colorCircle} rounded-full mb-4 mx-auto`} style={{filter: 'drop-shadow(0px 2px 6px rgba(0, 255, 0, 0.6))'}}/>
        <h6 className='uppercase text-rose-400 text-center text-xs my-2'>control remoto</h6>
        <div className="h-full flex flex-col justify-between">
          <div className="space-y-4 flex flex-col justify-center items-center">
            <Link href={paths.home} className={styles(paths.home)} ><Youtube /> Videos</Link>
            <Link href={paths.projects} className={styles(paths.projects)} title='proyectos' ><BookImage /> Proyectos</Link>
            <Link href={paths.gatherings} className={`${styles(paths.gatherings)}`} prefetch={false} title='eventos'><CalendarRange /> Eventos</Link>
          </div>

          <div className='flex flex-col gap-2'>
            <hr className="border-gray-600 mt-2" />
            <button onClick={showControl} type='button' aria-label='hide_menu' className='md:hidden flex flex-row items-center justify-center gap-4 p-2 bg-gray-500 rounded-full'>
              <Menu />
            </button>
              {children}
          </div>

        </div>
      </div>
    </nav>
  );
};

export default RemoteControl;