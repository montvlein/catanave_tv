import { socialNetworks } from "@/server/socialnetworks"
import Link from "next/link"
import { Button } from "./button-with-effect"

const Footer = () => {
    return(
        <footer className="h-[20vh] p-4 flex justify-evenly items-center" >
            <div className="flex flex-col gap-4 px-4 pb-4 ">
                { socialNetworks.map( (social, id) => 
                <Link href={social.link} key={id} className="flex flex-row gap-2 items-center">
                    {social.icon} {social.title}
                </Link>
                )}
            </div>
            <div>
                <Link href="https://cafecito.app/catannabistv" target="_blank">
                    <Button>
                        Aporta a la causa
                        <span className="flex gap-2 items-center">... un cafecito <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3 5.5h5a1 1 0 0 1 1 1v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5a1 1 0 0 1 1-1Zm6 1h.5a2.5 2.5 0 0 1 0 5H9M4 .5v2m3-2v2"/></svg></span>
                    </Button>
                </Link>
            </div>
        </footer>
    )
}

export default Footer