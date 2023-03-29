import React from "react";
import PropTypes, { string } from "prop-types";
import "./Card.css";

function Card({ props }) {
  const [url, title, text1, text2] = [...props];
  return (
    <div className="card">
      <img src={url} alt="img" />
      <h1>{title}</h1>
      <p>
        {text1}
        {text2}
      </p>
    </div>
  );
}
Card.propTypes = {
  props: PropTypes.arrayOf(string).isRequired,
};
export default Card;
