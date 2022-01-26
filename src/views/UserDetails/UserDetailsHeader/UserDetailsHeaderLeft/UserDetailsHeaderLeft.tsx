import './UserDetailsHeaderLeft.css';

import UserProfilePic from '../../../../common/UserProfilePic/UserProfilePic';

function UserDetailsHeaderLeft(props: { profileImage: string }) {
    return (
        <div className="ggProfileAvatar" >
            <UserProfilePic profileImage={props.profileImage} size='medium'/>
        </div>
    )
}

export default UserDetailsHeaderLeft;