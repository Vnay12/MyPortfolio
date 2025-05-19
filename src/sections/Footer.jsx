import { socialImgs } from "../constants";

const Footer = () => {
  const handleClick = (url) => {
    window.open(url, "_blank"); // opens in new tab
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>
        <div className="socials flex gap-4">
          {socialImgs.map((socialImg, index) => (
            <div
              key={index}
              className="icon cursor-pointer"
              onClick={() => handleClick(socialImg.URL)}
            >
              <img
                src={socialImg.imgPath}
                alt={`${socialImg.name} icon`}
                className="w-6 h-6"
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
