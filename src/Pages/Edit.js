import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Edit = () => {
  const { index } = useParams();
  let navigate = useNavigate();
  const [edit, setEdit] = useState({
    date: "",
    name: "",
    amount: "",
    from: "",
  });

  const URL = process.env.REACT_APP_API_URL;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setEdit({ ...edit, [name]: value });
  };

  useEffect(() => {
    axios
      .get(`${URL}/transactions/${index}`)
      .then((res) => {
        console.log(res.data);

        setEdit(res.data);
      })
      .catch((error) => console.error(`Error: ${error}`));
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`${URL}/transactions/${index}`, edit)
      .then(() => navigate(`/transactions/${index}`));

    // .catch((error) => console.error(`Error: ${error}`));
  };
  return (
    <div className="Edit">
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

export default Edit;
