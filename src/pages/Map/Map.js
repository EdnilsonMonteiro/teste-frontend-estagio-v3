import React, { useState } from 'react';
import Layout from '../../components/Layout';
import equipmentPositionHistory from '../../data/equipmentPositionHistory.json';
import equipmentStateHistory from '../../data/equipmentStateHistory.json';
import EquipmentStatus from '../../components/EquipmentStatus/EquipmentStatus';
import equipmentsData from '../../data/equipment.json';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import MapLegend from '../../components/MapLegend';
import { Container, Button } from 'react-bootstrap';


function Map() {

    const [selectedEquipmentId, setSelectedEquipmentId] = useState(null);

    const lastPositions = {};
    const lastStates = {};
    const states = {};

    //Pesquisa dentro do Json onde se localiza o equipamento com a data mais recente de sua localização e retorna sua localização
    equipmentPositionHistory.forEach(equipment => {
        const lastPosition = equipment.positions.reduce((prev, current) => {
            return (new Date(prev.date) > new Date(current.date)) ? prev : current;
        });
        lastPositions[equipment.equipmentId] = lastPosition
    });

    //Pesquisa dentro do Json qual o estado atual de cada equipamente
    equipmentStateHistory.forEach(equipment => {
        const lastState = equipment.states.reduce((prev, current) => {
            return (new Date(prev.date) > new Date(current.date)) ? prev : current;
        });
        lastStates[equipment.equipmentId] = lastState

        let stateText = '';
        if (lastState.equipmentStateId === "0808344c-454b-4c36-89e8-d7687e692d57") {
            stateText = "Operando"
        } else if (lastState.equipmentStateId === "baff9783-84e8-4e01-874b-6fd743b875ad") {
            stateText = "Parado"
        } else if (lastState.equipmentStateId === "03b2d446-e3ba-4c82-8dc2-a5611fea6e1f") {
            stateText = "Manutenção"
        }

        states[equipment.equipmentId] = stateText;

    });

    //renderiza o estado dos equipamentos para mostrar em cada marker
    const markerPopups = Object.keys(lastStates).map((equipmentId) => {
        const stateText = states[equipmentId];
        let popupClass = '';
        if (stateText === 'Operando') {
            popupClass = 'operando';
        } else if (stateText === 'Manutenção') {
            popupClass = 'manutencao';
        } else if (stateText === 'Parado') {
            popupClass = 'parado';
        }

        return (
          <div key={equipmentId}>
            <li>Equipamento ID: {equipmentId}</li>
            <li className={popupClass}>Estado: {stateText}</li>
            <Button className="mt-2" onClick={() => showStatusHistory(equipmentId)}>Ver histórico de estados</Button>
          </div>
        );
      });

    //Renderiza os markers no mapa e os coloca na última posição do equipamento
    const markers = Object.values(lastPositions).map((position, index) => {

        let equipmentName = [];
        //Define qual é o equipamento de acordo com seu ID
        equipmentsData.map((equipment, index) => {
            if (equipment.equipmentModelId === 'a3540227-2f0e-4362-9517-92f41dabbfdf') {
            equipmentName[index] = 'Caminhão de carga'
            } else if (equipment.equipmentModelId === 'a4b0c114-acd8-4151-9449-7d12ab9bf40f') {
            equipmentName[index] = 'Harvester'
            } else if (equipment.equipmentModelId === '9c3d009e-0d42-4a6e-9036-193e9bca3199') {
            equipmentName[index] = 'Garra traçadeira'
            }
        })

        // Definir o ícone do marcador com base no nome do equipamento
        let customIcon;
        if (equipmentName[index] === 'Caminhão de carga') {
            customIcon = new Icon({
                iconUrl: '/marker-red.png',
                iconSize: [15, 25]
            });
        } else if (equipmentName[index] === 'Harvester') {
            customIcon = new Icon({
                iconUrl: '/marker-green.png',
                iconSize: [15, 25]
            });
        } else if (equipmentName[index] === 'Garra traçadeira') {
            customIcon = new Icon({
                iconUrl: '/marker-blue.png',
                iconSize: [15, 25]
            });
        }

        //retorno em que mostram os <Marker>
        return (

            <Marker key={`${position.lat}-${position.lon}`} position={[position.lat, position.lon]} icon={customIcon}>
                <Popup>
                    <ul>
                        <h4>{equipmentName[index]}</h4>
                        <li>Localização:{`Lat: ${position.lat}, Lon: ${position.lon}`}</li>
                        {markerPopups[index]}
                    </ul>
                </Popup>
            </Marker>
        )
    })

    function showStatusHistory(equipmentId) {
        setSelectedEquipmentId(equipmentId);
    }

    const initialPosition = markers.length ? markers[0].props.position : [-19.027071, -46.004085];
        
    return(
    <Container >
        <Layout>
            <section className='map-component'>
                <div className='map'>
                <MapContainer center={initialPosition} zoom={10} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    /> 
                    <MapLegend position="topright" />
                    {markers}
                </MapContainer>
                </div>
            </section>
            
            <EquipmentStatus showStatusHistory={showStatusHistory} selectedEquipmentId={selectedEquipmentId} />
        </Layout>
    </Container>
    )
}

export default Map;
