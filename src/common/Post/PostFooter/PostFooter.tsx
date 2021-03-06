import './PostFooter.css';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { ReactComponent as Heart } from '../../../icons/heart.svg';
import {ReactComponent as Share } from "../../../icons/share.svg";
const PostFooter = (props: {  username: string, caption: string,  likes: number }) => {
    const [likes, setLikes] = useState(props.likes)
    // console.log(props)
    const likePost =(e: any) =>{
        e.target.classList.toggle('ggLikePost9305')
        setLikes(likes+1)
        console.log(likes)
    }
    // useEffect(() => {
    //     setLikes(likes+1);
    //   }, [likes]);
    return (
        <div>
                <div className="ggIcons9305 flexbox">
                <Heart  onClick={likePost} className="ggIconItem9305 heart" />
                <Share className="ggIconItem9305" />

                </div>
                <span className="ggPostLikes9305" >{likes} likes</span>
                <p className="ggPostCaption9305">
                <Link to={`/userdetails/${props.username}`} className='Caption'>{props.username}</Link>
                {props.caption}

                </p>

            </div>

    );
}

export default PostFooter;