import profilePicture from '../assets/profile-picture-2.jpeg'
import emailIcon from '../assets/email-icon.png'
import linkedinIcon from '../assets/linkedin-icon.png'

function Info() {
    return (
        <div className="info">
            <img className="info--profile-picture" src={profilePicture} alt="Snoopy" />
            <div className="info--basic-info">
                <h1 className="name">Snoopy Smith</h1>
                <h2 className="title">Frontend Developer</h2>
                <p className="website">snoopysmith.website</p>
            </div>
            <div className="info--social">
                <button className='email-btn'>
                    <img src={emailIcon} alt="email icon" />
                    Email
                </button>
                <button className='linkedin-btn'>
                    <img src={linkedinIcon} alt="linkedin icon" />
                    Linkedin
                </button>
            </div>
        </div>
    )
}

export default Info