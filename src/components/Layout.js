import React from 'react';
import Header from './Header'
import { Container} from 'react-bootstrap';

function Layout(props) {
  return (
    <Container>
        <Header />
            {props.children}
    </Container>
  );
}

export default Layout;