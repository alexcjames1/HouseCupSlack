import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './Testcomponent.module.scss';
import houseTeams from './images/house-teams.png';
import {MediaComponent} from '../';
import {Col, Row, Container } from 'react-bootstrap';
import { Section } from '../../components';
import Modal from "react-responsive-modal";
import { render } from "react-dom";

export default class App extends React.Component {

    state = {
      open: false
    };

    onOpenModal = () => {
      this.setState({ open: true });
    };

    onCloseModal = () => {
      this.setState({ open: false });
    };


    render() {

        const { open } = this.state;


        return(
            <div>
              <h2>react-responsive-modal</h2>
              <button onClick={this.onOpenModal}>Open modal</button>
              <Modal open={open} onClose={this.onCloseModal}>
                <h2>Simple centered modal</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                  pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                  hendrerit risus, sed porttitor quam.
                </p>
              </Modal>
            </div>
        );
    }
}

render(<App />, document.getElementById("root"));
