import React from "react";
import style from "./ordersummary.module.css";
import ring from "../../Assets/ring.png";

const OrderSummary = () => {
  return (
    <div className={style["orderSummary"]}>
      <div className={style["item-box"]}>
        <div className={style["item-img-content-box"]}>
          <span className={style["item-img-box"]}>
            <img src={ring} alt="ring" height="50px" width="50px"></img>
          </span>
          <span className={style["item-name-box"]}>
            <p>Beautiful tear cluster rings</p>
            <p>Metal: 18k Gold Metal finish: rose your size: 7</p>
          </span>
        </div>
        <span className={style["item-price-box"]}>$1978</span>
      </div>

      <div className={style["total-box"]}>
        <div className={style["charges-box"]}>
          <p>Cart Subtotal</p>
          <p>$1867</p>
        </div>
        <div className={style["charges-box"]}>
          <p>Shipping</p>
          <p>$0</p>
        </div>
        <div className={style["charges-box"]}>
          <p>Estimated text</p>
          <p>$0</p>
        </div>
        <div className={style["charges-box"]}>
          <p>
            Have a promo code? <a href="#"> Redeem now</a>
          </p>
        </div>
        <div className={style["promo-code-input"]}>
          <input
            type="text"
            placeholder="Enter promo code"
            className={style["promo-code-field"]}
          />
          <button type="button" className={style["apply-button"]}>
            Apply
          </button>
        </div>
        <hr className={style["input-line"]} />
        <div className={style["charges-box"]}>
          <p>Total</p>
          <p>$193499</p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
