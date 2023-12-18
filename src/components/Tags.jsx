import React from "react";
import Badge from "react-bootstrap/Badge";

const Tags = ({colorTag,stat}) => {
  return (
    <>
      <Badge bg={colorTag} text="white">{stat}</Badge>
    </>
  );
};

export default Tags;