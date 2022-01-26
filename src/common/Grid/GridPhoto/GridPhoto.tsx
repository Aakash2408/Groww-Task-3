import './GridPhoto.css';
import {ReactComponent as Heart} from "../../../icons/heart.svg"
import React from 'react';

function GridPhoto(props: {photo: string, likes: number, description: string}) {
    return (
        <div className="grid-photo">
            
            <div className="grid-likes"><span><Heart viewBox="0 0 50 50" className="ggUserPhotoLikes9305"  />{" "+ props.likes} </span></div>
            <img src={props.photo} alt={props.description} />
        </div>
    )
}

export default GridPhoto
