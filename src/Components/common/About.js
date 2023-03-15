import Nina from '../../Images/Nina.J.jpeg'
import Samuel from '../../Images/Samuel.B.Alba.jpeg'
import GitLogo from '../../Images/GitHub-Mark.png'



export default function About() {

    return (
       <div>

        <div className="description">


        <h1>Project Description:</h1>
        <p>Using React, one of Javascripts most powerful libraries, we were able to successfully create our very own YouTube front end clone. We integrated YouTube’s Data API on our platform to allow the user access to data from the videos searched and also the ability to watch a particular video.</p>

        </div>

        <div className="team">

        <h2>The Team:</h2>

        <img height='200px' src={Nina} alt='nina'/>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae atque, nobis obcaecati ad vel provident cupiditate deleniti delectus tednndwdd dw dw dwdwi jnwjddnjwdnj</p>
       
        <a href="https://github.com/ninajavier">
            <img height="100px" src={GitLogo}/>
        </a>

        <img height='200px' src={Samuel} alt='Samuel'/>


        </div>

       

       </div>
    )

    
}