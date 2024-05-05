import Breadcrumb from "./Components/Breadcrumb/Breadcrumb";
import Header from "./Components/Header/Header";
import OrderSummary from "./Components/OrderSummary/OrderSummary";
import style from "./App.module.css";
import { useEffect, useState } from "react";
import Sticky from 'react-sticky-el';

function App() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 961);

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 961);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [chatWidth, setChatWidth] = useState(null);
  const [sidebarTop, setSidebarTop] = useState(null);
  useEffect(() => {
    const chatEl = document?.querySelector("#root div .ordersummary_orderSummary__5mvm4");
    if (chatEl) {
      const rect = chatEl.getBoundingClientRect();
      setChatWidth(rect.width);
      setSidebarTop(rect.top);
    }
  }, []);

  useEffect(() => {
    if (!sidebarTop) return;
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  }, [sidebarTop]);
  const isSticky = (e) => {
    const chatEl = document.querySelector("#root div .ordersummary_orderSummary__5mvm4");
    const scrollTop = window.scrollY;
    if (scrollTop >= sidebarTop - 10) {
      chatEl.classList.add('is-sticky');
    } else {
      chatEl.classList.remove('is-sticky');
    }
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
          
          </div>
        </div>
        {isLargeScreen ?  <OrderSummary style={{ width: chatWidth }} /> : null}
      
      </div>
    </>
  );
}

export default App;
