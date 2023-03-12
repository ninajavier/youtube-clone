import { useState } from "react";
// import { getAllVideos } from "../../API/fetch";


export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  async function handleSubmit(event) {
    event.preventDefault();

    const apiKey = "AIzaSyAx57IX5X24MyPXeqkir7fzwCSlV_wnyBg";
    const url = `https://youtube.googleapis.com/youtube/v3/search?q=${searchTerm}&part=snippet&maxResults=10&key=${apiKey}`;

    const response = await fetch(url);
    const videos = await response.json();

    setSearchResults(videos.items);
    console.log(searchResults);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          id="searchTitle"
          placeholder="Search..."
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <VideoIndex searchResults={searchResults}/>

      {/* <section className="videos-index">
        {searchResults.map((video) => {
          return <VideoListing video={video} key={video.id} />;
        })}
      </section> */}
    </div>
  )
}
