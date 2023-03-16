import { useState } from "react"
export default function Submit() {

    const [comment, setComment] = useState([])
    // const [name, setName] = useState("")
    // const [text, setText] = useState("")
    // const [submited, setSubmited] = useState(null)



    function commentHandle(event) {
        event.preventDefault()

        // const element = (
        //     <div>
        //         <p>Name: {name}</p>
        //         <p>Comment: {text}</p>
        //     </div>
        // )

        // setSubmited(element)
        // setName('')
        // setText('')
    
        const commenterName = event.target.elements["commenter name"].value
        const commenterText= event.target.elements.comment.value
        const newComment = {"commenter": commenterName, "commented": commenterText}
        comment.push(newComment)
       
        

        console.log(comment)
        
    

        // console.log(commenterName)
        // console.log(commenterText)



    }
    
    
    
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
                <p>{word.commenter}</p>
                <p>{word.commented}</p> 
                </div>
                )

            })}

            


            </div>
        </div>
    )
}