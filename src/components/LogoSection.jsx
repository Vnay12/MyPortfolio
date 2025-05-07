import { logoIconsList } from "../constants";

const LogoIcon = ({ icon }) => (
    <div className="logo-icon">
      <img
        src={icon.imgPath}
        alt="Logo"
        className="w-32 h-32 object-contain" // You can adjust the size as needed
      />
    </div>
  );
  
  const LogoShowcase = () => (
    <div className="md:my-20 my-10 relative">
      <div className="gradient-edge" />
      <div className="gradient-edge" />
  
      <div className="marquee h-52">
        <div className="marquee-box md:gap-12 gap-5 flex items-center">
          {logoIconsList.map((icon, index) => (
            <LogoIcon key={index} icon={icon} />
          ))}
          {logoIconsList.map((icon, index) => (
            <LogoIcon key={index + logoIconsList.length} icon={icon} />
          ))}
        </div>
      </div>
    </div>
  );
  
  export default LogoShowcase;