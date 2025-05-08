import './FooterSection.css';
import Button from '../../Componentes/Button/Button.jsx';

function FooterSection() {
    return (
      <>
        <div className="footer">
          <div className="footer-title">
            <h1>OTCX</h1>
            <p>
              Trade smarter with OTEX - a secure intutive platform offering deep
              liquidity real-time Insights and zero slippage. Whether you're a pro
              or just starting out XOTC delivers speed, trust and
              searless OTE trading
            </p>
            <div className="footer-icons">
              <a href="https://www.instagram.com" target="_blank">
                <i class="fab fa-instagram"></i>
              </a>{' '}
              |
              <a href="https://www.twitter.com" target="_blank">
                <i class="fab fa-twitter"></i>
              </a>{' '}
              |
              <a href="https://www.facebook.com" target="_blank">
                <i class="fab fa-facebook"></i>
              </a>{' '}
              |
              <a href="https://www.linkedin.com" target="_blank">
                <i class="fa-brands fa-linkedin"></i>
              </a>{' '}
              |
              <a href="https://www.youtube.com" target="_blank">
                <i class="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
          <div className="footer-end">
            <div className="footer-end-left">
              <input type="email" id="email" placeholder="✉️ Your email here" />
              <Button text="Request Early Access" onClick={() => {}} variant="primary" />
            </div>
            <div className="footer-end-right">
              
              <ul>
                <h4>Socials</h4>
                <li>Twitter</li>
                <li>Discord</li>
                <li>LinkedIn</li>
              </ul>
              
              <ul>
                <h4>Info</h4>
                <li>Docs</li>
                <li>Partnership</li>
                <li>Contact</li>
              </ul>
              
              <ul>
                <h4>Other</h4>
                <li>Private OTC</li>
                <li>Community</li>
                <li>Project teams</li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default FooterSection;
  