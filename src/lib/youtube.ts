const YOUTUBE_ID_PATTERN =
  /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

export function getYoutubeEmbedUrl(url: string): string | null {
  const match = url.match(YOUTUBE_ID_PATTERN);
  if (!match) return null;
  return `https://www.youtube.com/embed/${match[1]}`;
}
