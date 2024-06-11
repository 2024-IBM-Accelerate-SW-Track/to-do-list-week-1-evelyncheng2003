import React, { Component } from 'react';
import "./About.css";
import EvelynPic from "../assets/evelyn.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="split left">
            <div className="centered">
              <img
                className="profile_image"
                src={EvelynPic}
                alt="Profile Pic"
              ></img>
            </div>
          </div>
          <div className="split right">
            <div className="centered">
              <div className="name_title">Evelyn Cheng</div>
              <div className="brief_description">
                I am a rising junior at Columbia University majoring in Computer Science and minoring in Economics!
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}