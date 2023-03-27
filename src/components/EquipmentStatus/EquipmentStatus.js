import React, { useState, useEffect } from 'react';
import equipmentStateHistory from '../../data/equipmentStateHistory.json';
import { Button, Card, Col, Row} from 'react-bootstrap';

function EquipmentStatus(props) {
  const [selectedEquipmentHistory, setSelectedEquipmentHistory] = useState([]);

  useEffect(() => {
    if (props.selectedEquipmentId === null) {
        setSelectedEquipmentHistory([]);
        return;
    }

    const filteredEquipment = equipmentStateHistory.filter(
      (equipment) => equipment.equipmentId === props.selectedEquipmentId
    );

    if (filteredEquipment.length > 0) {
      setSelectedEquipmentHistory(filteredEquipment[0].states);
    } else {
      setSelectedEquipmentHistory([]);
    }

  }, [props.selectedEquipmentId]);

  // função para exibir o histórico de estados dos equipamentos
  function showEquipmentHistory() {
    if (selectedEquipmentHistory.length > 0) {
      return selectedEquipmentHistory.map((state) => {
        let popupClass = ''
          if(state.equipmentStateId === '0808344c-454b-4c36-89e8-d7687e692d57') {
            popupClass = 'operando'
          } else if (state.equipmentStateId === 'baff9783-84e8-4e01-874b-6fd743b875ad') {
            popupClass = 'parado'
          } else if (state.equipmentStateId === '03b2d446-e3ba-4c82-8dc2-a5611fea6e1f') {
            popupClass = 'manutencao'
          } 

          const date = new Date(state.date)
          const dateOptions = {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
          };
          const formatedDate = date.toLocaleString('pt-BR', dateOptions);

        return (
            <Col sm="1" md="6" lg="3"  className="mb-3">      
              <Card className={popupClass}>
                <Card.Body>
                  <Card.Title>Data: {formatedDate}</Card.Title>
                  <Card.Text className="">Estado: 
                    {popupClass}
                  </Card.Text> 
                </Card.Body>
              </Card>
            </Col>
        );
      });
    } else {
      return <h2 className="text-center">Selecione um equipamento para ver seu histórico de estados.</h2>;
    }
  }

  return (
      <div>
        
        {props.selectedEquipmentId !== null && (
          <>
            <h1>Histórico de estados dos equipamentos</h1>
            <Button className="mb-3 text-center" style={{width: '300px'}} variant="danger" onClick={() => props.showStatusHistory(null)}>Fechar <i class="fas fa-times"></i> </Button>
          </>
        )}
        <Row>{showEquipmentHistory()}</Row>
        
      </div>
  );
}

export default EquipmentStatus;