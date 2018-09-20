import React from 'react';
import Gif from './gif/Gif';
import './Gifs.css';

const Gifs = (props) =>{
    const gifs = props.gifs.map((gif)=>{
        return <Gif onClick={() => props.onClick(gif)} key={gif.id} gif={gif}/>
    });

    return(
        <div className="Gifs">{gifs}</div>
    );
}

export default Gifs;