import { useState } from "react";
import { getAllVideos } from "../../API/fetch";



export default function Home() {
    const [searchTerm, setSearchTerm] = useState("");
    const [videos, setVideos] = useState([]);
    // const [allVideos, setAllVideos] = useState([]);


    // function handleSubmit(event) {
    //     const title = event.target.value;
    //     const result = title.length ? filterVideos(title, allVideos) : allVideos;
        
    //     setSearchTerm(title);
    //     setVideos(result);
    //   }



    function handleSearch () {
        getAllVideos(searchTerm)

    }

    console.log(handleSearch)

    // console.log(searchTerm)


  return (
    <div>
      <form>
      <input
        type="text"
        value={searchTerm}
        id="searchTitle"
        placeholder="Search..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <input 
      type="submit"
      onClick={() => handleSearch()}
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
