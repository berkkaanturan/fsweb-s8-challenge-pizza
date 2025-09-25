import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./SectionForm.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SizeSelector from "./SizeSelector";
import DoughSelector from "./DoughSelector";
import ExtraIngredients from "./ExtraIngredients";
import OrderNote from "./OrderNote";
import CompleteOrder from "./CompleteOrder";

export default function SectionForm() {
  const history = useHistory();
  const [size, setSize] = useState("");
  const [dough, setDough] = useState("");
  const [selected, setSelected] = useState([]);
  const [note, setNote] = useState("");
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!size) {
      setError("Lütfen pizza boyutu ve hamur seçimi yapınız!");
      setLoading(false);
      return;
    }

    if (!dough) {
      setError("Lütfen pizza hamuru seçimi yapınız!");
      setLoading(false);
      return;
    }

    if (selected.length < 4 || selected.length > 10) {
      setError("Lütfen 4 ila 10 arası ekstra malzeme seçiniz!");
      setLoading(false);
      return;
    }
    const orderData = {
      size,
      dough,
      extraIngredients: selected,
      note,
      quantity: count,
      totalPrice: calculateTotal(),
      ingredientPrice: calculateExtrasTotal(),
    };

    axios
      .post("https://reqres.in/api/pizza", orderData, {
        headers: {
          "x-api-key": "reqres-free-v1",
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log("Sipariş detayları:", res.data);
        history.push("/order-success", {
          orderDetails: {
            ...orderData,
            orderId: res.data.id,
          },
        });
      })
      .catch((err) => {
        console.error("Hata detayı:", err.response);
        setError(`Sipariş alınamadı: ${err.message}`);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const calculateTotal = () => {
    const basePrice = 85.5;
    const extraPrice = 5.0;
    return basePrice * count + selected.length * extraPrice * count;
  };

  const calculateExtrasTotal = () => {
    const extraPrice = 5.0;
    return selected.length * extraPrice * count;
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <section className="section-form">
          <div className="boyut-sec">
            <SizeSelector size={size} setSize={setSize} />
            <DoughSelector dough={dough} setDough={setDough} />
          </div>
          <ExtraIngredients selected={selected} setSelected={setSelected} />
          <OrderNote note={note} setNote={setNote} />
          <hr className="section-divider" style={{ marginTop: "40px" }} />
          <CompleteOrder
            count={count}
            setCount={setCount}
            selected={selected}
            onSubmit={handleSubmit}
            loading={loading}
            calculateTotal={calculateTotal}
            calculateExtrasTotal={calculateExtrasTotal}
          />
          {error && (
            <div style={{ color: "red", alignSelf: "center" }}>{error}</div>
          )}
        </section>
      </form>
    </section>
  );
}
