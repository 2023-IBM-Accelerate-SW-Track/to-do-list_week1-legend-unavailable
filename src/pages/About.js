import React, { Component } from 'react';
import "./About.css";
import me from '../assets/me.jpg';

export default class About extends Component {
  render() {
    return (
      <div>
        <div className = "split left">
          <div className = "centered">
            <img 
              className = "profile_image"
              src= {me.jpg}
                alt = "Profile Pic"
                ></img>
          </div>
        </div>
        <div className='split left'>
          <div className='centered'>
            <div className='name_title'> Your Name</div>
            <div className='brief_description'>
              // my info
            </div>
          </div>
        </div> 
      </div>
    )
  }
}