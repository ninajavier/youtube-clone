import Nina from '../../Images/Nina.J.jpeg'
import Samuel from '../../Images/Samuel.B.Alba.jpeg'
import GitLogo from '../../Images/GitHub-Mark.png'
import "./About.css";


export default function About() {

    return (
       <div>

        <div className="description">


        <h1>Project Description:</h1>
        <p>Using React, one of Javascripts most powerful libraries, we were able to successfully create our very own YouTube front end clone. We integrated YouTube’s Data API on our platform to allow the user access to data from the videos searched and also the ability to watch a particular video.</p>

        </div>

        <h2>The Team:</h2>

        <div className="team">

        <div className= "bios">

        <img height='200px' src={Nina} alt='nina'/>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae atque, nobis obcaecati ad vel provident cupiditate deleniti delectus tednndwdd dw dw dwdwi jnwjddnjwdnj</p>
       
        <a href="https://github.com/ninajavier">
            <img height="100px" src={GitLogo}/>
        </a>
        </div>

        <div className= "bios">

        <img height='200px' src={Samuel} alt='Samuel'/>

        <p>Samuel Alba was born and raised in New York City. He is currently a Pursuit Fellow with aspirations of becoming a full stack web developer in the near future. His main interests are sports, fashion and finiance.</p>

        <a href="https://github.com/SamuelBAlba">
            <img height="100px" src={GitLogo}/>
        </a>

        </div>


        </div>

       

       </div>
    )

    
}