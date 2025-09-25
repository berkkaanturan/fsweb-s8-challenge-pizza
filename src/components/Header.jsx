import "./Header.css";
import { useHistory } from "react-router-dom";

export default function Header() {
  let history = useHistory();
  const handleClick = () => {
    history.push("/order");
  };

  return (
    <header>
      <section className="banner">
        <div className="header-banner">
          <img src="/images/iteration-1-images/logo.svg" alt="" />
          <div className="banner-title">
            <p className="header-p">fırsatı kaçırma</p>
            <div className="header-title-container">
              <h2 className="header-title">
                KOD ACIKTIRIR
                <br />
                PİZZA, DOYURUR
              </h2>
            </div>
            <button className="header-btn" onClick={handleClick}>
              ACIKTIM
            </button>
          </div>
        </div>
      </section>
      <section id="header-nav">
        <nav>
          <div className="nav-item">
            <img src="/images/iteration-2-images/icons/1.svg" alt="" />
            <a href="">YENİ! Kore</a>
          </div>
          <div className="nav-item">
            <img src="/images/iteration-2-images/icons/2.svg" alt="" />
            <a href="">Pizza</a>
          </div>
          <div className="nav-item">
            <img src="/images/iteration-2-images/icons/3.svg" alt="" />
            <a href="">Burger</a>
          </div>
          <div className="nav-item">
            <img src="/images/iteration-2-images/icons/4.svg" alt="" />
            <a href="">Kızartmalar</a>
          </div>
          <div className="nav-item">
            <img src="/images/iteration-2-images/icons/5.svg" alt="" />
            <a href="">Fast food</a>
          </div>
          <div className="nav-item">
            <img src="/images/iteration-2-images/icons/6.svg" alt="" />
            <a href="">Gazlı İçecek</a>
          </div>
        </nav>
      </section>
    </header>
  );
}
