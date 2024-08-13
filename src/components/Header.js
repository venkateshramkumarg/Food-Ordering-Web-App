import { LOGO_URL } from "./utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
import UserContext from "./utils/UserContext";
import { useContext } from "react";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const {loggedInUser}=useContext(UserContext)
  console.log(loggedInUser);

  return (
    <header className="bg-gray-800 text-white py-4 px-8 flex justify-between items-center">
      <Link to="/">
        <img src={LOGO_URL} alt="Logo" className="h-10 w-10" />
      </Link>
      <ul className="flex space-x-4">
        <li className="text-sm">Online Status: {onlineStatus ? '✅' : '🔴'}</li>
        <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
        <li><Link to="/about" className="hover:text-gray-300">About Us</Link></li>
        <li><Link to="/contact" className="hover:text-gray-300">Contact Us</Link></li>
        <li><Link to="/grocery" className="hover:text-gray-300">Grocery</Link></li>
        <li className="hover:text-gray-300">Cart</li>
        <li>{loggedInUser}</li>
      </ul>
    </header>
  );
};

export default Header;
