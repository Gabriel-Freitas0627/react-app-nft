import React from "react";
import Avatar from "@material-ui/core/Avatar";

const TopCategories = ({ number, image, name, position }) => {
  return (
    <div className="topCategoriesCon">
      <div className="row">
        <p className="num">{number}.</p>
        <Avatar alt="Trevor Henderson" src={image} />
        <div className="column">
          <p className="name">{name}</p>
          <p className="pos">{position}</p>
        </div>
      </div>
      <div className="button" style={{ cursor: "pointer" }}>
        <p className="btnName">Add</p>
      </div>
    </div>
  );
};

export default TopCategories;
