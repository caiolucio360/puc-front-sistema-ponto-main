import React from "react";
import { useNavigate } from "react-router-dom";

export default function LoginFrom() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div class="container">
        <div
          id="login-row"
          class="row justify-content-center align-items-center"
        >
          <div id="login-column" class="col-md-6">
            <div id="login-box" class="col-md-12">
              <form class="form">
                <h3 class="text-center">Cadastrar Usuario</h3>
                <div class="form-group">
                  <label for="username">Informe a Matrícula:</label>
                  <br />
                  <input
                    type="text"
                    name="username"
                    id="username"
                    class="form-control"
                  />
                  <label for="username">e-mail:</label>
                  <br />
                  <input
                    type="email"
                    name="username"
                    id="username"
                    class="form-control"
                  />
                  <label for="password">Senha:</label>
                  <br />
                  <input
                    type="text"
                    name="password"
                    id="password"
                    class="form-control"
                  />
                  <div class="btn-register">
                    <button type="submit" class="btn btn-primary">
                      Cadastrar
                    </button>
                  </div>
                  <div class="btn-register">
                    <button
                      type="button"
                      class="btn btn-danger"
                      onClick={() => navigate("/")}
                    >
                      Voltar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
