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
import crest from './images/crest.png';

import girlRed1 from './images/gryff-1.png';
import girlRed2 from './images/gryff-2.png';
import boyRed from './images/gryff-3.png';
import swirl from './images/dodad-1.png';
import tenRed from './images/+10.svg';

import girlGreen from './images/sly-1.png';
import boyGreen from './images/sly-2.png';
import arrow from './images/dodad-2.png';
import twentyFive from './images/+25.svg';

import girlBlue from './images/rav-1.png';
import boyBlue from './images/rav-2.png';
import swirlArrow from './images/dodad-4.png';
import emphasisLeft from './images/dodad-6.png';
import emphasisRight from './images/dodad-5.png';
import fifty from './images/+50.svg';

import girlYellow from './images/huff-3.png';
import boyYellow2 from './images/huff-1.png';
import boyYellow1 from './images/huff-2.png';
import zigzag from './images/dodad-2.png';
import tenYellow from './images/+10.svg';

export default class HouseCupHero extends Component {
    render() {
        return(
            <div className={style.HouseCupHero}>
                <Container>
                <Row className={style.row}>
                    <Col xs="12" sm="6" className={style.content}>
                        <div className={style.header}>
                            Team up & award house points.
                        </div>
                        <div className={style.body}>
                            <p>In gravida ligula facilisis odio convallis, quis mollis nibh dignissim. In vehicula placerat malesuada. Praesent pharetra tincidunt est feugiat pharetra.</p>
                        </div>
                        <div className={style.footer}>
                            <Modal trigger={
                                <a className={style.slackButton}>
                                    <img src={slackLogo} className={style.slackLogo}/>Add to Slack
                                </a>}
                            >
                                <DownloadModal />
                            </Modal>
                        </div>
                    </Col>
                    <Col xs="12" sm="6" className={style.crest}>

                        <img src={crest} className={style.crest}/>
                        <div className={style.greenGroup}>
                            <img src={boyGreen} className={style.boyGreen}/>
                            <img src={girlGreen} className={style.girlGreen}/>
                            <img src={arrow} className={style.arrow}/>
                            <img src={twentyFive} className={style.twentyFive}/>
                        </div>
                        <div className={style.blueGroup}>
                            <img src={boyBlue} className={style.boyBlue}/>
                            <img src={girlBlue} className={style.girlBlue}/>
                            <img src={swirlArrow} className={style.swirlArrow}/>
                            <img src={emphasisLeft} className={style.emphasisLeft}/>
                            <img src={emphasisRight} className={style.emphasisRight}/>
                            <img src={fifty} className={style.fifty}/>
                        </div>
                        <div className={style.yellowGroup}>
                            <img src={boyYellow2} className={style.boyYellow}/>
                            <img src={boyYellow1} className={style.boyYellow}/>
                            <img src={girlYellow} className={style.girlYellow}/>
                            <img src={zigzag} className={style.zigzag}/>
                            <img src={tenYellow} className={style.ten}/>
                        </div>
                        <div className={style.redGroup}>
                            <img src={boyRed} className={style.boyRed}/>
                            <img src={girlRed1} className={style.girlRed1}/>
                            <img src={girlRed2} className={style.girlRed2}/>
                            <img src={swirl} className={style.swirl}/>
                            <img src={tenRed} className={style.ten}/>
                        </div>

                    </Col>
                </Row>
                </Container>
                <Row className={style.scenery}>
                    <div className={style.clouds}>
                        <img src={cloudRight} className={style.cloudOne}/>
                        <img src={cloudLeft} className={style.cloudTwo}/>
                        <img src={cloudRight} className={style.cloudThree}/>
                    </div>
                    <div className={style.background}>
                        <img src={lake} className={style.lake}/>
                    </div>
                    <div className={style.middleground}>
                        <img src={frontTreeline} className={style.frontTreeline}/>
                        <img src={backTreeline} className={style.backTreeline}/>
                    </div>
                    <div className={style.foreground}>
                            <img src={tree} className={style.tree}/>
                            <img src={castle} className={style.castle}/>
                            <img src={mainDarkHill} className={style.mainDarkHill}/>
                    </div>
                </Row>
                </div>
        );
    }
}
