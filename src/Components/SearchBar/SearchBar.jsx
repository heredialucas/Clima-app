import React, { useState } from "react";
import  {useNavigate }  from 'react-router-dom';
import "./SearchBar.css";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");
  const redir = useNavigate()


  return (
    <form
      className="d-flex"
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(city);
        setCity("");
        redir('./ciudades')
      }}
    >
      <input
        className="form-control mx-2"
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
        <input
          className="btn btn-primary me-2 botonSearch"
          type="submit"
          value="Agregar"
        />
    </form>
  );
}
