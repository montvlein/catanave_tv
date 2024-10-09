'use client'
import GameUserInterface from "@/client/components/game/interface";
import GameSetup from "@/client/components/game/settings";

export default function TEST() {
    return(
        <main className="p-4 flex flex-col items-center gap-4">
            <h1>TEST</h1>
            {/* <GameSetup /> */}
            <GameUserInterface />
        </main>
    )
}