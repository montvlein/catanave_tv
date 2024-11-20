import Image from "next/image";
import Link from "next/link";

function Header({title}) {
    return (
        <header className="bg-cyan-900 p-4 flex flex-row-reverse gap-4 justify-end items-center">
            <h1 className="text-semibold text-xl text-font-playwrite-gb-semijoined" >{title}</h1>
            <div className="flex items-center">
                <Link href={"/"} className="flex flex-row justify-center items-center gap-4 text-font-playwrite-gb-semijoined">
                <Image
                    src={"/logo.png"}
                    width={40}
                    height={40}
                ></Image>
                </Link>
            </div>
        </header>
    )
}

export default Header