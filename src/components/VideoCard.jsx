import React from "react";
import './Style.css';

const VideoCard = props => {
    return(
        <div className='VideoCard'>
            <img src={props.image} alt={props.title}/>
            <div className="VideoCardTextBox">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    );
};

export default VideoCard;