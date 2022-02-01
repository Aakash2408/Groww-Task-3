import React from "react";
import Feed from "./Feed";
import { Component } from "react";
import ProfileSuggestions from "../../common/profileSuggestions";
export default class NewsFeed extends Component{
  render() {
      return (
          <div >
              <Feed />
              {/* <ProfileSuggestions/> */}
          </div>
      )
  }
}