import React from 'react';
import Layout from '../components/Layout';
import { Container } from 'react-bootstrap';
import EquipmentList from '../components/EquipmentList/EquipmentList';

function EquipmentListPage() {
  return (
    <div>
      <Container>
        <Layout>
          <EquipmentList />
        </Layout>
      </Container>
    </div>
  );
}

export default EquipmentListPage;