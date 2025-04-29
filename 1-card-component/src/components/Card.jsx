import profilePic from '../assets/Yash Profile.png'

function Card() {
    return (
        <div className='card'>
            {/* This is for place holder image */}
            {/* <img src="https://via.placeholder.com/150" alt="Profile Picture" /> */}

            {/* This is my image */}
            <img src={ profilePic } alt="Profile Picture" className='profileImg' />
            <h2 className='title'>Yash Balotiya</h2>
            <p>Hi, I'm a student of Computer Engineering @VESIT</p>
        </div>
    )
}

export default Card