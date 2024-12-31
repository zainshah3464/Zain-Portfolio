// components/AboutMe.js
import React from 'react';
import Image from 'next/image';

const AboutMe = () => {
  return (
    <div className="about" id="about">
            <h2 className="about-section-title">About me</h2>
            <div className="about-content">
                <div className="column left">
                   <Image className="about-profile-image" src="/images/zain-profile.jpeg" alt="" width={300} height={300}/>
                </div>
                <div className="column right">
                    <div className="about-name-section">I'm <span className="about-name">Zain Ali Shah</span>,</div>
                    <p>As a video editor & graphic designer with four years of experience, I am proficient in video editing and logo designing. I can create high-quality videos, logos, product animation, advertisemenet video, advertisement poster, any type of design and any type of video editing. My attention to detail and understanding of design principles allow me to deliver visually appealing and effective designs to clients.</p>
                    {/* <button className="view-resume-button"></button> */}
                    <button class="view-resume-button"><span><a href="./data/ZAIN-CV.pdf" target="_blank">View Resume</a></span></button>
                </div>
            </div>
    </div>
  );
};

export default AboutMe;
