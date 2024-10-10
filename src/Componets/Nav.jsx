import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Nav({ setSearch }) {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
    <div className="stiky">
      <div className="nav mt-3">
        <div
          className="button btn btn-outline-primary mx-4"
          onClick={() => {
            setSearch("computer");
            navigate("/");
          }}
        >
          Leptop
        </div>
        <div
          className="button btn btn-outline-primary mx-4"
          onClick={() => {
            setSearch("codeing");
            navigate("/");
          }}
        >
          Codeing
        </div>
        <div
          className="button btn btn-outline-primary mx-4"
          onClick={() => {
            setSearch("Hacking");
            navigate("/");
          }}
        >
          Hacking
        </div>
        <div
          className="button btn btn-outline-primary mx-4"
          onClick={() => {
            setSearch("Tech");
            navigate("/");
          }}
        >
          Tech
        </div>
        <div
          className="button btn btn-outline-primary mx-4"
          onClick={() => {
            setSearch("React js");
            navigate("/");
          }}
        >
          React js
        </div>
        <div
          className="button btn btn-outline-primary mx-4"
          onClick={() => {
            setSearch("Animals");
            navigate("/");
          }}
        >
          Animals
        </div>
        <div
          className="button btn btn-outline-primary mx-4"
          onClick={() => {
            setSearch("technology");
            navigate("/");
          }}
        >
          Technology
        </div>
        <div
          className="button btn btn-outline-primary mx-4"
          onClick={() => {
            setSearch("Finance");
            navigate("/");
          }}
        >
          Bussiness & Finance
        </div>
        <div
          className="button btn btn-outline-primary mx-4"
          onClick={() => {
            setSearch("india");
            navigate("/");
          }}
        >
          India
        </div>
        <div
          className="button btn btn-outline-primary mx-4"
          onClick={() => {
            setSearch("Dubai");
            navigate("/");
          }}
        >
          Dubai
        </div>

        {location.pathname == "/Save" ? (
          <div
            className="button btn btn-warning mx-3"
            onClick={() => navigate("/")}
          >
            Home
          </div>
        ) : (
          <div
            className="button btn btn-warning mx-3"
            onClick={() => navigate("/Save")}
          >
            Saved
          </div>
        )}
      </div>

      {location.pathname === "/" && (
        <div className="container">
          <div className="mb-3">
            <input
              type="email"
              className="form-control mt-3 bg-dark text-light search"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => setSearch(e.target.value)}
              // placeholder="SEARCH"
              placeholder="Search"
            />
          </div>
        </div>
      )}
      </div>
    </>
  );
}

export default Nav;
