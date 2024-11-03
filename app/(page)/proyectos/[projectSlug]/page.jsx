const { default: GeneralPageLayout } = require("@/client/Layout");
import { sanityClient, urlFor } from '@/../../sanity.config';
import { Book } from "lucide-react";
import Link from 'next/link';

const StoryboardPage = async ({ params }) => {
  const { projectSlug } = params;

  const query = `*[_type == "historieta" && slug.current == $projectSlug][0]{
    _id,
    title,
    description,
    coverImage,
    status,
    publishedAt,
    chapters[]->{
      _id,
      title,
      publishedAt,
      number,
      slug,
    }
  }`;

  const storyboard = await sanityClient.fetch(query, { projectSlug });

  if (!storyboard) {
    return <p>Historieta no encontrada</p>;
  }

  const imageUrl = urlFor(storyboard.coverImage).url()

  return (
    <GeneralPageLayout title={"CATANNABIS SERIES"}>
      <div className="bg-indigo-600 p-6 rounded-b-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-white">
          {storyboard.title}
        </h2>
      </div>

      {/* Contenido principal */}
      <div className="p-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Imagen de portada */}
          <article className="w-full md:w-1/3">
            <img
              src={imageUrl}
              alt={`Portada de ${storyboard.title}`}
              className="w-full rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            />
          </article>

          {/* Descripción y capítulos */}
          <div className="w-full md:w-2/3 space-y-6">
            {/* Descripción */}
            <section className="bg-indigo-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-indigo-900">
                Descripción
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {storyboard.description}
              </p>
            </section>

            {/* Lista de capítulos */}
            <section>
              <h3 className="text-lg font-semibold mb-2 text-gray-300">
                Capítulos
              </h3>
              <div className="min-h-64 overflow-y-auto pr-2 rounded-lg border border-indigo-100 bg-white">
                <ul className="space-y-2">
                  {storyboard.chapters.map((chapter) => (
                    <li key={chapter.number} >
                      <Link href={`/proyectos/${projectSlug}/${chapter.slug.current}`}
                        className="flex items-center gap-3 p-3 hover:bg-indigo-50 rounded-lg transition-colors cursor-pointer border-b border-indigo-50 last:border-b-0"
                      >
                        <Book className="h-5 w-5 text-indigo-500" />
                        <div className="flex-1">
                          <h4 className="font-medium text-indigo-900">
                            Capítulo {chapter.number}: {chapter.title}
                          </h4>
                          <p className="text-sm text-indigo-600">
                            {new Date(chapter.publishedAt).toLocaleDateString()}
                          </p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </GeneralPageLayout>
  );
};

export default StoryboardPage
