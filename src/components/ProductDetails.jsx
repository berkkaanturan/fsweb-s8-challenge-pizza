import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router-dom";
function ProductDetails() {
  let history = useHistory();
  const handleClick = () => {
    history.push("/");
  };

  return (
    <div
      className="product-details-wrapper"
      style={{
        backgroundColor: "#FAF7F2",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0 0 2rem 0",
      }}
    >
      <img
        src="images/iteration-2-images/pictures/form-banner.png"
        style={{ marginBottom: "30px", width: "30%" }}
      ></img>
      <div style={{ margin: "0 40rem 0 40rem" }}>
        <span
          onClick={handleClick}
          style={{ fontFamily: "Barlow", fontWeight: "400", cursor: "pointer" }}
        >
          Anasayfa -{" "}
        </span>{" "}
        <span style={{ color: "red", fontFamily: "Barlow", fontWeight: "500" }}>
          Sipariş Oluştur
        </span>
        <h1 className="form-title" style={{ marginTop: "20px" }}>
          Position Absolute Acı Pizza
        </h1>
        <div className="order-price-container">
          <p id="priceP">85.50₺</p>
          <p id="ratingP">4.9</p>
          <p id="commentsP">(200)</p>
        </div>
        <p className="form-text">
          Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
          pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
          diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
          ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak,
          düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli
          lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.
        </p>
      </div>
    </div>
  );
}

export default ProductDetails;
