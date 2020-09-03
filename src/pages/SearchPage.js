import React from "react";
import { Link } from "react-router-dom";

import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";
import mockResponse from "../mockResponse";
import Search from "./../components/Search";

import "./SearchPage.css";
import ImageIcon from "@material-ui/icons/ImageOutlined";
import LocalOfferIcon from "@material-ui/icons/LocalOfferOutlined";
import RoomIcon from "@material-ui/icons/RoomOutlined";
import DescriptionIcon from "@material-ui/icons/DescriptionOutlined";
import SearchIcon from "@material-ui/icons/SearchOutlined";
import MoreVertIcon from "@material-ui/icons/MoreVertOutlined";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  //LIVE API CALL
  const { data } = useGoogleSearch(term);

  //mock data
  //const data = mockResponse;

  const resultCount = data?.searchInformation?.formattedTotalResults;
  const resultTime = data?.searchInformation?.formattedSearchTime;

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

      {term && (
        <div className="searchPage__results">
          <p className="searchPage__resultCount">
            About {resultCount} results ({resultTime} seconds) for {term}
          </p>

          {data?.items.map((item) => (
            <div className="searchPage__result" key={item.cacheId}>
              <a className="searchPage__resultLink" href={item.link}>
                {item.displayLink}
                <ArrowDropDownIcon />
              </a>
              <a className="searchPage__resultTitle" href={item.link}>
                <h3>{item.title}</h3>
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
