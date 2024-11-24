'use client'
import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Loader2, ChevronLeft, ChevronRight } from 'lucide-react';
import { sanityClient, urlFor } from '@/../../sanity.config';
import Link from 'next/link';

const ImageViewer = ({ params }) => {
  const { chapterSlug } = params;
  const [chapter, setChapter] = useState(null);
  const [hasPrevChapter, setPrevChapter] = useState(null);
  const [hasNextChapter, setNextChapter] = useState(null);
  const router = useRouter();
  const [images, setImages] = useState([])

  const getPrevChapter = async (currentChapter) => {
    const prevChapterQuery = `*[_type == "chapter" && number == $nextNumber][0]{
      slug
    }`;

    const prevChapterData = await sanityClient.fetch(prevChapterQuery, {
      nextNumber: currentChapter.number - 1,
    });

    if (prevChapterData) setPrevChapter(prevChapterData.slug.current)
  }
  const getNextChapter = async (currentChapter) => {
    const nextChapterQuery = `*[_type == "chapter" && number == $nextNumber][0]{
      slug
    }`;

    const nextChapterData = await sanityClient.fetch(nextChapterQuery, {
      nextNumber: currentChapter.number + 1,
    });

    if (nextChapterData) setNextChapter(nextChapterData.slug.current)
  }

  useEffect(() => {
    const fetchChapter = async () => {
      const query = `*[_type == "chapter" && slug.current == $chapterSlug][0]{
        _id,
        title,
        publishedAt,
        number,
        pages[]{
          asset,
          pageNumber
        }
      }`;

      const currentChapter = await sanityClient.fetch(query, { chapterSlug });
      if (currentChapter) {
        setChapter(currentChapter)
        const sortedPages = currentChapter.pages.sort((a, b) => a.pageNumber - b.pageNumber);
        setImages(sortedPages);
        getPrevChapter(currentChapter)
        getNextChapter(currentChapter)
      } else {
        router.push('/404')
      }
    };

    fetchChapter();
  }, [chapterSlug, router]);

  const [loading, setLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState(0);

  const handleImageLoad = () => {
    setLoadedImages(prev => {
      const newCount = prev + 1;
      if (images && newCount === images.length) {
        setLoading(false);
      }
      return newCount;
    });
  };


  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      {/* Header con navegación */}
      <div className="sticky top-0 z-50 bg-gray-800 text-white p-2 shadow-lg">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href={`/proyectos/${params.projectSlug}`}
            className="flex items-center text-white hover:bg-gray-700 p-2 rounded"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Volver al proyecto
          </Link>

          <h2 className="text-lg font-semibold">{chapter?.title}</h2>

          <div
            variant="ghost"
            className={`invisible hidden sm:flex items-center text-white hover:bg-gray-700`}
          >
            Siguiente Capítulo
            <ChevronRight className="w-4 h-4 ml-2" />
          </div>
        </div>
      </div>

      {/* Contenedor principal */}
      <div className="max-w-4xl mx-auto w-full px-4 py-2 flex-grow">
        {/* Indicador de carga */}
        {loading && (
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 text-white p-4 rounded-lg shadow-lg z-50 flex items-center">
            <Loader2 className="w-6 h-6 animate-spin mr-2" />
            <span>Cargando imágenes... {images.length > 0 && (<>({loadedImages}/{images.length})</>) }</span>
          </div>
        )}

        {/* Contenedor de imágenes */}
        <div className={`w-full flex flex-col items-center ${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300 mb-16`}>
          {images.map((image, index) => (
            <div
              key={index}
              className="w-full flex justify-center"
              style={{ marginTop: index === 0 ? '0' : '-1px' }}
            >
              <img
                src={urlFor(image.asset).url()}
                alt={`Página ${index + 1}`}
                className="max-w-full w-auto"
                onLoad={handleImageLoad}
                style={{ display: 'block' }}
                onError={(e) => {
                  handleImageLoad(); // Contar también las imágenes que fallan
                  e.target.src = '/api/placeholder/800/1200'; // Imagen placeholder en caso de error
                }}
              />
            </div>
          ))}
        </div>

        {/* Navegación inferior */}
        <div className="fixed bottom-4 left-0 right-0 flex justify-center px-4">
          <div className="shadow-lg flex">
            <button
              onClick={()=>{router.push(hasPrevChapter)}}
              disabled={!hasPrevChapter}
              variant="ghost"
              className="bg-gray-800 p-2 rounded-l-lg flex items-center text-white cursor-pointer hover:bg-gray-700 disabled:bg-gray-400 disabled:text-gray-200 disabled:line-through disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Anterior
            </button>
            <button
              onClick={()=>{router.push(hasNextChapter)}}
              disabled={!hasNextChapter}
              variant="ghost"
              className="bg-gray-800 p-2 rounded-r-lg flex items-center text-white cursor-pointer hover:bg-gray-700 disabled:bg-gray-400 disabled:text-gray-200 disabled:line-through disabled:cursor-not-allowed"
            >
              Siguiente
              <ChevronRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageViewer;
