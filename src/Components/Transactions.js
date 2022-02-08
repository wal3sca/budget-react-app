import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  const URL = process.env.REACT_APP_API_URL;

  console.log(transactions);

  // use axios to connect backend
  // request, response

  useEffect(() => {
    axios
      .get(`${URL}/transactions`)
      .then((res) => {
        setTransactions(res.data);
      })
      .catch((error) => console.error(`Error: ${error}`));
  }, [URL]);

  //   make transaction component to return all data
  //   how to display info from an array of objects using .map

  return (
    <div>
      {transactions.map((transaction, index) => {
        return (
          <div key={index}>
            <p>{`
            Amount: ${transaction.amount}
            Date: ${transaction.date}
            From: ${transaction.from}
            Source: ${transaction.source}
            `}</p>
            <Link to={`/transactions/${index}`}>Details</Link>
            <Link to="/transactions/:index/edit">Edit</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Transactions;
