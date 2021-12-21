import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { onSearch} from "../redux/actions/actions";
import "./SearchBar.css";

export default function SearchBar() {
  const [city, setCity] = useState("");

  const dispatch = useDispatch()
  return (
    <form
      className="d-flex"
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(onSearch(city));
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
        <input
          className="btn btn-primary me-2 botonSearch"
          type="submit"
          value="Agregar"
        />
    </form>
  );
}
