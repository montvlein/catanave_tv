import Footer from "@components/footer";
import RemoteControl from "@/client/components/control";
import Header from "@/client/components/header";
import { sanityClient, urlFor } from "../../../sanity.config";
import Link from "next/link";

const STORYBOARDS_QUERY = `*[
    _type == "historieta"
    && defined(slug.current)
  ]|order(publishedAt desc)[0...12]{
    _id,
    slug,
    title,
    coverImage,
    status,
    publishedAt,
    description,
    chapters[]->{
      _id,
      title,
      slug,
      publishedAt
    } | order(publishedAt desc)
  }`;

const options = { next: { revalidate: 30 } };

export default async function Proyectos() {
    const storyboards = await sanityClient.fetch(STORYBOARDS_QUERY, {}, options)

    return(
        <div className="flex flex-col min-h-dvh">
        <Header title={"Proyectos"} />
        <main className="container flex-1 mx-auto p-8">
            <RemoteControl/>
            <ul className="grid gap-4">
                { storyboards.map( post => <StoryboardCard storyboard={post} key={post._id} />)}
            </ul>
        </main>
        <Footer/>
        </div>
    )
}

function StoryboardCard({storyboard}) {
    const imageUrl = urlFor(storyboard.coverImage).url()
    const lastChapter = storyboard.chapters[0]

    return (
    <li className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800">
        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={imageUrl} alt={storyboard.title} />
        <div className="w-full flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{storyboard.title}</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{storyboard.description}</p>
            <div className="flex flex-row gap-4 self-end">
                <Link href={`/proyectos/${storyboard.slug.current}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Todos los capitulos
                </Link>
                <Link href={`/proyectos/${storyboard.slug.current}/${lastChapter.slug.current}`} className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-center text-white bg-lime-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-blue-800">
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                    Último capitulo
                </Link>
            </div>
        </div>
    </li>)
}