import { useLocation } from "react-router-dom";
import HeaderForm from "./HeaderForm";
import Footer from "./Footer";
import "./OrderSuccess.css";

function OrderSuccess() {
  const location = useLocation();
  const orderDetails = location.state?.orderDetails;

  return (
    <>
      <HeaderForm />
      <div className="order-success" style={{ backgroundColor: "#CE2829" }}>
        <p className="success-subtitle">Lezzetin yolda</p>
        <h1 className="success-title">SİPARİŞ ALINDI</h1>
        <hr className="success-divider" />

        {orderDetails && (
          <div className="order-details">
            <h2>Position Absolute Acı Pizza</h2>
            <div className="all-details">
            <div className="detail-item">
              <span>Boyut:</span> <strong>{orderDetails.size}</strong>
            </div>
            <div className="detail-item">
              <span>Hamur:</span> <strong>{orderDetails.dough}</strong>
            </div>
            <div className="detail-item">
              <span>Ek Malzemeler:</span>{" "}
              <strong>
                {orderDetails.extraIngredients.join(", ") || "Yok"}
              </strong>
            </div>
            <div className="detail-item">
              <span>Not:</span> <strong>{orderDetails.note || "Yok"}</strong>
            </div>
            <div className="detail-item">
              <span>Adet:</span> <strong>{orderDetails.quantity}</strong>
            </div>
            </div>

            <div className="price-div">
              <div className="total-price">
                <span>Sipariş Toplamı</span>
                <div className="total-price-details1">
                  <span>Seçimler</span>
                  <span>{orderDetails.ingredientPrice ? orderDetails.ingredientPrice.toFixed(2) : `00.00`}₺</span>
                </div>
                <div className="total-price-details2">
                  <span>Toplam</span>
                  <span>{orderDetails.totalPrice.toFixed(2)}₺</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default OrderSuccess;
