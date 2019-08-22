import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './style.module.scss';
import {Col, Row } from 'react-bootstrap';
import { Section } from '../../components';

export default class HouseCupFeatures extends Component {
    render() {
        return(
            <Section className={style.section} kind="secondary" size="normal">

                <div className={style.title}>
                    <h5>
                        Features
                    </h5>
                </div>

                <Row>
                    <Col xs="12" sm="4" className={style.col}>
                        <h5 className={style.lead}>Add and remove points. </h5>
                        <p className={style.paragraph}>
                            Nam feugiat lorem non ullamcorper hendrerit. Aenean leo metus, lacinia ut suscipit eu.
                        </p>
                    </Col>

                    <Col xs="12" sm="4" className={style.col}>
                        <h5 className={style.boldText}>Stay up to  date with  stats. </h5>
                        <p className={style.paragraph}>
                            Nam feugiat lorem non ullamcorper hendrerit. Aenean leo metus, lacinia ut suscipit eu.
                        </p>
                    </Col>

                    <Col xs="12" sm="4" className={style.col}>
                        <h5 className={style.boldText}>Start and end semesters. </h5>
                        <p className={style.paragraph}>
                            Nam feugiat lorem non ullamcorper hendrerit. Aenean leo metus, lacinia ut suscipit eu.
                        </p>
                    </Col>
                </Row>

            </Section>
        );
    }
}
