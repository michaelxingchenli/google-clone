import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { Avatar } from "@material-ui/core";
import AppsIcon from "@material-ui/icons/Apps";
import PropTypes from "prop-types";

import Search from "./../components/Search";

const Home = (props) => {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="home__headerRight">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>
      <div className="home__body">
        <img
          src="https://www.google.ca/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt="logo"
        />
        <div className="home__inputContainer">
          <Search />
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {};

export default Home;
