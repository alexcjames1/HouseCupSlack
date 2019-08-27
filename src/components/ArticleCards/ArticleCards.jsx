import React, { Component } from 'react';
import classy from '../../utils/classy';
import style from './ArticleCards.module.scss';
import { Card } from '../';
import { Col, Row, Container } from 'react-bootstrap';
import { Section } from '../../components';
import block from './images/block.png';

export default class ArticleCards extends Component {
    render() {
        return(
            <Section className={style.section} kind="primary" size="normal">

                <div className={style.title}>
                    <h3>How We Do Culture</h3>
                </div>
                <Row>
                    <Col xs="12" sm="6" className={style.teamBuilding}>
                        <a href="#">
                            <Card cardClass={style.card} imageClass={style.media} bodyClass={style.body} buttonClass={style.button} image={block} title="How We Do: Team Building" paragraph="Aliquam sed nulla sollicitudin, cursus ante et, dictum lacus. Cras ut magna quis tortor." button="Read More" />
                        </a>
                    </Col>
                    <Col xs="12" sm="6" className={style.funStuff}>
                        <a href="#">
                            <Card  cardClass={style.card} imageClass={style.media} bodyClass={style.body} image={block} title="Focus on the Fun Stuff" paragraph="Aliquam sed nulla sollicitudin, cursus ante et, dictum lacus. Cras ut magna quis tortor." button="Read More" />
                        </a>
                    </Col>
                </Row>

            </Section>
        );
    }
}
