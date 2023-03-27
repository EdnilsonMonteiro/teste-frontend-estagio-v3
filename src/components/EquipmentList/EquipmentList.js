import React from 'react';
import { Card } from 'react-bootstrap';
import equipmentsData from '../../data/equipment.json';

function EquipmentList() {

  const totalEquipments = equipmentsData.length

  function showEquimentList() {

    return equipmentsData.map((equipment) => {
      let equipmentName = '';
      if (equipment.equipmentModelId === 'a3540227-2f0e-4362-9517-92f41dabbfdf') {
        equipmentName = 'Caminhão de carga'
      } else if (equipment.equipmentModelId === 'a4b0c114-acd8-4151-9449-7d12ab9bf40f') {
        equipmentName = 'Harvester'
      } else if (equipment.equipmentModelId === '9c3d009e-0d42-4a6e-9036-193e9bca3199') {
        equipmentName = 'Garra traçadeira'
      }

      return (
        <>
        <Card key={equipment.id} className="mb-3">
          <Card.Body>
            <h3>{equipmentName} ({equipment.name})</h3>
            <p>Id do equipamento: {equipment.id}</p>
            <p>Id do modelo: {equipment.equipmentModelId}</p>
          </Card.Body>
        </Card>
        </>
      )  
  });

}

return (


  <>
  <h1 className="mt-2">Lista de Equipamentos</h1>

  <h5>Aqui você irá encontrar uma lista atualizada com todos os equipamentos que temos. Atualmente há um total de {totalEquipments} equipamentos!</h5>


  {showEquimentList()}
  </>
)
}

export default EquipmentList;