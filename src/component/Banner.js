import './Banner.css';
import { FaMandalorian } from "react-icons/fa6";
import { FiChevronRight } from "react-icons/fi";

function Banner(){
    return(
        <div className="main">
            <div className="header">
                <FaMandalorian className="logoIcon"/>
                <div className="subHeader">
                    <select className="dropDown">
                        <option>English</option>
                        <option>ไทย</option>
                    </select>
                    <button className="btn">Sign In</button>
                </div>
            </div>
           <div className="center">
                <div className="detail">
                    <h1>Unlimited movies, TV shows, and more</h1>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                </div>
                <div className="inputEmail">
                    <input type="text" placeholder="Email address" className="textEmail"></input>
                    <button>Get Started <span style={{marginTop:'20px;'}}><FiChevronRight/></span></button>
                </div>
           </div>
        </div>
    );
}

export default Banner;
