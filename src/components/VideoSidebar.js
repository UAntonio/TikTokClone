import React, { useState } from 'react';
import './VideoSidebar.css';
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";

function VideoSidebar({likes, shares, messages}) {
    const [liked, setLicked] = useStateState(false);

    return (
        <div className="videoSidebar">
            <div className="videoSidebar_button">
                {liked ? (<FavoriteIcon fontSize="large"
                onClick={(e)=>setLicked(false)}/>):
                (<FavoriteBorderIcon fontSize="large"
                onClick={(e)=>setLicked(true)}
                />)}
                <p>{liked ? likes + 1:likes}</p>
            </div>
            <div className="videoSidebar_button">
                 <MessageIcon fontSize="large"/>
                 <p>{messages}</p>               
            </div>
            <div className="videoSidebar_button">
               <ShareIcon fontSIze="large"/>  
               <p>{shares}</p>               
            </div>                    
        </div>
    )
}



export default VideoSidebar

