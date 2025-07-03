// components/Loader.jsx

import Loader_img from "../images/Loader_img.svg";

export default function Loader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <img src={Loader_img} alt="loader"/>  
      
    </div>
  );
}
