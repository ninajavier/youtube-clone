import { NavLink } from "react-router-dom"
export default function VideoIndex({ searchResults }) {

    return (
        <div>
            {searchResults.map((video) => {
                return (

                    <div>
                        <img src={video.snippet.thumbnails.default.url} />
                        <p>{video.snippet.title}</p>
                    </div>


                )
            })}
        </div>
    )
}
