import React from "react";
import clayful from "clayful/client-js";

function LandingPage() {
  const Product = clayful.Product;

  let options = {
    query: {
      page: 1,
    },
  };

  Product.list(options, (err, res) => {
    if (err) {
      console.log(err.isClayful);
      console.log(err.model);
      console.log(err.method);
      console.log(err.status);
      console.log(err.headers);
      console.log(err.code);
      console.log(err.message);
      return;
    }

    console.log(res.status);
    console.log(res.headers);
    console.log(res.data);
  });
  return <div>LandingPage222</div>;
}

export default LandingPage;
