import React from 'react'
import './profile.scss'

function Profile() {
  return (
    <div className="mb__profile section__padding">
        <div className="mb__profile-header">
            <i className="fas fa-video"></i>
            <h1 className="section__title">Profile Sekolah</h1>
        </div>
        <div className="mb__profile-content">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/CfcD0d3U4z4?rel=0" title="YouTube video player" frameBorder="0" allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/25jEz6iMukU?rel=0" title="YouTube video player" frameBorder="0" allow="fullscreen;" allowFullScreen></iframe>
        </div>
    </div>
  )
}

export default Profile