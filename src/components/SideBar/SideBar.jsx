import React from "react";
import PropTypes from "prop-types";
import NavMenu from "../NavBar/NavMenu";

function SideBar({ active }) {
  return (
    <div className={active ? "sidebar open" : "sidebar"}>
      <div className="sidebar-style">
        <NavMenu
          props={[
            "DUCKDUCKGO SEARCH",
            "Private Search",
            "https://duckduckgo.com/",
            "Themes",
            "https://duckduckgo.com/settings#theme",
            "All Settings",
            "https://duckduckgo.com/settings",
            "!Bang Search Shortcuts",
            "https://duckduckgo.com/bangs",
          ]}
        />
        <NavMenu
          props={[
            "DOWNLOADS",
            "iOS",
            "",
            "Android",
            "https://play.google.com/store/apps/details?id=com.duckduckgo.mobile.android&referrer=utm_source%3Dstatic-sidemenu",
            "Mac",
            "https://duckduckgo.com/mac",
            "Browse Extension",
            "https://duckduckgo.com/app",
          ]}
        />
        <NavMenu
          props={[
            "WHY PRIVACY",
            "Privacy Blog",
            "https://spreadprivacy.com/",
            "Privacy Newsletter",
            "https://duckduckgo.com/newsletter",
            "Help Spread DuckDuckGo!",
            "https://duckduckgo.com/spread",
            "",
            "",
          ]}
        />
        <NavMenu
          props={[
            "LEARN MORE",
            "About Us",
            "https://duckduckgo.com/about",
            "Privacy Policy",
            "https://duckduckgo.com/privacy",
            "Careers",
            "https://duckduckgo.com/hiring",
            "Press Kit",
            "https://duckduckgo.com/press",
          ]}
        />
        <NavMenu
          props={[
            "KEEP IN TOUCH",
            "Twitter",
            "https://twitter.com/",
            "Reddit",
            "https://reddit.com",
            "Help",
            "https://help.duckduckgo.com/",
            "Advertise on Seearch",
            "https://help.duckduckgo.com/company/advertise-on-duckduckgo-search",
          ]}
        />
      </div>
    </div>
  );
}
export default SideBar;
SideBar.propTypes = {
  active: PropTypes.bool.isRequired,
};
