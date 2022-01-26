import './UserDetailsHeaderRight.css';

import React from 'react';

import {
  UnsplashUserProfile,
} from '../../../../utils/types/unsplash/unsplashUserProfile';
import UserDetailsHeaderRightStats
  from './UserDetailsHeaderRightStats/UserDetailsHeaderRightStats';

function UserDetailsHeaderRight(props: { userProfile: UnsplashUserProfile }) {
  return (
    <div className="ggProfileUserInfo9305 flexbox">
      <span className="ggProfileUsername9305">{props.userProfile.username}</span>
      <div className="ggProfileUserStats9305 flexbox">
        <UserDetailsHeaderRightStats photos={props.userProfile.total_photos} followers={props.userProfile.followers_count} following={props.userProfile.following_count} />
      </div>
      <div className="ggProfileName9305">{props.userProfile.name}</div>
      <div className="ggProfileBio9305">{props.userProfile.bio}</div>
      <div className="location">{props.userProfile.location}</div>
    </div>
  )
}

export default UserDetailsHeaderRight
