import { useState } from "react";
import axios from "axios";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    politics: "",
  });

  const [update, setUpdate] = useState(false);

  const { firstName, lastName, address, email, politics } = formData;

  function handleChange(event) {
    const { value, name } = event.target;
    setFormData((state) => {
      return {
        ...state,
        [name]: value,
      };
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/nhwai/google_sheets/eKDbjMymercwWDgv?tabId=Sheet1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            [
              firstName,
              lastName,
              address,
              email,
              politics,
              new Date().toLocaleString(),
            ],
          ]),
        }
      );

      await response.json();
      setFormData({
        ...formData,
        firstName: "",
        lastName: "",
        address: "",
        email: "",
        politics: "",
      });
      setUpdate(true);
      setTimeout(() => setUpdate(false), 3000);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          onChange={handleChange}
          value={formData.firstName}
          name="firstName"
          type="text"
          placeholder="First Name"
          required
        />{" "}
        <br /> <br />
        <input
          className="input"
          onChange={handleChange}
          value={formData.lastName}
          name="lastName"
          type="text"
          placeholder="Last Name"
          required
        />{" "}
        <br /> <br />
        <input
          className="input"
          onChange={handleChange}
          value={formData.address}
          name="address"
          type="text"
          placeholder="Address"
          required
        />{" "}
        <br /> <br />
        <input
          className="input"
          onChange={handleChange}
          value={formData.email}
          name="email"
          type="email"
          placeholder="Email"
          required
        />{" "}
        <br /> <br />
        <fieldset>
          <legend>What is your political preference ?</legend>

          <label>
            <input
              type="radio"
              id="liberal"
              name="politics"
              value="liberal"
              onChange={handleChange}
              checked={formData.politics === "liberal"}
            />
            Liberal
          </label>
          <br />

          <label>
            <input
              type="radio"
              id="conservative"
              name="politics"
              value="conservative"
              onChange={handleChange}
              checked={formData.politics === "conservative"}
            />
            Conservative
          </label>
          <br />

          <label>
            {" "}
            <input
              type="radio"
              name="politics"
              value="none"
              onChange={handleChange}
              checked={formData.politics === "none"}
            />
            None
          </label>
          <br />
        </fieldset>
        {update ? (
          <div className="alert">form submit success 🎉🎉</div>
        ) : (
          <button className="form-btn" type="submit">
            Submit
          </button>
        )}
      </form>
    </div>
  );
}

export default Form;
