import profilePicture from '../assets/profile-picture.jpeg'
import emailIcon from '../assets/email-icon.png'
import linkedinIcon from '../assets/linkedin-icon.png'

function Info() {
    return (
        <div className="info">
            <div className="info--profile-picture">
                <img src={profilePicture} alt="Snoopy" />
            </div>
            <div className="info--basic-info">
                <h1 className="name">Paulo M Borges</h1>
                <h2 className="title">Frontend Developer</h2>
                <p className="website">paulomborges.website</p>
            </div>
            <div className="info--social">
                <button>
                    <img src={emailIcon} alt="email icon" />
                    Email
                </button>
                <button>
                    <img src={linkedinIcon} alt="linkedin icon" />
                    Linkedin
                </button>
            </div>
        </div>
    )
}

export default Info