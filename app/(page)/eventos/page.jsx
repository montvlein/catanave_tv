import Footer from "@components/footer";
import Header from "@/client/components/header";
import RemoteControl from "@/client/components/control";
import { sanityClient, urlFor } from "@/../sanity.config";
import { Calendar, MapPin, Users } from 'lucide-react';

const GATHERINGS_QUERY = `*[
  _type == "gathering"
]|order(publishedAt desc)[0...12]{_id, title, image, status, date, location, description, attendees, maxAttendees}`;

const options = { next: { revalidate: 30 } };

export default async function gatheringos() {
  const gatherings = await sanityClient.fetch(GATHERINGS_QUERY, {}, options);

  return (
    <div className="flex flex-col min-h-dvh">
      <Header title={"Eventos"} />
      <main className="container flex-1 mx-auto p-8 ">
        <RemoteControl/>
        <ul className="grid sm:grid-cols-2 gap-4">
          {gatherings.map((post) => (
            <li className="w-full" key={post._id}>
                <GatheringCard gathering={post} />
            </li>
          ))}
        </ul>
      </main>
      <Footer/>
    </div>
  );
}

function GatheringCard({gathering}) {

  const getStatusColor = (status) => {
    switch (status) {
      case 'upcoming':
        return 'bg-yellow-100 text-yellow-800';
      case 'open':
        return 'bg-green-100 text-green-800';
      case 'closed':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const imageUrl = urlFor(gathering.image).url()

  return (
    <div className="bg-white border border-gray-200 rounded-lg md:flex-row dark:border-gray-700 dark:bg-gray-800 overflow-hidden shadow rounded-lg ">
            <div className="relative">
              <img
                src={imageUrl}
                alt={gathering.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-2 right-2 flex space-x-2">
                <button
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${getStatusColor(gathering.status)}`}
                >
                  {gathering.status}
                </button>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">{gathering.title}</h3>
              </div>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{gathering.description}</p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <Calendar className="h-5 w-5 mr-2" />
                  {new Date(gathering.date).toLocaleString('es-ES', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: false,
                  })}
                </div>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <MapPin className="h-5 w-5 mr-2" />
                  {gathering.location}
                </div>
                { gathering.maxAttendees && (
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Users className="h-5 w-5 mr-2" />
                    {gathering.attendees} / {gathering.maxAttendees} attendees
                  </div>
                )}
              </div>
            </div>
      </div>
    )
}