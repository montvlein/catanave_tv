export async function GET(request) {
    const apiKey = process.env.YOUTUBE_API_KEY;
    const playlistId = process.env.NEXT_PUBLIC_PLAYLIST_ID;

    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            return new Response(JSON.stringify({ error: "Error al obtener los videos" }), { status: response.status });
        }

        const data = await response.json();
        const videos = data.items.map((item) => ({
            title: item.snippet.title,
            videoId: item.snippet.resourceId.videoId,
            thumbnails: item.snippet.thumbnails,
        }));

        return new Response(JSON.stringify(videos), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}
