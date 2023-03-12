export default function VideoIndex({ searchResults }) {
    
  return (
    <div>
      {searchResults.map((video) => {
        return <p>{video.snippet.title}</p>;
      })}
    </div>
  )
}
