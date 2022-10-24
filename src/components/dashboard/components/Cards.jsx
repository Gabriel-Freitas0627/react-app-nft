import React from "react";
import Avatar from "@material-ui/core/Avatar";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import CardImage from "../../../assets/card.jpg";
import People from "../../../assets/people.jpg";

const Cards = () => {
  return (
    <div className="card">
      <img className="cardMedia" src={CardImage} alt="card" />
      <p className="cardHead">Created By</p>
      <p className="cardHead">Searches</p>
      <AvatarGroup max={4} className="Avatar">
        <Avatar alt="Remy Sharp" src={People} />
        <Avatar alt="Remy Sharp" src={People} />
        <Avatar alt="Remy Sharp" src={People} />
        <Avatar alt="Remy Sharp" src={People} />
        <Avatar alt="Remy Sharp" src={People} />
        <Avatar alt="Remy Sharp" src={People} />
      </AvatarGroup>
    </div>
  );
};

export default Cards;
