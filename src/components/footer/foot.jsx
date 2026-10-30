import "./footer.css";
import { Link } from "react-router-dom";
import {
  UilFacebook,
  UilWhatsapp,
  UilTwitter,
  UilGithub,
  UilLinkedin,
  UilInstagram,
  UilEnvelope,
  UilPhone,
} from "@iconscout/react-unicons";

const socials = [
  { href: "https://github.com/MR-MIKE001", label: "GitHub", Icon: UilGithub },
  { href: "https://www.linkedin.com/in/micheal-ibrahim-57539937a", label: "LinkedIn", Icon: UilLinkedin },
  { href: "https://x.com/mrmikeadavize", label: "X (Twitter)", Icon: UilTwitter },
  { href: "https://www.instagram.com/aimrmike5", label: "Instagram", Icon: UilInstagram },
  { href: "https://web.facebook.com/profile.php?id=100085523963850", label: "Facebook", Icon: UilFacebook },
  { href: "https://wa.me/+2348109433307", label: "WhatsApp", Icon: UilWhatsapp },
];

function Foot() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="f-top">
          <div className="f-brand">
            <Link to="/" className="f-logo">
              MR<span>_</span>MIKE
            </Link>
            <p>
              Senior Software Engineer building scalable, production-ready web
              and mobile applications.
            </p>
          </div>

          <nav className="f-col" aria-label="Footer">
            <h4>Pages</h4>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/experience">Experience</Link>
            <Link to="/services">Services</Link>
          </nav>

          <div className="f-col">
            <h4>Contact</h4>
            <a href="mailto:Micheal.A.Ibrahim@gmail.com">
              <UilEnvelope size="16" /> Micheal.A.Ibrahim@gmail.com
            </a>
            <a href="tel:+2348109433307">
              <UilPhone size="16" /> +234 810 943 3307
            </a>
          </div>
        </div>

        <div className="f-bottom">
          <p>© {new Date().getFullYear()} Micheal A. Ibrahim. All rights reserved.</p>
          <div className="f-icons">
            {socials.map(({ href, label, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                <Icon size="18" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Foot;
