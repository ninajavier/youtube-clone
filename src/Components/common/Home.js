import { useState } from "react";



export default function Home() {
    const [searchTerm, setSearchTerm] = useState("");
    const [videos, setVideos] = useState([]);
    const [allVideos, setAllVideos] = useState([]);


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
