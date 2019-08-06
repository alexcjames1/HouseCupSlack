import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './HouseCupHero.module.scss';
import slackLogo from './images/slack-logo-icon.png';
import {Col, Row, Container } from 'react-bootstrap';
import { Section } from '../../components';

export default class HouseCupHero extends Component {
    render() {
        return(
            <Section className={style.section} size="big">

                <Row>
                    <Col xs="12" sm="8" className={style.CTA}>
                        <div className={style.header}>
                            <h1 className={style.title}>
                                Team up &amp; award house points.
                            </h1>
                        </div>
                        <div className={style.content}>
                            <p>In gravida ligula facilisis odio convallis, quis mollis nibh dignissim. In vehicula placerat malesuada. Praesent pharetra tincidunt est feugiat pharetra.</p>
                        </div>
                        <div className={style.footer}>
                            <a className={style.button} href="https://slack.com/" target="_blank">
                                <img src={slackLogo}/>Add to Slack
                            </a>
                        </div>
                    </Col>
                </Row>

            </Section>
        );
    }
}
