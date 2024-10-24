import RemoteControl from "@/client/components/control";

export default function Eventos() {
    return(
        <>
            <RemoteControl></RemoteControl>
            <main className="bg-black h-full w-full">
                <h1 >Eventos</h1>
                <p>Proximos eventos</p>
                <ul>
                    <li>Evento uno</li>
                </ul>
            </main>
        </>
    )
}