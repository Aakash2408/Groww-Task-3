import './UserDetailsHeaderRightStats.css';

import React from 'react';

interface MyProps {
    photos: number,
    followers: number,
    following: number
}
function UserDetailsHeaderRightStats(props: MyProps) {
    return (
        
        <div className="ggProfileUserStats9305 flexbox">
            <div className="ggProfileUserStItem9305 flexbox">
                <b>{props.photos}</b><span> Photos</span>
            </div>
            <div className="ggProfileUserStItem9305 flexbox">
                <b>{props.followers}</b><span> Followers</span>
            </div>
            <div className="ggProfileUserStItem9305 flexbox">
                <b>{props.following}</b><span> Following</span>
            </div>
        </div>
        
    )
}

export default UserDetailsHeaderRightStats
