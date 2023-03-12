import { useState, useEffect } from "react";
import { getAllVideos } from "../../api/fetch";



export default function Home() {
    const [searchTerm, setSearchTerm] = useState("");
    const [videos, setVideos] = useState([]);
    const [allVideos, setAllVideos] = useState([]);
    const [loadingError, setLoadingError] = useState(false);


    function handleSubmit(event) {
        const title = event.target.value;
        const result = title.length ? filterVideos(title, allVideos) : allVideos;
        
        setSearchTerm(title);
        setVideos(result);
      }

      function filterVideos(search, videos) {
        return videos.filter((video) => {
          return video.items.snippet.title.toLowerCase().match(search.toLowerCase());
        })
      }

      useEffect(() => {
        getAllVideos().then((response) => {
          setVideos(response);
          setAllVideos(response);
          setLoadingError(false);
        }).catch((error) => {
          setLoadingError(true);
        })
      }, [])


  return (
    <div>
      <form>
      <input
        type="text"
        value={searchTerm}
        id="searchTitle"
        placeholder="Search..."
      />
      <input 
      type="submit"
      onSumbit={handleSubmit}
      />
      </form>


      <section className="videos-index">
        {/* {videos.map((video) => {
          return <VideoListing video={video} key={video.id} />;
        })} */}
      </section>
    </div>
  );
}
