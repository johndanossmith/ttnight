import { Box } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box className="">
      <footer>
        <div className="custom-container">
          <div className="footer-top">
            <div className="row">
              <div className="newsletter">
                <h3 className="join-newsletter">Join our newsletter</h3>
                <h6 className="text-gray">
                  Every party — straight to your inbox.
                </h6>
              </div>

              <div className="newsletter-form">
                <form>
                  <input type="text" placeholder="Enter your e-mail" />
                  <button type="submit">Subscribe</button>
                </form>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="row">
              <div className="footer-service">
                <nav>
                  <ul className="row gap">
                    <li>
                      <a href="#" className="text-gray">
                        Privacy Policy
                      </a>
                    </li>

                    <li>
                      <a href="#" className="text-gray">
                        Terms of Conditions
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="footer-description">
                <h6 className="text-end text-gray">
                  22NIGHTS BV. All rights reserved.
                </h6>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Box>
  );
};

export default Footer;
