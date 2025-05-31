import { Button, Card, CardBody } from 'reactstrap';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function CompleteOrder() {
    const [quantity, setQuantity] = useState(1);
    const basePrice = 85.50;
    const extrasPrice = 25.00;

    const handleIncrement = () => {
        setQuantity(prev => prev + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1);
        }
    };

    return (
        <div className="complete-order" style={{ marginTop: '2rem', display:"flex"}}>
            <div className="d-flex align-items-center mb-4" style={{display:"flex", alignSelf:"start"}}>
                <Button 
                    onClick={handleDecrement}
                    style={{
                        backgroundColor: '#FFC107',
                        border: 'none',
                        width: '40px',
                        height: '40px'
                    }}
                >
                    -
                </Button>
                <div 
                    style={{
                        width: '40px',
                        height: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid #dee2e6'
                    }}
                >
                    {quantity}
                </div>
                <Button 
                    onClick={handleIncrement}
                    style={{
                        backgroundColor: '#FFC107',
                        border: 'none',
                        width: '40px',
                        height: '40px'
                    }}
                >
                    +
                </Button>
            </div>
            
            <div style={{ flex: 1, marginLeft: '2rem' }}>
            <Card className="mb-3">
                <CardBody>
                    <h5 style={{ 
                        fontFamily: 'Barlow',
                        fontWeight: '600',
                        marginBottom: '1rem'
                    }}>
                        Sipariş Toplamı
                    </h5>
                    <div className="d-flex justify-content-between mb-2">
                        <span style={{ color: '#6c757d' }}>Seçimler</span>
                        <span>{extrasPrice.toFixed(2)}₺</span>
                    </div>
                    <div className="d-flex justify-content-between">
                        <span style={{ color: '#dc3545', fontWeight: '600' }}>Toplam</span>
                        <span style={{ color: '#dc3545', fontWeight: '600' }}>
                            {((basePrice + extrasPrice) * quantity).toFixed(2)}₺
                        </span>
                    </div>
                </CardBody>
            </Card>

            <Button
                block
                style={{
                    backgroundColor: '#FFC107',
                    border: 'none',
                    padding: '0.75rem',
                    fontWeight: '600',
                    color: '#000'
                }}
            >
                SİPARİŞ VER
            </Button>
            </div>
        </div>
    );
}

export default CompleteOrder;