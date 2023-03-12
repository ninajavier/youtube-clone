import { useState } from "react";



export default function Home() {
    const [searchTerm, setSearchTerm] = useState("");
    const [videos, setVideos] = useState([]);
    const [allVideos, setAllVideos] = useState([]);


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
