import React from "react";
import Avatar from "@material-ui/core/Avatar";
import AvatarGroup from "@material-ui/lab/AvatarGroup";

const Cards = ({ cardImage, cardHeading, cardSubheading, peopleImage }) => {
  return (
    <div className="card">
      <img className="cardMedia" src={cardImage} alt="card" />
      <p className="cardHead">{cardHeading}</p>
      <p className="cardHead">{cardSubheading}</p>
      <AvatarGroup max={4} className="Avatar">
        <Avatar alt="Remy Sharp" src={peopleImage} />
        <Avatar alt="Remy Sharp" src={peopleImage} />
        <Avatar alt="Remy Sharp" src={peopleImage} />
        <Avatar alt="Remy Sharp" src={peopleImage} />
        <Avatar alt="Remy Sharp" src={peopleImage} />
        <Avatar alt="Remy Sharp" src={peopleImage} />
      </AvatarGroup>
    </div>
  );
};

export default Cards;
