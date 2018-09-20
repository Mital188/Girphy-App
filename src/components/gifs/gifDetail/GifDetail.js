import React from 'react';
import './GifDetail.css'
import i from '../../../img/404.jpg'

const gifDetail = (props) =>{
    var gif = props.gif;
    var url='';
    var userName='';
    var userImg='';
    var title ='';
    var rating='';
    if(Object.keys(gif).length === 0 && gif.constructor === Object){

    }else{
        url = gif.images.downsized.url;
        userName= gif.username;
        if(gif.hasOwnProperty('user')){
            userImg = gif.user.avatar_url;
        }else{
            userName='No User Name'
            userImg =  i;
        }
        rating = gif.rating;
        title = gif.title;
    }
    console.log(gif)
    return(
        <div>
            <img className='gif' src={url} alt="" width="100%" />
            <img className='Icon' src={userImg} width="50px" alt="Avatar"/>
            <h3 className='User'>{userName}</h3>
            <p>
                <b>Title:</b><span className='Title'> {title}</span><br/>
                <b>Rating:</b><span className='Rating'> {rating}</span>
            </p>
        </div>
    );
}

export default gifDetail;