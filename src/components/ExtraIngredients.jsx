import "bootstrap/dist/css/bootstrap.min.css";
import { FormGroup, Input, Label, Row, Col } from "reactstrap";

function ExtraIngredients({ selected, setSelected }) {
  const extraIngredients = [
    "Pepperoni",
    "Sosis",
    "Kanada Jambonu",
    "Tavuk Izgara",
    "Soğan",
    "Domates",
    "Mısır",
    "Sucuk",
    "Jalepeno",
    "Sarımsak",
    "Biber",
    "Zeytin",
    "Ananas",
    "Kabak",
  ];

  const handleIngredientChange = (ingredient, isChecked) => {
    if (isChecked) {
      if (selected.length >= 10) {
        alert("En fazla 10 malzeme seçebilirsiniz!");
        return;
      }
      setSelected([...selected, ingredient]);
    } else {
      setSelected(selected.filter((item) => item !== ingredient));
    }
  };

  return (
    <FormGroup>
      <Label
        style={{
          fontFamily: "Barlow",
          fontWeight: "600",
          fontSize: "20px",
          marginBottom: "15px",
          marginTop: "20px",
        }}
      >
        Ek Malzemeler
      </Label>
      <p
        style={{
          fontFamily: "Barlow",
          fontSize: "16px",
          color: "#5F5F5F",
          marginBottom: "30px",
        }}
      >
        En Fazla 10 malzeme seçebilirsiniz. 5₺
      </p>

      <Row>
        {extraIngredients.map((ingredient, index) => (
          <Col xs="12" sm="4" key={index} className="mb-3">
            <FormGroup check>
              <Input
                type="checkbox"
                id={`checkbox${index}`}
                checked={selected.includes(ingredient)}
                onChange={(e) =>
                  handleIngredientChange(ingredient, e.target.checked)
                }
              />
              <Label
                check
                for={`checkbox${index}`}
                style={{ fontFamily: "Barlow" }}
              >
                {ingredient}
              </Label>
            </FormGroup>
          </Col>
        ))}
      </Row>
    </FormGroup>
  );
}

export default ExtraIngredients;
