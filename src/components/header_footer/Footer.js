import React from "react";
import { Fade } from "react-awesome-reveal";

function Footer() {
  return (
    <footer className="bck_red">
      <Fade>
        <div className="font_righteous_footer_logo_venue">The Venue</div>
        <div className="footer_copyright">
          {" "}
          The Venue 2021 All rights reserved
        </div>
      </Fade>
    </footer>
  );
}

export default Footer;
