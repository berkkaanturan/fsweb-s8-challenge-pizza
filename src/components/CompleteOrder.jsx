import { Button, Card, CardBody } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function CompleteOrder({
  count,
  setCount,
  selected,
  onSubmit,
  loading,
  calculateTotal,
  calculateExtrasTotal,
}) {
  const basePrice = 85.5;
  const extraPrice = 5.0;

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e);
  };

  return (
    <div
      className="complete-order"
      style={{ marginTop: "2rem", display: "flex" }}
    >
      <div
        className="d-flex align-items-center mb-4"
        style={{ display: "flex", alignSelf: "start" }}
      >
        <Button
          onClick={handleDecrement}
          style={{
            backgroundColor: "#FFC107",
            border: "none",
            width: "40px",
            height: "40px",
          }}
        >
          -
        </Button>
        <div
          style={{
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid #dee2e6",
          }}
        >
          {count}
        </div>
        <Button
          onClick={handleIncrement}
          style={{
            backgroundColor: "#FFC107",
            border: "none",
            width: "40px",
            height: "40px",
          }}
        >
          +
        </Button>
      </div>

      <div style={{ flex: 1, marginLeft: "2rem" }}>
        <Card className="mb-3">
          <CardBody>
            <h5
              style={{
                fontFamily: "Barlow",
                fontWeight: "600",
                marginBottom: "1rem",
              }}
            >
              Sipariş Toplamı
            </h5>
            <div className="d-flex justify-content-between mb-2">
              <span style={{ color: "#6c757d" }}>Pizza</span>
              <span>{basePrice * count.toFixed(2)}₺</span>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <span style={{ color: "#6c757d" }}>
                Ekstra Malzemeler ({selected.length} adet)
              </span>
              <span>{calculateExtrasTotal().toFixed(2)}₺</span>
            </div>
            <div className="d-flex justify-content-between">
              <span style={{ color: "#dc3545", fontWeight: "600" }}>
                Toplam
              </span>
              <span style={{ color: "#dc3545", fontWeight: "600" }}>
                {calculateTotal().toFixed(2)}₺
              </span>
            </div>
          </CardBody>
        </Card>

        <Button
          block
          onClick={handleSubmit}
          disabled={loading}
          style={{
            backgroundColor: "#FFC107",
            border: "none",
            padding: "0.75rem",
            fontWeight: "600",
            color: "#000",
            opacity: loading ? 0.7 : 1,
          }}
        >
          {loading ? "Sipariş Gönderiliyor..." : "SİPARİŞ VER"}
        </Button>
      </div>
    </div>
  );
}

export default CompleteOrder;
