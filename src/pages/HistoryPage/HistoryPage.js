import React, { useEffect, useState } from "react";
import clayful from "clayful/client-js";

function HistoryPage() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    let Order = clayful.Order;

    let options = {
      customer: localStorage.getItem("accessToken"),
    };

    Order.listForMe(options, function (err, result) {
      if (err) {
        // Error case
        console.log(err.code);
        return;
      }

      let data = result.data;
      setHistory(data);
      console.log(data);
    });
  }, []);

  return <div>HistoryPage</div>;
}

export default HistoryPage;
