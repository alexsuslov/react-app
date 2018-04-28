import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';


const Layout = props => {
  return (<Container fluid>{props.children}</Container>);
};

Layout.propTypes = {
};

export default connect()(Layout);
