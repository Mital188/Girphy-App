import React from 'react';
import './Gif.css'

const Gif = (props) => {
    return(
        <div className="Gif" onClick={props.onClick}>
            <img src={props.gif.images.downsized.url} alt=""/>
        </div>
    )
}

export default Gif;