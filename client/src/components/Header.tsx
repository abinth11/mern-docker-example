import React from "react";
import "../styles/components.css";
import {Link} from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div>
      <ul className='list'>
        <Link to="/quotes">
          <li className='list-item'>Quotes</li>
        </Link>
        <Link to="/post-quotes">
          <li className='list-item'>Post quotes</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
