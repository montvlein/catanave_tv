import Link from 'next/link';
import React from 'react';

const RemoteControl = ({children}) => {
  const pressButton = (buttonName) => {
    alert(`Has presionado el botón: ${buttonName}`);
  };

  return (
    <div className="fixed -bottom-4 sm:-bottom-24 -right-24 md:-bottom-20 md:-right-10 perspective-1000 z-10">
      <div className="w-[200px] bg-gray-800 rounded-3xl p-6 shadow-lg" style={{
        transform: 'rotate(-15deg) skew(0deg, -5deg) translate(-50px, -100px)'
      }}>
        <div className="h-full flex flex-col justify-between">
          <div className="space-y-4 flex flex-col justify-center items-center">
            <Link href={"/eventos"} className="p-2 text-center w-full bg-gray-700 text-white rounded-xl hover:bg-gray-600 active:scale-98 transition-all">Eventos</Link>
            <Link href={"/"} className="p-2 text-center w-full bg-rose-700 text-white rounded-xl hover:bg-gray-600 active:scale-98 transition-all">Home</Link>
            <Link href={"/proyectos"} className="p-2 text-center w-full bg-gray-700 text-white rounded-xl hover:bg-gray-600 active:scale-98 transition-all">Proyectos</Link>
          </div>

          <hr className="border-gray-600 my-4" />

            {children}
        </div>
      </div>
    </div>
  );
};

export default RemoteControl;