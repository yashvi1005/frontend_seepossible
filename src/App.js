import Breadcrumb from "./Components/Breadcrumb/Breadcrumb";
import Header from "./Components/Header/Header";
import OrderSummary from "./Components/OrderSummary/OrderSummary";
import style from "./App.module.css";
import { useEffect, useState } from "react";
import Sticky from "react-sticky-el";
import { ReactComponent as Delivery } from "./Assets/icons/delivery.svg";
import { ReactComponent as Pickup } from "./Assets/icons/pickup.svg";
import Form1 from "./Components/Form1/Form1";
import Form2 from "./Components/Form2/Form2";

function App() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 961);
  const [activeTab, setActiveTab] = useState(1);
  const [chatWidth, setChatWidth] = useState(null);
  const [sidebarTop, setSidebarTop] = useState(null);

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 961);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const chatEl = document?.querySelector(
      "#root div .ordersummary_orderSummary__5mvm4"
    );
    if (chatEl) {
      const rect = chatEl.getBoundingClientRect();
      setChatWidth(rect.width);
      setSidebarTop(rect.top);
    }
  }, []);

  useEffect(() => {
    if (!sidebarTop) return;
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, [sidebarTop]);
  const isSticky = (e) => {
    const chatEl = document.querySelector(
      "#root div .ordersummary_orderSummary__5mvm4"
    );
    const scrollTop = window.scrollY;
    if (scrollTop >= sidebarTop - 10) {
      chatEl.classList.add("is-sticky");
    } else {
      chatEl.classList.remove("is-sticky");
    }
  };
  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };
  return (
    <>
      <div
        style={{ display: isLargeScreen ? "flex" : "block" }}
        className={style["sidbar-order"]}
      >
        <div className={style["sidebar"]}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Header />
            {isLargeScreen ? null : (
              <Sticky>
                <OrderSummary className={style["order-comp"]} />
              </Sticky>
            )}
            <Breadcrumb />
            <h3 className={style["order-ques"]}>
              How would you like to get your order?
            </h3>
            <div className={style["app-container"]}>
              <div className={style["tab"]}>
                <button
                  className={`${style["tab-button"]} ${
                    activeTab === 1 ? style["active"] : ""
                  }`}
                  onClick={() => handleTabClick(1)}
                >
                  <Delivery className={style["tab-icon"]} />
                  I'd like it delivered
                </button>
                <button
                  className={`${style["tab-button"]} ${
                    activeTab === 2 ? style["active"] : ""
                  }`}
                  onClick={() => handleTabClick(2)}
                >
                  <Pickup className={style["tab-icon"]} />
                  I'll pick it up
                </button>
              </div>
              <div className={style["tab-content"]}>
                {activeTab === 1 && <Form1 />}
                {activeTab === 2 && <Form2 />}
              </div>
            </div>
          </div>
        </div>
        {isLargeScreen ? <OrderSummary style={{ width: chatWidth }} /> : null}
      </div>
    </>
  );
}

export default App;
