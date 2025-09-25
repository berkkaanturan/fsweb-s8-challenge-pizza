import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./Main.css";

export default function Main() {
  let history = useHistory();
  const handleClick = () => {
    history.push("/order");
  };

  return (
    <>
      <section className="main">
        <div className="containers">
          <div className="container1">
            <h3>Özel</h3>
            <h3>Lezzetus</h3>
            <p>Position:Absolute Acı Burger</p>
            <button className="containers-button" onClick={handleClick}>
              SİPARİŞ VER
            </button>
          </div>
          <div className="container2">
            <div className="container2-top">
              <h4>Hackathlon</h4>
              <h4>Burger Menü</h4>
              <button className="containers-button" onClick={handleClick}>
                SİPARİŞ VER
              </button>
            </div>
            <div className="container2-bottom">
              <h4>
                <font color="#CE2829">Çoooook</font> hızlı
              </h4>
              <h4>npm gibi kurye</h4>
              <button className="containers-button" onClick={handleClick}>
                SİPARİŞ VER
              </button>
            </div>
          </div>
        </div>

        <div className="main-title">
          <p>en çok paketlenen menüler</p>
          <h3>Acıktıran Kodlara Doyuran Lezzetler</h3>
        </div>
      </section>

      <section className="nav-bottom">
        <nav>
          <div className="nav-item">
            <a href="">
              <img src="public/images/iteration-2-images/icons/1.svg" alt="" />
              Ramen
            </a>
          </div>
          <div className="nav-item">
            <a href="" className="active">
              <img src="public/images/iteration-2-images/icons/2.svg" alt="" />
              Pizza
            </a>
          </div>
          <div className="nav-item">
            <a href="">
              <img src="public/images/iteration-2-images/icons/3.svg" alt="" />
              Burger
            </a>
          </div>
          <div className="nav-item">
            <a href="">
              <img src="public/images/iteration-2-images/icons/4.svg" alt="" />
              French Fries
            </a>
          </div>
          <div className="nav-item">
            <a href="">
              <img src="public/images/iteration-2-images/icons/5.svg" alt="" />
              Fast food
            </a>
          </div>
          <div className="nav-item">
            <a href="">
              <img src="public/images/iteration-2-images/icons/6.svg" alt="" />
              Soft drinks
            </a>
          </div>
        </nav>
      </section>

      <section className="food-cards">
        <div className="card1">
          <img
            src="public/images/iteration-2-images/pictures/food-1.png"
            alt=""
          />
          <div className="bottompart">
            <h4>Terminal Pizza</h4>
            <div className="bottom-text">
              <p className="left">4.9</p>
              <p className="mid">(200)</p>
              <p className="right">60₺</p>
            </div>
          </div>
        </div>
        <div className="card2">
          <img
            src="public/images/iteration-2-images/pictures/food-2.png"
            alt=""
          />
          <div className="bottompart">
            <h4>Position Absolute Acı Pizza</h4>
            <div className="bottom-text">
              <p className="left">4.9</p>
              <p className="mid">(200)</p>
              <p className="right">60₺</p>
            </div>
          </div>
        </div>
        <div className="card3">
          <img src="/images/iteration-2-images/pictures/food-3.png" alt="" />
          <div className="bottompart">
            <h4>useEffect Tavuklu Burger</h4>
            <div className="bottom-text">
              <p className="left">4.9</p>
              <p className="mid">(200)</p>
              <p className="right">60₺</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
