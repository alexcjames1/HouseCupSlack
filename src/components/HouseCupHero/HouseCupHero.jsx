import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './HouseCupHero.module.scss';
import slackLogo from './images/slack-logo-icon.png';
import {Col, Row, Container } from 'react-bootstrap';
import { Section } from '../../components';
import {Link} from 'react-router-dom';
import { Modal } from '../../components';
import { DownloadModal } from '../../components';
import lake from './images/black-lake.svg';
import frontTreeline from './images/front-treeline.png';
import backTreeline from './images/back-treeline.png';
import castle from './images/castle.png';
import mainDarkHill from './images/main-ground.png';
import tree from './images/tree.svg';
import trees from './images/trees.svg';
import cloudLeft from './images/cloud-1.svg';
import cloudRight from './images/cloud-2.svg';
import crest from './images/crest.svg';

export default class HouseCupHero extends Component {
    render() {
        return(
            <div className={style.HouseCupHero}>
                <div className={style.foreground}>
                    <div className={style.hillobjects}>
                        <img src={tree} className={style.tree}/>
                        <img src={mainDarkHill} className={style.mainDarkHill}/>
                    </div>
                </div>
                <Container>
                <Row className={style.row}>
                    <Col xs="12" sm="7" className={style.content}>
                        <div className={style.header}>
                            Team up & award house points.
                        </div>
                        <div className={style.body}>
                            <p>In gravida ligula facilisis odio convallis, quis mollis nibh dignissim. In vehicula placerat malesuada. Praesent pharetra tincidunt est feugiat pharetra.</p>
                        </div>
                        <div className={style.footer}>
                            <Modal trigger={
                                <Link className={style.slackButton}>
                                    <img src={slackLogo} className={style.slackLogo}/>Add to Slack
                                </Link>}
                            >
                                <DownloadModal />
                            </Modal>
                        </div>
                    </Col>
                    <Col xs="12" sm="5" className={style.crest}>
                            <img src={crest} className={style.crest}/>
                    </Col>
                </Row>
                </Container>

                <div className={style.clouds}>
                    <img src={cloudRight} className={style.cloudOne}/>
                    <img src={cloudLeft} className={style.cloudTwo}/>
                    <img src={cloudRight} className={style.cloudThree}/>
                </div>
                <div className={style.middleground}>
                    <img src={backTreeline} className={style.backTreeline}/>
                    <img src={frontTreeline} className={style.frontTreeline}/>
                </div>
                <div className={style.background}>
                    <img src={lake} className={style.lake}/>
                    <img src={castle} className={style.castle}/>
                </div>
                </div>
        );
    }
}
