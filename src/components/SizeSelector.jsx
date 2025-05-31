import "bootstrap/dist/css/bootstrap.min.css";
import { FormGroup, Input, Label } from "reactstrap";

function SizeSelector({ size, setSize }) {
  return (
    <FormGroup tag="fieldset">
      <Label
        for="exampleSelect"
        style={{
          fontFamily: "Barlow",
          fontWeight: "600",
          fontSize: "20px",
        }}
      >
        Boyut Seç <span style={{ color: "red" }}>*</span>
      </Label>
      <FormGroup check style={{ marginTop: "10px" }}>
        <Input
          name="radio"
          type="radio"
          value="Küçük"
          id="kucuk"
          checked={size === "Küçük"}
          onChange={(e) => setSize(e.target.value)}
        />{" "}
        <Label
          for="kucuk"
          check
          style={{ marginLeft: "10px", fontFamily: "Barlow" }}
        >
          Küçük
        </Label>
      </FormGroup>
      <FormGroup check style={{ marginTop: "10px" }}>
        <Input
          name="radio"
          type="radio"
          value="Orta"
          id="orta"
          checked={size === "Orta"}
          onChange={(e) => setSize(e.target.value)}
        />{" "}
        <Label
          for="orta"
          check
          style={{ marginLeft: "10px", fontFamily: "Barlow" }}
        >
          Orta
        </Label>
      </FormGroup>
      <FormGroup check style={{ marginTop: "10px" }}>
        <Input
          name="radio"
          type="radio"
          value="Büyük"
          id="buyuk"
          checked={size === "Büyük"}
          onChange={(e) => setSize(e.target.value)}
        />{" "}
        <Label
          for="buyuk"
          check
          style={{ marginLeft: "10px", fontFamily: "Barlow" }}
        >
          Büyük
        </Label>
      </FormGroup>
    </FormGroup>
  );
}

export default SizeSelector;
