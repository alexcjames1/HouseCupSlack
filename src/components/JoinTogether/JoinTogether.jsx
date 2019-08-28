import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './JoinTogether.module.scss';
import slackBot from './images/slack-bot.png';
import {Col, Row } from 'react-bootstrap';
import { Section, Crest } from '../../components';

import crest from './images/crest.png';

import fifty from './images/+50.svg';
import ten from './images/+10.svg';
import twentyFive from './images/+25.svg';

import crown from './images/crown.svg';

import swirl from './images/dodad-1.png';
import arrow from './images/dodad-2.png';
import zigzag from './images/dodad-3.png';
import swirlArrow from './images/dodad-4.png';
import emphasisLeft from './images/dodad-5.png';
import emphasisRight from './images/dodad-6.png';

import red1 from './images/gryff-1.png';
import red2 from './images/gryff-2.png';
import red3 from './images/gryff-3.png';

import yellow1 from './images/huff-1.png';
import yellow2 from './images/huff-2.png';
import yellow3 from './images/huff-3.png';

import blue1 from './images/rav-1.png';
import blue2 from './images/rav-2.png';

import green1 from './images/sly-1.png';
import green2 from './images/sly-2.png';

export default class JoinTogether extends Component {
    render() {
        return(
            <Section className={style.section} kind="dark">

                <div>
                    <img src={crest} className={style.crest} id="google"/>
                </div>

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
