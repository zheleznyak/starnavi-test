import React from "react";
import classNames from "clsx";

const Map = ({ field, map }) => {
  return (
    <div
      className={classNames(
        "container container-game-field",
        `container-${field}-cols`
      )}
    >
      {map.map(({ clickable, owner, onClick }, index) => (
        <div
          key={index}
          onClick={onClick ? onClick : () => {}}
          className={classNames("col", {
            highlighted: clickable,
            green: owner === "player",
            red: owner === "computer"
          })}
        ></div>
      ))}
    </div>
  );
};

export default Map;
