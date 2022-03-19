import React, { useEffect, useState } from "react";
import clayful from "clayful/client-js";
function PaymentPage() {
  const [cart, setCart] = useState({});
  const [paymentMethods, setPaymentMethods] = useState([]);

  useEffect(() => {
    getCartData();
    getPaymentData();
  }, []);

  const getPaymentData = () => {
    var PaymentMethod = clayful.PaymentMethod;

    PaymentMethod.list({}, function (err, result) {
      if (err) {
        // Error case
        console.log(err.code);
        return;
      }

      let data = result.data;
      setPaymentMethods(data);
    });
  };

  const getCartData = () => {
    let Cart = clayful.Cart;

    let options = {
      customer: localStorage.getItem("accessToken"),
    };

    Cart.getForMe({}, options, function (err, result) {
      if (err) {
        // Error case
        console.log(err.code);
        return;
      }

      let data = result.data;
      setCart(data.cart);
    });
  };

  return <div>PaymentPage</div>;
}

export default PaymentPage;
