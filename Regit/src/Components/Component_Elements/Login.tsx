import { Link } from "react-router-dom";
import "./Component_CSS/login.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Login() {
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <form className="form-container">
        <h2 className="mb-2">Login</h2>
        <h4 className="mb-4 text-center">Welcome to Regit!</h4>

        <div className="mb-3 row">
          <div className="col-12">
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="mb-2 row">
          <div className="col-12">
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="mb-4 forget-password">
          <p><Link path="forgetpassword">Forget password?</Link></p>
        </div>

        <button className="login-button">Login</button>
        <p className="m-2 text-center">
          Don't have an account? <Link to="/signup">SignUp</Link>
        </p>
      </form>
    </div>
  );
}
