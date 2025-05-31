import "./SectionForm.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import SizeSelector from "./SizeSelector";
import DoughSelector from "./DoughSelector";
import ExtraIngredients from "./ExtraIngredients";
import OrderNote from "./OrderNote";
import CompleteOrder from "./CompleteOrder";


export default function SectionForm() {


  return (
    <section>
      <form>
        <section className="section-form">
        <div className="boyut-sec">
        <SizeSelector />
        <DoughSelector />
        </div>
        <ExtraIngredients />  
        <OrderNote />
        <hr className="section-divider" style={{marginTop:"40px"}}/>
        <CompleteOrder />
        </section>

      </form>
    </section>
  );
}