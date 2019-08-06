import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './Modal.module.scss';
import {Col, Row, Container } from 'react-bootstrap';
import { Section } from '../../components';
import { DownloadModal, AudentioModal } from '../../components';


export default class Modal extends Component {
    render() {
        const {children, className} = this.props;

        return(
            <div className={style.modal}>
                <Container>
                    {children}
                </Container>
            </div>
        );
    }
}
