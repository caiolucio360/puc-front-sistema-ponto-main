import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../services/api";

export default function Login() {
  const navigate = useNavigate();

  const [formValues, setValues] = useState({
    username: "",
    password: "",
  });

  const [formErros, setErros] = useState({});
  const [errorMessage, setErrorMessage] = useState();

  function onChange(e) {
    const { name, value } = e.target;
    setValues({ ...formValues, [name]: value });
  }

  function onSubmit(e) {
    e.preventDefault();
    setErros(validateForm(formValues));
    if (Object.keys(formErros).length === 0) {
      api
        .post("login", {
          Matricula: formValues.username,
          Senha: formValues.password,
        })
        .then((resp) => {
          console.log(resp, "resp");
        })
        .catch(({ request }) => {
          console.error(JSON.parse(request.response).message);
        });
    }
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

  useEffect(() => {}, [errorMessage]);

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
                <label>Matrícula:</label>
                <br />
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="form-control"
                  onChange={onChange}
                />
                <p style={{ color: "red" }}>{formErros.username}</p>
                <label>Senha:</label>
                <br />
                <input
                  type="text"
                  name="password"
                  id="password"
                  className="form-control"
                  onChange={onChange}
                />
                <p style={{ color: "red" }}>{formErros.password}</p>
                <p style={{ color: "red" }}>{formErros.username}</p>
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
