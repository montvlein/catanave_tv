import { socialNetworks } from "@/server/socialnetworks"
import Link from "next/link"
import { Button } from "./button-with-effect"

const Footer = () => {
    return(
        <footer className="sm:min-h-[10vh] p-4 flex flex-col-reverse sm:flex-row gap-4 justify-evenly items-center bg-black z-50" >
            <div className="flex sm:flex-col md:flex-row gap-4 px-4 pb-4 ">
                { socialNetworks.map( (social, id) =>
                <Link href={social.link} key={id} className="flex flex-row gap-2 items-center">
                    <div className="p-2 rounded-full bg-lime-600">{social.icon}</div> <span className="hidden sm:block md:hidden">{social.title}</span>
                </Link>
                )}
            </div>
        </footer>
    )
}

export default Footer