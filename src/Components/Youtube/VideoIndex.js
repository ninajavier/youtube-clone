import { NavLink } from "react-router-dom"
import './VideoIndex.css'

export default function VideoIndex({ searchResults }) {

    return (
        <div className="videos">
            {searchResults.map((video) => {
                return (

                    <div className="video">
                        <NavLink to={`/videos/${video.id.videoId}`}><img src={video.snippet.thumbnails.high.url} alt='video'/></NavLink>
                        <p>{video.snippet.title}</p>
                    </div>


                )
            })}
        </div>
    )
}
