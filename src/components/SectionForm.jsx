import "./SectionForm.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import SizeSelector from "./SizeSelector";
import DoughSelector from "./DoughSelector";
import ExtraIngredients from "./ExtraIngredients";
import OrderNote from "./OrderNote";
import CompleteOrder from "./CompleteOrder";

export default function SectionForm() {
  return (
    <section className="section-form">
      <form>
        <h1 className="form-title">Position Absolute Acı Pizza</h1>
        <div className="order-price-container">
            <p id="priceP">85.50₺</p>
            <p id="ratingP">4.9</p>
            <p id="commentsP">(200)</p>
        </div>

        <p className="form-text">
         Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.  
        </p>

        <div className="boyut-sec">
        <SizeSelector />
        <DoughSelector />
        </div>

        <div className="extra-ingredients">
        <ExtraIngredients />  
        </div>

        <div className="order-note-container">
        <OrderNote />
        </div>

        <hr className="section-divider" style={{marginTop:"40px"}}/>

        <div className="bottom-section-form">
        <CompleteOrder />
        </div>

      </form>
    </section>
  );
}