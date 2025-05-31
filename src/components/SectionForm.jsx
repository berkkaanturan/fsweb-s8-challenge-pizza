import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import "./SectionForm.css";
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
        <h2 className="form-title2">Boyut Seç <span style={{color:"red"}}>*</span></h2>
        </div>
      </form>
    </section>
  );
}