import { socialNetworks } from "@/server/socialnetworks"

const Footer = () => {
    return(
        <footer className="flex flex-row gap-4 justify-evenly items-center bg-black z-40" >
            <div className="flex flex-wrap justify-center flex-row gap-4 p-4 ">
                { socialNetworks.map( (social, id) =>
                <a href={social.link} key={id} target="_blank" className="flex flex-row gap-2 items-center" title={social.title}>
                    <div className="p-2 rounded-full bg-lime-600">{social.icon}</div> <span className="hidden sm:block md:hidden">{social.title}</span>
                </a>
                )}
            </div>
        </footer>
    )
}

export default Footer