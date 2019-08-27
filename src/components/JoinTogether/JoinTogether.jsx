import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './JoinTogether.module.scss';
import slackBot from './images/slack-bot.png';
import {Col, Row } from 'react-bootstrap';
import { Section } from '../../components';

export default class JoinTogether extends Component {
    render() {
        return(
            <Section className={style.section} kind="dark">
                <Row className={style.row}>

                    <Col xs="12" sm="6">
                        <div className={style.header}>
                            <h4 className={style.subTitle}>
                                Join together, win together
                            </h4>
                            <div className={style.title}>
                                <h1>Bring competitive magic to your slack</h1>
                            </div>
                        </div>
                        <div className={style.content}>
                            <p>
                                Ut dui felis, elementum quis urna et, porttitor consequat nisl. Sed libero lorem, hendrerit a egestas auctor, posuere sit amet ex. Praesent facilisis finibus cursus.
                            </p>
                        </div>
                    </Col>


                    <Col xs="12" sm="6">
                        <div className={style.media}>
                            <img src={slackBot} alt="#" className={style.image}/>
                        </div>
                    </Col>

                </Row>
            </Section>
        );
    }
}
