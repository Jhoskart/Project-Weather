import React, { useState } from "react";
import "./SearchBar.css"

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
    
    <form className="d-flex margin" onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }}>
      <input className="form-control me-2"
        type="text"
        placeholder="City..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <input className="btn margin" type="submit" value="Add" />
    </form>
  
  );
}
