import React, {Component} from 'react';
import style from './AudentioModal.module.scss';
import classy from '../../utils/classy';
import {Col, Row, Container } from 'react-bootstrap';
import { Section, Modal } from '../../components';

export default class AudentioModal extends Component {
    render() {
        return(
            <div className={style.audentio}>
                <Row className={style.modalNavigation}>
                    <Col>
                        <a href="#" className={style.backButton}>
                            <i className="mdi mdi-arrow-left" /> Go back
                            </a>
                        </Col>
                        <Col className={style.closeButton}>
                            <a href="#" className={style.close}>
                                <i className="mdi mdi-close" />
                            </a>
                        </Col>
                    </Row>
                    <Row className={style.row}>
                        <Col xs="12" sm="6">
                            <div className={style.header}>
                                <div className={style.heading}>
                                    <h3>Audentio</h3>
                                </div>
                                <div className={style.subheading}>
                                    <h4>Who we are</h4>
                                </div>
                            </div>
                            <div className={style.content}>
                                <p>
                                    Audentio is a technology agency specializing in community platforms and technologies. Anything that brings people together.
                                </p>
                            </div>
                            <div className={style.footer}>
                                <a href="https://www.audent.io/" target="_blank" className={style.learnMoreButton}>
                                    Learn more
                                </a>
                            </div>
                        </Col>

                        <Col xs="12" sm="6" className={style.col}>
                            <div className={style.card}>
                                <div className={classy(style.icon, style.helpIcon)}><i className="mdi mdi-comment-question-outline" /></div>
                                <div className={style.cardContent}>
                                    <div className={style.contentHeader}>
                                        <h5>
                                            We install for you
                                        </h5>
                                    </div>
                                    <div className={style.body}>
                                        <p>We offer installation and setup for this product.</p>
                                    </div>
                                    <div className={style.footer}>
                                        <a href="#" className={classy(style.button, style.buttonHelp)}>
                                            Contact us <i className="mdi mdi-arrow-right" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}
