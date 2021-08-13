import React from "react";
import api from "../../services/api";

function NavigationTool({ onApiCall }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        api(e.target.elements.city.value).then((data) => {
          onApiCall(data);
        });
      }}
    >
      <h1>The Weather Today</h1>
      <label>
        city name <input type="text" name="city" />
      </label>

      <button type="submit">Search</button>
    </form>
  );
}

export default NavigationTool;
