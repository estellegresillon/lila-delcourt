import React from "react";

import "./grid.scss";

const Grid = () => (
  <div className="rd-grid">
    <Cross position="top-left" />
    <Cross position="top-right" />
    <Cross position="bottom-left" />
    <Cross position="bottom-right" />
    <div className="line horizontal-top" />
    <div className="line horizontal-bottom" />
    <div className="line vertical-left" />
    <div className="line vertical-right" />
  </div>
);

const Cross = ({ position }) => (
  <div className={`cross-wrapper ${position}-cross`}>
    <div className="cross-vertical" />
    <div className="cross-horizontal" />
  </div>
)

export default Grid;
