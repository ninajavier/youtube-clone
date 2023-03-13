import { NavLink } from "react-router-dom"
export default function VideoIndex({ searchResults }) {

    return (
        <div>
            {searchResults.map((video) => {
                return (

                    <div>
                        <NavLink to={`/videos/${video.id.videoId}`}><img src={video.snippet.thumbnails.default.url} /></NavLink>
                        <p>{video.snippet.title}</p>
                    </div>


                )
            })}
        </div>
    )
}
