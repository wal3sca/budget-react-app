import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Edit = () => {
  const { index } = useParams();
  const [edit, setEdit] = useState({
    date: "",
    name: "",
    amount: "",
    from: "",
  });

  const URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios
      .get(`${URL}/transactions/${index}`)
      .then((res) => {
        console.log(res.data);

        setEdit(res.data);
      })
      .catch((error) => console.error(`Error: ${error}`));
  });

  const handleSubmit =
    (() => {
      axios
        .put(`${URL}/transactions/${index}`, edit)
        .then((res) => {
          console.log(res);

          setEdit(res.data);
        })
        .catch((error) => console.error(`Error: ${error}`));
    },
    [URL]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setEdit({ ...edit, [name]: value });
  };
  return (
    <div>
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
          Create New Item
        </button>
      </div>
    </div>
  );
};

export default Edit;
