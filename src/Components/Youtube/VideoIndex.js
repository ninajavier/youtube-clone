export default function VideoIndex({ searchResults }) {
  return (
    <div>
      {searchResults.map((video) => {
        return <p>{video.items.snippet.title}</p>;
      })}
    </div>
  )
}
