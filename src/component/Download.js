import './Download.css';
import { AiOutlineDownload } from "react-icons/ai";

function Download(){
    return(
        
        <div className="downloadMain">
            <div className="downloadShow">
                <div className="downloadImg">
                    <div className="miniBox">
                        <div className="subMiniBox">
                            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"></img>
                            <div className="miniBoxText">
                                <div className="textMini">
                                    <h2>Stranger Things</h2>
                                    <p>Downloading...</p>
                                </div>
                                <div class="reactIcon">
                                    <button><AiOutlineDownload/></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="downloadTv">
                    <h1>Download your shows<br/>to watch offline</h1>
                    <h3>Save your favorites easily and always have <br/>something to watch.</h3>
                </div>
            </div>
        </div>
        
    );
}

export default Download;