import { videos } from "@/server/infoVideos";

export async function GET(request) {
    const apiKey = process.env.YOUTUBE_API_KEY;
    const playlistId = process.env.NEXT_PUBLIC_PLAYLIST_ID;

    try {
        const videosData = await fetchPlaylistVideos(playlistId, apiKey)
        const localVideosToAdd = videos.map( item => ({
            title: item.title,
            videoId: item.videoId,
            thumbnails: null
        }))

        const newVideos = [...videosData, ...localVideosToAdd]
        return new Response(JSON.stringify(videosData), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}

const fetchPlaylists = async (channelId, apiKey) => {
    let playlists = [];
    let nextPageToken = "";

    do {
      const url = `https://www.googleapis.com/youtube/v3/playlists?part=snippet&maxResults=50&channelId=${channelId}&key=${apiKey}&pageToken=${nextPageToken}`;

      const res = await fetch(url);
      const data = await res.json();

      if (data.items) {
        playlists = [...playlists, ...data.items];
      }

      nextPageToken = data.nextPageToken || "";
    } while (nextPageToken);

    playlists.forEach( list => {
        fetchPlaylistVideos(list.id, apiKey)
        .then(videos => console.log("Videos de la playlist:", videos))
        .catch(error => console.error("Error obteniendo los videos:", error));

    })
    return playlists;
};

const fetchPlaylistVideos = async (playlistId, apiKey) => {
  let videos = [];
  let nextPageToken = "";

  do {
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${apiKey}&pageToken=${nextPageToken}`;

    const res = await fetch(url);
    const data = await res.json();

    if (data.items) {
      videos = [...videos, ...data.items.map(item => ({
        title: item.snippet.title,
        videoId: item.snippet.resourceId.videoId,
        thumbnail: item.snippet.thumbnails?.medium?.url,
        description: item.snippet.description
      }))];
    }

    nextPageToken = data.nextPageToken || "";
  } while (nextPageToken);

  return videos;
};
