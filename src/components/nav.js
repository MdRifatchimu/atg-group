import React from 'react';

function nav() {
  return (
    <nav id="nav">
      <ul>
        <li>
          <img id="logo" src="images/logo.png" />
        </li>
        <li>
          <input
            id="search-box"
            type="text"
            name=""
            placeholder="Search for your favorite group in ATG"
            style="background-image: url(images/se.png);"
          />
        </li>
        <li id="account">
          <div className="dropdown" onclick="toggle()">
            <button className="dropbtn">
              Create account.
              <span style="color:#0000FF">
                <b> It's free!</b>
              </span>
            </button>
            <span className="caret"></span>
            <div className="dropdown-content">
              <a onclick="LogIn(1)">Sign In</a>
              <a onclick="SignUp(1)">Sign Up </a>
            </div>
          </div>
        </li>
        {/* changed  */}
        <div className="fix-image">
          <ul>
            <li>
              <img onclick="LogIn(1)" src="images/p4.jpg" />
            </li>
            <li>
              <h4 id="Name" onclick="LogIn(1)" style="font-family: Bahnschrift">
                <b>Hi</b>, Siddharth Goyal
              </h4>
            </li>
            <li>
              <span className="caret"></span>
            </li>
          </ul>
        </div>
      </ul>
    </nav>
  );
}

export default nav;
