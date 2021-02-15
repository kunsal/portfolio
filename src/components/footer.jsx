import React from 'react';

const Footer = () => {
  return ( 
    <footer className="footer" style={{ height: 80, color: '#fff' }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 col-sm-6"><span className="copyright">© 2020 <a href="/">Kaytivity</a>, All Rights Reserved.</span></div>
          <div className="col-md-6 col-sm-6">
            <ul className="social-icons">
              <li><a href="https://facebook.com/salami.kunsal" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook-square"></i></a></li>
              <li><a href="https://twitter.com/olakunsal" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter-square"></i></a></li>
              <li><a href="https://www.linkedin.com/in/olakunle-salami-59a50664" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin-square"></i></a></li>
              <li><a href="https://github.com/kunsal" target="_blank" rel="noopener noreferrer"><i className="fa fa-github-square"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
   );
}
 
export default Footer;