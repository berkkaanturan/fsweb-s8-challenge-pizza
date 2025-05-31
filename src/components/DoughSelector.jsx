 import 'bootstrap/dist/css/bootstrap.min.css';
import { FormGroup, Input, Label } from 'reactstrap';

function DoughSelector() {
    return (
     <FormGroup>
    <Label for="exampleSelect" style={{ 
    fontFamily: "Barlow", 
    fontWeight: "600", 
    fontSize: "20px" 
  }}>
      Hamur Seç <span style={{color:"red"}}>*</span>
    </Label>
    <Input
      id="exampleSelect"
      name="select"
      type="select"
      style= {{fontFamily: "Barlow"}}
    >
      <option>
        İnce
      </option>
      <option>
        Orta
      </option>
      <option>
        Kalın
      </option>
    </Input>
  </FormGroup>
    );
}

export default DoughSelector;
 
 
 
