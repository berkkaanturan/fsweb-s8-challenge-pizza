import { FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function OrderNote() {
    return (
        <FormGroup>
            <Label
                for="orderNote"
                style={{ 
                    fontFamily: "Barlow", 
                    fontWeight: "600", 
                    fontSize: "20px",
                    marginBottom: "15px",
                    marginTop: "20px"
                }}
            >
                Sipariş Notu
            </Label>
            <Input
                id="orderNote"
                name="orderNote"
                type="textarea"
                placeholder="Siparişine eklemek istediğin bir not var mı?"
                style={{ 
                    fontFamily: "Barlow",
                    minHeight: "50px",
                }}
            />
        </FormGroup>
    );
}

export default OrderNote;