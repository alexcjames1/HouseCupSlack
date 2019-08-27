import React, {Component} from 'react';
import style from './Header.module.scss';
import classy from '../../utils/classy';
import {Col, Row } from 'react-bootstrap';
import { Section, Logo, Header__nav } from '../../components';


export default class Header extends Component {
    render() {
        return(
            <header className={style.header}>
                <Section>
                    <Row className={style.row}>

                        <Col xs="6" sm="6">
                            <div className={style.logo}>
                                    <Logo />
                            </div>
                        </Col>

                        <Col xs="6" sm="6" className={style.navigation}>
                            <Header__nav />
                        </Col>

                    </Row>
                </Section>
            </header>
        );
    }
}
