import React from "react";
import styles from "./breadcrumb.module.css"

const Breadcrumb = () => {
  return (
    <div className={styles["breadcrumb"]}>
      <a className={styles["breadcrumb-info"]} href="#">Information </a>
      <span>&nbsp; &gt; &nbsp;</span>
      <a href="#">Delivery </a>
      <span>&nbsp; &gt; &nbsp;</span>
      <a href="#">Payment </a>
    </div>
  );
};

export default Breadcrumb;
