import React from "react";
import Avatar from "@material-ui/core/Avatar";
import People from "../../../assets/people.jpg";

const TopCategories = ({ num }) => {
  return (
    <div className="topCategoriesCon">
      <div className="row">
        <p className="num">{num}.</p>
        <Avatar alt="Trevor Henderson" src={People} />
        <div className="column">
          <p className="name">Johnathan</p>
          <p className="pos">Actor</p>
        </div>
      </div>
      <div className="button">
        <p className="btnName">Add</p>
      </div>
    </div>
  );
};

export default TopCategories;
