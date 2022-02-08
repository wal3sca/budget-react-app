import { useState } from "react";
import axios from "axios";
import "./new.css";
import { useNavigate } from "react-router-dom";

const New = () => {
  let navigate = useNavigate();
  const [transactions, setTransactions] = useState({
    date: "",
    name: "",
    amount: "",
    from: "",
  });

  const URL = process.env.REACT_APP_API_URL;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setTransactions({ ...transactions, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${URL}/transactions`, transactions)
      .then(() => navigate("/transactions"));
    // .catch((error) => console.error(`Error: ${error}`));
  };

  return (
    <div className="New">
      <form className="budget-edit-form" onSubmit={handleSubmit}>
        <div className="input-ctn">
          <label htmlFor="date">Date:</label>
          <input
            id="date"
            onChange={(e) => handleOnChange(e)}
            type="date"
            name="date"
            required
          />
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            onChange={(e) => handleOnChange(e)}
            type="text"
            name="name"
            required
          />
          <label htmlFor="amount">Amount:</label>
          <input
            id="amount"
            onChange={(e) => handleOnChange(e)}
            type="number"
            name="amount"
            required
          />
          <label htmlFor="from">From:</label>
          <input
            id="from"
            onChange={(e) => handleOnChange(e)}
            type="text"
            name=" from"
            required
          />
          <input className="edit-submit-btn" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default New;
