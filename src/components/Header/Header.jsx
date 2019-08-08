import React, {Component} from 'react';
import style from './Header.module.scss';
import classy from '../../utils/classy';
import {Col, Row } from 'react-bootstrap';
import { Section } from '../../components';
import { Logo, Header__nav } from '../../components';


export default class Header extends Component {
    render() {
        return(
            <header className={style.header}>
                <Section>
                    <Row>

                        <Col xs="6" sm="6">
                            <div className="logo">
                                <a href="#">
                                    <Logo />
                                </a>
                            </div>
                        </Col>

                        <Col xs="6" sm="6">
                            <Header__nav />
                        </Col>

                    </Row>
                </Section>
            </header>
        );
    }
}
