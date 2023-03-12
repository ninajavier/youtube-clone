import { useState} from "react";

// import { getAllVideos } from "../../API/fetch";
import VideoIndex from "../Youtube/VideoIndex";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);


//   useEffect(() => {
//     async function fetchData() {
//       if (searchTerm !== "") {
//         const apiKey = "AIzaSyAx57IX5X24MyPXeqkir7fzwCSlV_wnyBg";
//         const url = `https://youtube.googleapis.com/youtube/v3/search?q=${searchTerm}&part=snippet&maxResults=10&key=${apiKey}`;

//         const response = await fetch(url);
//         const videos = await response.json();

//         setSearchResults(videos.items);
//       }
//     }

//     fetchData();
//   }, [searchTerm]);


  async function handleSubmit(event) {
    event.preventDefault();

    

    const apiKey = "AIzaSyAx57IX5X24MyPXeqkir7fzwCSlV_wnyBg";
        const url = `https://youtube.googleapis.com/youtube/v3/search?q=${searchTerm}&part=snippet&maxResults=10&key=${apiKey}`;

        const response = await fetch(url);
        const videos = await response.json();

        setSearchResults(videos.items);


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

      {/* <p>No Search Results Yet, Please submit a search above!</p> */}

      <section className="videos-index">
        <VideoIndex searchResults={searchResults} />
      </section>
    </div>
  );
}
