import { useState } from "react";
import axios from "axios";
import "./new.css";

const New = () => {
  const [transactions, setTransactions] = useState({
    date: "",
    name: "",
    amount: "",
    from: "",
  });

  const URL = process.env.REACT_APP_API_URL;

  const handleSubmit = () => {
    axios
      .post(`${URL}transactions`, transactions)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setTransactions({ ...transactions, [name]: value });
  };
  return (
    <div className="New">
      <div className="input-ctn">
        <label>
          Date:
          <input
            onChange={(e) => handleOnChange(e)}
            type="date"
            name="date"
            required
          />
        </label>
        <label>
          Name:
          <input
            onChange={(e) => handleOnChange(e)}
            type="text"
            name="name"
            required
          />
        </label>
        <label>
          Amount:
          <input
            onChange={(e) => handleOnChange(e)}
            type="number"
            name="amount"
            required
          />
        </label>
        <label>
          From:
          <input
            onChange={(e) => handleOnChange(e)}
            type="text"
            name=" from"
            required
          />
        </label>
        <button type="submit" onClick={() => handleSubmit()}>
          {" "}
          Submit New Transaction
        </button>
      </div>
    </div>
  );
};

export default New;
