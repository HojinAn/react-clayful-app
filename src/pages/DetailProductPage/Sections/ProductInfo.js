import React, { useState } from "react";
import "./ProductInfo.css";
function ProductInfo(/*props*/ { detail }) {
  // destructuring
  // console.log(props.detail)기
  // console.log("detail", detail);
  const [count, setCount] = useState(1);
  return (
    <div>
      <p style={{ color: "#bf4800", marginBottom: 0 }}>New</p>
      <h1 style={{ marginBottom: 20 }}>{detail.name}</h1>
      <h5>
        {detail.summary} 개별 판매 가격 {detail.price?.original.formatted}
      </h5>
      <div className="quantity">
        <p style={{ fontWeight: 600, marginBottom: 5 }}>수량</p>
        <button className="plus-btn" type="button" name="button">
          +
        </button>
        <input type="text" readOnly name="number" value={count} />
        <button className="minus-btn" type="button" name="button">
          -
        </button>
        <br />
        <h3>총 상품 금액: {detail.price?.original.raw * count}원</h3>
        <br />
        <div className="product-info-action">장바구니에 담기</div>
        <div className="product-info-action">바로 구매</div>
      </div>
    </div>
  );
}

export default ProductInfo;
