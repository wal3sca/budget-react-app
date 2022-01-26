import axios from "axios";
import { useEffect, useState } from "react";

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
  }, []);

  //   make transaction component to return all data
  //   how to display info from an array of objects using .map

  return (
    <div>
      {transactions.map((transaction) => {
        return (
          <div>
            <p>{`
            Amount: ${transaction.amount}
            Category: ${transaction.category}
            Date: ${transaction.date}
            From: ${transaction.from}
            Source: ${transaction.source}
            `}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Transactions;
