import TwitterIcon from '../assets/twitter-icon.png';
import FacebookIcon from '../assets/facebook-icon.png';
import InstagramIcon from '../assets/instagram-icon.png';
import GithubIcon from '../assets/github-icon.png';

function Footer() {
    return (
        <footer className="footer">
            <img className="footer--icon" src={TwitterIcon} alt="twitter icon" />
            <img className="footer--icon" src={FacebookIcon} alt="facebook icon" />
            <img className="footer--icon" src={InstagramIcon} alt="instagram icon" />
            <img className="footer--icon" src={GithubIcon} alt="github icon" />
        </footer>
    )


}

export default Footer