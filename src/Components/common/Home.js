import { useState } from "react";
import { getAllVideos } from "../../API/fetch";



export default function Home () {
    const [searchTerm, setSearchTerm] = useState("");
    const [videos, setVideos] = useState([]);

    

  return (
    <div>
      
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search..." id="searchTitle" value={searchTerm} />
        <button type="submit">Search</button>

      </form>
    


      <section className="videos-index">
        {/* {videos.map((video) => {
          return <VideoListing video={video} key={video.id} />;
        })} */}
      </section>
    </div>
  );
}
