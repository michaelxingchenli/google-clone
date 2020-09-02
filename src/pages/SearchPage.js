import React from "react";
import "./SearchPage.css";
import PropTypes from "prop-types";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";
import mockResponse from "../mockResponse";
import { Link } from "react-router-dom";
import Search from "./../components/Search";

import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import DescriptionIcon from "@material-ui/icons/Description";
import SearchIcon from "@material-ui/icons/Search";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function SearchPage(props) {
  const [{ term }, dispatch] = useStateValue();
  //LIVE API CALL
  //const { data } = useGoogleSearch(term);

  const data = mockResponse; //mock data
  const resultCount = data?.searchInformation.formattedTotalResults;
  const resultTime = data?.searchInformation.formattedSearchTime;

  console.log(data);
  return (
    <div className="SearchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            className="searchPage__logo"
            src="https://www.google.ca/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            alt="logo"
          />
        </Link>

        <div className="searchPage__body">
          <Search hideButtons />

          <div className="searchPage__options">
            <div className="searchPage__optionsLeft">
              <div className="searchPage__option">
                <SearchIcon />
                <Link to="/all">All </Link>
              </div>
              <div className="searchPage__option">
                <DescriptionIcon />
                <Link to="/news">News </Link>
              </div>
              <div className="searchPage__option">
                <ImageIcon />
                <Link to="/all">Images </Link>
              </div>
              <div className="searchPage__option">
                <LocalOfferIcon />
                <Link to="/all">shopping </Link>
              </div>
              <div className="searchPage__option">
                <RoomIcon />
                <Link to="/all">maps</Link>
              </div>
              <div className="searchPage__option">
                <MoreVertIcon />
                <Link to="/more">more</Link>
              </div>
            </div>
            <div className="searchPage__optionsRight">
              <div className="searchPage__option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="searchPage__option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {true && (
        <div className="searchPage__results">
          <p className="searchPage__resultCount">
            About {resultCount} results ({resultTime} seconds) for {term}
          </p>

          {data?.items.map((item) => (
            <div className="searchPage__result">
              <a href={item.link}>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className="searchPage__resultImage"
                      src={item.pagemap?.cse_image[0]?.src}
                      alt=""
                    />
                  )}
                {item.displayLink}
              </a>
              <a className="searchPage_resultTitle" href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <p className="searchPage__resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

SearchPage.propTypes = {};

export default SearchPage;
