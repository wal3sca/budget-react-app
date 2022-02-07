import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const Show = () => {
  const { index } = useParams();
  console.log(index);

  const [show, setShow] = useState({
    date: "",
    name: "",
    amount: 0,
    from: "",
    category: "",
    source: "",
  });

  const URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios
      .get(`${URL}/transactions/${index}`)
      .then((res) => {
        console.log(res.data);

        setShow(res.data);
      })
      .catch((error) => console.error(`Error: ${error}`));
  });

  return (
    <div>
      <h2> Show Page </h2>
      <div>
        <h3>Date: {show.date}</h3>
        <h3>Name: {show.name}</h3>
        <h3>Amount: {show.amount}</h3>
        <h3>From: {show.from}</h3>
        <h3>Category: {show.category || "No Category"}</h3>
        <h3>Source: {show.source}</h3>
      </div>
    </div>
  );
};

export default Show;
