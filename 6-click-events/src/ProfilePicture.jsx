import React from 'react'

const ProfilePicture = () => {

    const imageUrl = './src/assets/react.svg';

    const handleClick = (e) => {
        e.target.style.display = 'none';
    }

    return (
        <img src={imageUrl} alt="Profile Picture" onDoubleClick={(e) => handleClick(e)} />
    )
}

export default ProfilePicture