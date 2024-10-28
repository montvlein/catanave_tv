'use client'

import Link from 'next/link';
import React from 'react';
import { usePathname  } from 'next/navigation'
import { paths } from '@/utils/routes';

const RemoteControl = ({children}) => {
  const pathname = usePathname()
  const isActive = (path) => pathname === path;
  const styles = (selectedPath) => {
    return `p-2 text-center w-full text-white rounded-xl transition-all
    ${isActive(selectedPath) ? "bg-rose-700" : "bg-gray-700 hover:bg-gray-600 active:scale-98"}`
  }

  return (
    <nav className="fixed -bottom-4 sm:-bottom-24 -right-24 md:-bottom-20 md:-right-10 perspective-1000 z-30 md:z-50">
      <div className="w-[200px] bg-gray-800 rounded-3xl p-6 shadow-lg" style={{
        transform: 'rotate(-15deg) skew(0deg, -5deg) translate(-50px, -100px)'
      }}>
        <div className="h-full flex flex-col justify-between">
          <div className="space-y-4 flex flex-col justify-center items-center">
            <Link href={paths.home} className={styles(paths.home)}>Videos</Link>
            <Link href={paths.projects} className={styles(paths.projects)}>Proyectos</Link>
            <Link href={paths.gatherings} className={styles(paths.gatherings)}>Eventos</Link>
          </div>

          <hr className="border-gray-600 my-4" />

            {children}
        </div>
      </div>
    </nav>
  );
};

export default RemoteControl;