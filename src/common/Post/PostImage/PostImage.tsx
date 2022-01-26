import './PostImage.css';

const PostImage = (props: { photo: string }) => {
    return (
        <div  >
            <img className="ggPostImage9305" alt="desc" src={props.photo}/>
        </div>
    );
}

export default PostImage;