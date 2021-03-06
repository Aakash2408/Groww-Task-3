import './PostHeader.css';

import { Link } from 'react-router-dom';

import UserProfilePic from '../../UserProfilePic/UserProfilePic';

const PostHeader = (props: {username: string, location: string, profileImage: string}) => {
    
    return (
        <div className='ggPostHeader9305 flexbox'>
        <div className="post-header">
            <UserProfilePic profileImage={props.profileImage} size='small' />
            <div className="user-name">
                <Link to={`/user-details/${props.username}`} >{props.username}</Link>
                <p className="location">{props.location}</p>
            </div>
        </div>
        </div>
    );
}

export default PostHeader;