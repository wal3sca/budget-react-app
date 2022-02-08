import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const Show = () => {
  const URL = process.env.REACT_APP_API_URL;
  const { index } = useParams();
  let navigate = useNavigate();
  console.log(index);

  const [show, setShow] = useState({});

  useEffect(() => {
    axios.get(`${URL}/transactions/${index}`).then((res) => setShow(res.data));
  }, [URL, index]);
  //   .catch((error) => console.error(`Error: ${error}`));
  //   });

  const handleDelete = () => {
    axios
      .delete(`${URL}/transactions/${index}`)
      .then(() => navigate("/transactions"));
  };

  return (
    <div>
      <h2> Show Transaction Details </h2>
      <div>
        <h3>Date: {show.date}</h3>
        <h3>Name: {show.name}</h3>
        <h3>Amount: ${show.amount}</h3>
        <h3>From: {show.from}</h3>
        <h3>Source: {show.source}</h3>
      </div>
      <Link to="/transactions">
        <button className="back-details-btn">Back</button>
      </Link>
      <button className="delete-budget-btn" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Show;
