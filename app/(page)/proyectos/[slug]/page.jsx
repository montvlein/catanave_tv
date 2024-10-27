import { PortableText } from "next-sanity";
import { sanityClient, urlFor } from "@/../sanity.config";
import Link from "next/link";

const POST_QUERY = `*[_type == "historieta" && slug.current == $slug][0]`;

const options = { next: { revalidate: 30 } };

export default async function PostPage({
 params,
}) {
  const post = await sanityClient.fetch(POST_QUERY, params, options);
  const postImageUrl = urlFor(post.coverImage).width(550).height(310).url();

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
      <Link href="/proyectos" className="hover:underline">
        ← Back to posts
      </Link>
      {postImageUrl && (
        <img
          src={postImageUrl}
          alt={post.title}
          className="aspect-video rounded-xl"
          width="550"
          height="310"
        />
      )}
      <h1 className="text-4xl font-bold mb-8">{post.title}</h1>
      <div className="prose">
        <p>Published: {new Date(post.publishedAt).toLocaleDateString()}</p>
        {Array.isArray(post.body) && <PortableText value={post.body} />}
      </div>
    </main>
  );
}