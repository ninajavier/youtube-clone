import { useState } from "react";
import "./Home.css";

// import { getAllVideos } from "../../API/fetch";
import VideoIndex from "../Youtube/VideoIndex";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [currentSearch, setCurrentSearch] = useState("");
  const [showModal, setShowModal] = useState(false);

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

  function clearSearch() {
    setSearchTerm("");
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (searchTerm === "") {
      setShowModal(true);
    } else {
      const apiKey = "AIzaSyAiAM4YfR9rlIqsR47JTCsFnnYR4BgqJG4";
      const url = `https://youtube.googleapis.com/youtube/v3/search?q=${searchTerm}&part=snippet&maxResults=10&key=${apiKey}`;

      const response = await fetch(url);
      const videos = await response.json();

      setSearchResults(videos.items);
      clearSearch();
    }
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
        <button type="submit" onClick={(event) => setCurrentSearch(searchTerm)}>
          Search
        </button>
      </form>

      <section className="videos-index">
        {searchResults.length === 0 ? (
          <p className="errorMessage">
            No Search Results Yet, Please submit a search above!
          </p>
        ) : (
          <>
            <p>Showing results for {currentSearch}</p>
            <VideoIndex searchResults={searchResults} />
          </>
        )}
      </section>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <p>Please provide a search term</p>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
