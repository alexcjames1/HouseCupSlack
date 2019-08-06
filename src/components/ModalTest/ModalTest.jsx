import classy from '../../utils/classy';
import style from './ModalTest.module.scss';
import {Col, Row, Container } from 'react-bootstrap';
import { Section } from '../../components';
import { DownloadModal, AudentioModal } from '../../components';


import React from "react";
import ReactDOM from "react-dom";

const JSX_MODAL = (
  <div className="ui dimmer modals visible active">
    <div className="ui standard modal visible active">
      THIS IS SOME TEXT IN THE MODAL // add some UI features here
    </div>
  </div>
);


function Modal(props) {
  return ReactDOM.createPortal(JSX_MODAL, document.querySelector("#modal"));
}


export default Modal;
