import React from "react";

const Footer = () => {
  return (
    <footer>
      <div class="links">
           <p>
              <a className="icon-link" href="https://github.com/kwakueshun" target="_blank" rel="noopener noreferrer">
              <i className="icon-link fab fa-github fa-lg"></i> <span className="icon-link">GitHub</span>
              </a>
              <span className="footer-separator">•</span>
              <a className="icon-link" href="https://twitter.com/samxeshun" target="_blank">
              <i className="icon-link fab fa-twitter fa-lg"></i> <span className="icon-link">Twitter</span>
              </a>
              <span className="footer-separator">•</span>
              <a className="icon-link" href="mailto:samuel.eshun13@gmail.com">
              <i className="icon-link fas fa-envelope fa-lg"></i> <span className="icon-link">Email Me</span>
              </a>
              <span className="footer-separator">•</span>
              <a className="icon-link" href="https://www.linkedin.com/in/samuel-eshun-84186075/" target="_blank">
                  <i className="fab fa-linkedin-in"></i> <span className="icon-link">LinkedIn </span>
              </a>
              <span className="footer-separator">•</span>
              <a className="icon-link" href="https://stackoverflow.com/users/story/8164747" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-stack-overflow"></i> <span className="icon-link">Stack Overflow</span>
            </a>
           </p>
        </div>
        <p class="footnote">Copyright © 2018 Samuel Eshun. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
