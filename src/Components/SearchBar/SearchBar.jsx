import React, { useState } from "react";
import './SearchBar.css'

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");
  return (
      <form
      className='d-flex'
        onSubmit={(e) => {
          e.preventDefault();
          onSearch(city);
          setCity("");
        }}
      >
        <input
          className="form-control mx-2"
          type="text"
          placeholder="Ciudad..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input className="btn btn-primary me-2 botonSearch" type="submit" value="Buscar" />
      </form>
  );
}
