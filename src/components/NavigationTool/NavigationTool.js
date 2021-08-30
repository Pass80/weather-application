import React from "react";
import api from "../../services/api";
import "./NavigationTool.css";

function NavigationTool({ onApiCall }) {
  return (
    <form
      className="nav"
      onSubmit={(e) => {
        e.preventDefault();
        api(e.target.elements.city.value).then((data) => {
          onApiCall(data);
        });
      }}
    >
      <h1>The Weather Today</h1>
      <div >
        <label>
          city name <input type="text" name="city" />
        </label>
        <button type="submit">Search</button>
      </div>
    </form>
  );
}

export default NavigationTool;
