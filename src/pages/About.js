import React, { Component } from 'react';
import "./About.css";
import me from '../assets/me.jpg';

export default class About extends Component {
  render() {
    return (
      <div>
        <div>
        <div className="split left">
          <div className="centered">
            <img 
              className="profile_image"
              src={me}
              alt="Profile Pic"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Jose Aguilar</div>
            <div className="brief_description">
            Hey, listen! My name is Jose and I'm a current 
            undergraduate CS student at CSU Dominguez Hills. 
            I enjoy a lot of things such as video games, music, 
            and of course coding.
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}