import './Post.css';

import { UnsplashPhoto } from '../../utils/types/unsplash/unsplashPhoto';
import PostFooter from './PostFooter/PostFooter';
import PostHeader from './PostHeader/PostHeader';
import PostImage from './PostImage/PostImage';

const Post = (props: {photo: UnsplashPhoto}) => {
    return (
        <div className="ggPost9305">
            
            <PostHeader username={props.photo.user.username} location={(props.photo.location) ? props.photo.location.name : ''} profileImage={props.photo.user.profile_image.large} />
            
           
            <PostImage photo={props.photo.urls.regular}/>
            
            
            <div className="ggPostFooter9305 flexbox">
            <PostFooter username={props.photo.user.name} caption={props.photo.description} likes={props.photo.likes} />
            </div>
        </div>
    );
}

export default Post;