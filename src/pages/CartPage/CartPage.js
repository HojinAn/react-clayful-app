import React, { useEffect, useState } from "react";
import clayful from "clayful/client-js";
import { useNavigate } from "react-router-dom";
import "./CartPage.css";
import CartItem from "./Sections/CartItem";

function CartPage() {
  const navigate = useNavigate();
  const [cart, setCart] = useState({});

  useEffect(() => {
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
  }, []);

  const buttonHandler = (type, index) => {
    console.log("cart", { ...cart });
    let newCart = { ...cart };
    if (type === "plus") {
      // 해당 아이템 가격 변동
      newCart.items[index].price.original.raw +=
        cart.items[index].price.original.raw / cart.items[index].quantity.raw;
      // 전체 아이템 가격 변경
      newCart.total.amount.raw +=
        cart.items[index].price.original.raw / cart.items[index].quantity.raw;
      // 해당 아이템 개수 변경
      newCart.items[index].quantity.raw += 1;
    } else {
      if (newCart.items[index].quantity.raw === 1) return;
      newCart.items[index].price.original.raw -=
        cart.items[index].price.original.raw / cart.items[index].quantity.raw;
      newCart.total.amount.raw -=
        cart.items[index].price.original.raw / cart.items[index].quantity.raw;
      newCart.items[index].quantity.raw -= 1;
    }

    setCart(newCart);
  };

  const items = cart.items;

  return (
    <div className="pageWrapper">
      <div className="shopping-cart">
        <h1 className="title">장바구니</h1>
        <div className="shopping-cart-body" style={{ minHeight: 100 }}>
          {items && items.length > 0 ? (
            items.map((item, index) => {
              return (
                <CartItem
                  key={item._id}
                  item={item}
                  index={index}
                  buttonHandler={(type, index) => buttonHandler(type, index)}
                />
              );
            })
          ) : (
            <p style={{ textAlign: "center", marginTop: "2rem" }}>카트에 상품이 하나도 없습니다.</p>
          )}
        </div>
        {items && items.length > 0 && (
          <div className="bottom">
            <span className="total-price">총 금액: \{cart.total?.amount.raw}</span>
            <button
              style={{ float: "right", padding: "4px 8px" }}
              onClick={() => navigate("/payment")}
            ></button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartPage;
