import React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { onSearch} from "../redux/actions/actions";
import "./SearchBar.css";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [city, setCity] = useState("");

  const style = useSelector(state => state.style)
  const dispatch = useDispatch()
  const redir = useNavigate()
  return (
    <form
      className="d-flex"
      onSubmit={(e) => {
        e.preventDefault();
        if(city === '') return (
          swal({
            title: "Debe ingresar una Ciudad",
            icon: "warning"
          })
        )
        dispatch(onSearch(city));
        setCity("");
        redir('/')

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
          className={style ? "btn btn-primary me-2 botonSearch" : "btn btn-primary me-2 botonSearch1"}
          type="submit"
          value="Agregar"
        />
    </form>
  );
}
