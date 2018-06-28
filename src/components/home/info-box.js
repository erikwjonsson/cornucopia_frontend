import React, { Fragment } from "react";
import { PageHeader, Button } from "react-bootstrap";

const InfoBox = ({ header, text, buttonLink, buttonStyle, buttonText }) => (
  <Fragment>
    <PageHeader>
      {header.split("\n").map((item, key) => {
        return (
          <span key={key}>
            {item}
            <br />
          </span>
        );
      })}
    </PageHeader>
    <p>
      {text.split("\n").map((item, key) => {
        return (
          <span key={key}>
            {item}
            <br />
          </span>
        );
      })}
    </p>
    <Button href={buttonLink} bsStyle={buttonStyle}>
      {buttonText}
    </Button>
  </Fragment>
);

export default InfoBox;
