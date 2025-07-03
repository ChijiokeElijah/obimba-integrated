// components/Loader.jsx

import loader_img from "../images/loader_img.svg";

export default function Loader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <img src={loader_img} alt="loader" />
    </div>
  );
}
