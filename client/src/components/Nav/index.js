import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
// import quotation from "../../../public/images/quoteicon.png";

function Nav() {

    function refreshPage() {
      window.location.reload(false);
    }

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/orderHistory">
              Order History
            </Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <div class='login'>
        <ul className="flex-row ">
          <li className="">
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li className="">
            <Link to="/login">
              Login
            </Link>
          </li>
          
        </ul>
        </div>
      );
    }
  }

  return (
    <header className="flex-row">
      <h1 className="penny" onClick={refreshPage}>
        <Link to="/">
<<<<<<< HEAD
          <img className="quote-icon "src={process.env.PUBLIC_URL+"images/quoteicon.png"}/>
=======
          <span role="img" aria-label="coin"></span>
>>>>>>> christian-2
          Penny For Your Thoughts
        </Link>
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
