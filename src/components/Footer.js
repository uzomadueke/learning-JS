import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="w-full text-white py-4 px-5 mt-auto">
      {/*<div className="flex justify-between items-center w-full">*/}
        {/* Bottom Left Text */}
        <div className="text-gray-500 text-sm font-custom">
          &#169; 2025 socialstudios, Inc.
        </div>

        {/* Bottom Right Links */}
        <div className="flex space-x-6">
          <a
            className="text-aquatic text-sm font-custom opacity-80 hover:opacity-30"
            href="https://github.com/uzomadueke"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="text-aquatic text-sm font-custom opacity-80 hover:opacity-30"
            href="https://www.linkedin.com/in/kennedy-soruzo-madueke-712662246?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BGMpwPT%2BGS4eauP6cV0TpRw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="text-aquatic text-sm font-custom opacity-80 hover:opacity-30"
            href="mailto:seandonny333@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact
          </a>
        </div>
    </footer>
  );
};

export default Footer;