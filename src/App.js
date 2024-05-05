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
import FAQ from "./Components/FAQ/FAQ";
import Footer from "./Components/Footer/Footer";

function App() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 961);
  const [activeTab, setActiveTab] = useState(1);
  const [chatWidth, setChatWidth] = useState(null);
  const [sidebarTop, setSidebarTop] = useState(null);

  const faqs = [
    {
      question: "Question 1",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      question: "Question 2",
      answer:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.',
    },
  ];

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
  console.log(28, chatWidth, sidebarTop);

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
    console.log(2888, scrollTop);
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
            <h2 className={style["order-ques"]}>
              How would you like to get your order?
            </h2>
            <div className={style["app-container"]}>
              <div className={style["tab"]}>
                <button
                  // className={activeTab === 1 ? `${style["tab-button active"]}` : `${style["tab-button"]}`}
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
                  // className={activeTab === 2 ? "tab-button active" : "tab-button"}
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
            <div className={style["faq-container"]}>
              <FAQ faqs={faqs} />
            </div>
            {!isLargeScreen ? <Footer /> : null}
          </div>
        </div>
        {isLargeScreen ? <OrderSummary isLargeScreen={isLargeScreen}  /> : null}
        {/* style={{ width: chatWidth }} */}
      </div>
    </>
  );
}

export default App;
