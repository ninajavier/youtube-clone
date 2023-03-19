import { useState} from "react"
import { useEffect } from "react"
import './Submit.css'

export default function Submit() {

    const [comment, setComment] = useState([])


    function commentHandle(event) {
        event.preventDefault()


        const commenterName = event.target.elements["commenter name"].value
        const commenterText= event.target.elements.comment.value
        const newComment = {commenter: commenterName, commented: commenterText}
        setComment((previous) => [...previous, newComment])
        event.target.reset()
        

    }

    useEffect(() => {
        console.log(comment)
    }, [comment])
    
    return (
        <div>
            <div className="comments-section">

            <form className="comment" onSubmit={commentHandle}>
            
            <label htmlFor="commenter name">Name</label>
            <input type="text" name="commenter name"/>
            <br/>
            <label htmlFor="comment">Comment</label>
            <input id="comment" name="comment"/>
            <button type="submit">Submit</button>

            </form>

            {comment.map((word) => { 
                return (
                <div>
                <h3>{word.commenter}</h3>
                <p>{word.commented}</p> 
                </div>
                )
            })}

            </div>
        </div>
    )
}