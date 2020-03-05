import React from "react";

const MainMenu = ({ handleSubmit, modeListKeys, winner }) => {
  return (
    <form onSubmit={handleSubmit} className="level-form">
      <select name="difficulty">
        {modeListKeys.map(key => (
          <option value={key} key={key}>
            {key.toLowerCase().replace("mode", "")}
          </option>
        ))}
      </select>
      <input type="text" name="name" required placeholder="Enter your name" />
      <button type="submit">{winner ? "Play again" : "Play"}</button>
    </form>
  );
};

export default MainMenu;
