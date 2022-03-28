import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="wlc">
      <h1>Please fill out the form</h1>

      <button className="btn wlc-btn">
        <Link to="/form">Start Now</Link>
      </button>
    </div>
  );
}

export default Welcome;
