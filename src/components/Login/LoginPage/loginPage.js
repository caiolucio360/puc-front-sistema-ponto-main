import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../services/api";

export default function Login() {
  const navigate = useNavigate();

  const initialValue = {
    username: "",
    password: "",
  };

  const [formValues, setValues] = useState(initialValue);
  const [formErros, setErros] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  function onChange(e) {
    const { name, value } = e.target;
    setValues({ ...formValues, [name]: value });
  }

  function onSubmit(e) {
    e.preventDefault();
    setErros(validateForm(formValues));
    setIsSubmit(true);
  }

  function validateForm(values) {
    const erros = {};
    const regExp = new RegExp("^\\d+$");

    if (!values.username) {
      erros.username = "Matricula invalida";
    } else if (!regExp.test(values.username)) {
      erros.username = "Matricula invalida";
    }

    if (!values.password) erros.password = "Senha invalida";

    return erros;
  }

  useEffect(() => {
    if (Object.keys(formErros).length === 0 && isSubmit) {
      console.log("chama api");
      api
        .post("/login", {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json;charset=UTF-8",
            "Access-Control-Allow-Headers":
              "Origin, X-Requested-With, Content-Type, Accept",
          },
        })
        .then((resp) => {
          console.log(resp, "resp");
        });
    }
  }, [formErros, isSubmit]);

  return (
    <div className="container">
      <div
        id="login-row"
        className="row justify-content-center align-items-center"
      >
        <div id="login-column" className="col-md-6">
          <div id="login-box" className="col-md-12">
            <form id="login-form" className="form" onSubmit={onSubmit}>
              <h3 className="text-center">Login</h3>
              <div className="form-group">
                <label for="username">Matrícula:</label>
                <br />
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="form-control"
                  onChange={onChange}
                />
                <p style={{ color: "red" }}>{formErros.username}</p>
                <label for="password">Senha:</label>
                <br />
                <input
                  type="text"
                  name="password"
                  id="password"
                  className="form-control"
                  onChange={onChange}
                />
                <p style={{ color: "red" }}>{formErros.password}</p>
                <div className="btn-register">
                  <button type="submit" className="btn btn-success">
                    Entrar
                  </button>
                </div>
                <div className="btn-register">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => navigate("/LoginForm")}
                  >
                    Registrar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
