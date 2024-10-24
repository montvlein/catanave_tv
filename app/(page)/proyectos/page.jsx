import Image from "next/image";
import Link from "next/link";

export default function Proyectos() {
    return(
        <>
        <header className="bg-cyan-900 p-4 flex justify-between items-center">
            <h1 className="text-semibold text-xl text-font-playwrite-gb-semijoined" >Proyectos</h1>
            <nav className="flex items-center">
                <Link href={"/"} className="flex flex-row justify-center items-center gap-4 text-font-playwrite-gb-semijoined">
                <Image
                    src={"/logo.png"}
                    width={40}
                    height={40}
                ></Image>
                Videos
                </Link>
            </nav>
        </header>
        <main className="m-2 p-2">
            <ul className="grid grid-col-3 gap-4">
                <li>
                    <a href="https://www.facebook.com/photo/?fbid=920171431789030&set=a.920172698455570" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700" target="_blank">
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="charuto_portada.jpg" alt=""/>
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Charuto</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Fumate la historia de vida de charuto hasta llegar a ser el mejor!</p>
                            <div className="self-end inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </main>
        </>
    )
}