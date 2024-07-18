import Laura from "../../assets/images/profile.png"
import "../../components/card/Card.css"
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import twitter from "../../assets/images/Twitter Icon.png"
import facebook from "../../assets/images/Facebook Icon.png"
import github from "../../assets/images/GitHub Icon.png"
import insta from "../../assets/images/Instagram Icon.png"

const Card = () => {
  return (
    <div className="mainCard">
      <div className="card-item">
        <img src={Laura} alt="" />
        <h3>Laura Smith</h3>
        <p className="role">Frontend Developer</p>
        <p>laurasmith.website</p>
        <div className="buttons">
          <button className="first-btn" onClick={()=>{
            document.body.classList.add("lightmode");
          }}>
            <MdEmail /> Email
          </button>
          <button className="second-btn" onClick={()=>{
            document.body.classList.remove("lightmode")
          }}>
            <FaLinkedin /> linkedin
          </button>
        </div>
        <div className="about">
          <h4>About</h4>
          <p>
            I am a frontend developer with a particular interest in making
            things simple and automating daily task.I try to keep up with
            security and best practices, and am always looking for new things to
            lear
          </p>
        </div>
        <div className="about">
          <h4>Interest</h4>
          <p>
            Food expert, Music scholar, Reader, Internet fanatic, Bacon buff,
            Entreprenuer, Travel geek, Pop culture ninja, Coffee fanatic
          </p>
        </div>
        <div className="footer">
          <img src={twitter} alt="" />
          <img src={facebook} alt="" />
          <img src={github} alt="" />
          <img src={insta} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Card