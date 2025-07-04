// components/Loader.jsx

import spinner from "../images/spinner.svg";

export default function Loader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <img className="w-23 h-32" src={spinner} alt="loader" />
    </div>
  );
}
