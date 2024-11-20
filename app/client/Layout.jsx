import Header from "@/client/components/header";
import Footer from "@components/footer";
import RemoteControl from "@/client/components/control";

function GeneralPageLayout({children, title}) {
    return(
        <div className="flex flex-col min-h-dvh">
            <Header title={title} />
            <main className="container flex-1 mx-auto">
                <RemoteControl/>
                {children}
            </main>
            <Footer/>
        </div>
    )
}

export default GeneralPageLayout