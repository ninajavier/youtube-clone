import { useState, useEffect } from "react";
// import { getAllVideos } from "../../API/fetch";
import VideoIndex from "../Youtube/VideoIndex";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);


  useEffect(() => {
    async function fetchData() {
      if (searchTerm !== "") {
        const apiKey = "AIzaSyAiAM4YfR9rlIqsR47JTCsFnnYR4BgqJG4";
        const url = `https://youtube.googleapis.com/youtube/v3/search?q=${searchTerm}&part=snippet&maxResults=10&key=${apiKey}`;

        const response = await fetch(url);
        const videos = await response.json();

        setSearchResults(videos.items);
      }
    }

    fetchData();
  }, [searchTerm]);


  function handleSubmit(event) {
    event.preventDefault();
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

      <section className="videos-index">
        <VideoIndex searchResults={searchResults} />
      </section>
    </div>
  );
}
