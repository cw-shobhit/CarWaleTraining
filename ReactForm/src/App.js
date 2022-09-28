import "./styles.css";
import { useRef, useState } from "react";

export default function App() {
  const [uname, setUname] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [cpass, setCPass] = useState("");
  const passwordRef = useRef(null);

  const [unameStatus, setUnameStatus] = useState("null");
  const [emailStatus, setEmailStatus] = useState("null");
  const [passStatus, setPassStatus] = useState("null");
  const [cpassStatus, setCpassStatus] = useState("null");
  const [popUp, setPopUp] = useState(false);
  const [eye, setEye] = useState(false);

  // handle functions

  // handle the input fields states

  const handleUname = (e) => {
    setUname(e.target.value);
    if (e.target.value.length <= 3 || e.target.value.length >= 25) {
      setUnameStatus("false");
    } else {
      setUnameStatus("true");
    }
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    if (!validateEmail(email)) {
      setEmailStatus("false");
    } else {
      setEmailStatus("true");
    }
  };

  const handlePass = (e) => {
    setPass(e.target.value);
    if (!validatePassword(pass)) {
      setPassStatus("false");
    } else {
      setPassStatus("true");
    }
  };

  const handleTooglePassword = (e) => {
    if (eye === false) {
      setEye(true);
      passwordRef.current.type = "text";
    }
    if (eye === true) {
      setEye(false);
      passwordRef.current.type = "password";
    }
  };

  const handleCPass = (e) => {
    setCPass(e.target.value);
    if (
      validatePassword(e.target.value) &&
      pass.length === e.target.value.length &&
      pass === e.target.value
    ) {
      setCpassStatus("true");
    } else {
      setCpassStatus("false");
    }
  };

  // handle the submit

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkForm()) {
      setPopUp(true);
    }
  };

  const handlePopUpClose = (e) => {
    setPopUp(false);
    window.location.reload();
  };

  const checkForm = () => {
    let isValid = true;

    if (uname.length <= 3 || uname.length >= 25) {
      setUnameStatus("false");
      isValid = false;
    } else {
      setUnameStatus("true");
    }

    if (!validateEmail(email)) {
      setEmailStatus("false");
      isValid = false;
    } else {
      setEmailStatus("true");
    }

    if (!validatePassword(pass)) {
      setPassStatus("false");
      isValid = false;
    } else {
      setPassStatus("true");
    }

    if (pass.length !== 0 && pass === cpass) {
      setCpassStatus("true");
    } else {
      setCpassStatus("false");
      isValid = false;
    }

    return isValid;
  };

  function validatePassword(password) {
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d#$@!%&*?]{7,}$/;
    if (!regex.test(password)) {
      return false;
    } else {
      return true;
    }
  }

  function validateEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <>
      <div className="container py-5 h-100">
        <div className="card" style={{ width: "50rem" }}>
          <div className="card-body">
            <div style={{ textAlign: "center", fontSize: "larger" }}>
              <b>Sign Up</b>
            </div>
            <form>
              {/*  Username input  */}
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="Username">
                  Username:
                </label>
                <input
                  type="text"
                  id={
                    unameStatus === "null"
                      ? ""
                      : unameStatus === "true"
                      ? "correct"
                      : "incorrect"
                  }
                  onChange={(e) => handleUname(e)}
                  value={uname}
                  className="form-control"
                  required
                />
                <p
                  style={{
                    color: "red",
                    display:
                      unameStatus === "null"
                        ? "none"
                        : unameStatus === "true"
                        ? "none"
                        : "block"
                  }}
                >
                  Username must be between 3 and 25 characters.
                </p>
              </div>

              {/* Email Input */}
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="Email">
                  Email address:
                </label>
                <input
                  type="email"
                  id={
                    emailStatus === "null"
                      ? ""
                      : emailStatus === "true"
                      ? "correct"
                      : "incorrect"
                  }
                  onChange={(e) => handleEmail(e)}
                  value={email}
                  className="form-control"
                  required
                />
                <p
                  style={{
                    color: "red",
                    display:
                      emailStatus === "null"
                        ? "none"
                        : emailStatus === "true"
                        ? "none"
                        : "block"
                  }}
                >
                  Enter valid email.
                </p>
              </div>

              {/* Password input */}
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="Password">
                  Password:
                </label>
                <input
                  id={
                    passStatus === "null"
                      ? ""
                      : passStatus === "true"
                      ? "correct"
                      : "incorrect"
                  }
                  type="password"
                  ref={passwordRef}
                  onChange={(e) => handlePass(e)}
                  className="form-control"
                  required
                />
                <i
                  className={"bi " + (eye ? "bi-eye" : "bi-eye-slash")}
                  id="togglePassword"
                  onClick={handleTooglePassword}
                ></i>
                <p
                  style={{
                    color: "red",
                    display:
                      passStatus === "null"
                        ? "none"
                        : passStatus === "true"
                        ? "none"
                        : "block"
                  }}
                >
                  Password must has at least 8 characters that include at least
                  1 lowercase character, 1 uppercase character, 1 number, and 1
                  special character in (!@#$%^&*).
                </p>
              </div>

              {/*  Confirm Password input  */}
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="Confirm Password">
                  Confirm Password:
                </label>
                <input
                  id={
                    cpassStatus === "null"
                      ? ""
                      : cpassStatus === "true"
                      ? "correct"
                      : "incorrect"
                  }
                  type="password"
                  onChange={(e) => handleCPass(e)}
                  className="form-control"
                  required
                />
                <p
                  style={{
                    color: "red",
                    display:
                      cpassStatus === "null"
                        ? "none"
                        : cpassStatus === "true"
                        ? "none"
                        : "block"
                  }}
                >
                  Please enter the password again
                </p>
              </div>

              {/*  Submit button  */}
              <button
                onClick={handleSubmit}
                type="button"
                className="btn btn-primary btn-block mb-4"
                style={{ width: "100%" }}
                id="signup-btn"
              >
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
      <div
        id="modal-container"
        style={{ display: popUp === true ? "block" : "none" }}
      >
        <div id="modal">
          <p>You are signed up!</p>
          <button id="close-btn" onClick={handlePopUpClose}>
            &times;
          </button>
        </div>
      </div>
    </>
  );
}
