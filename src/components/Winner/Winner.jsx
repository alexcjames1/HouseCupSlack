import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './HouseCupHero.module.scss';
import slackLogo from './images/slack-logo-icon.png';
import {Col, Row, Container } from 'react-bootstrap';
import { Section } from '../../components';
import {Link} from 'react-router-dom';
import { Modal, DownloadModal, Button } from '../../components';
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
import crown from './images/crown.svg';

import girlYellow from './images/huff-3.png';
import boyYellow2 from './images/huff-1.png';
import boyYellow1 from './images/huff-2.png';
import zigzag from './images/dodad-3.png';
import tenYellow from './images/+10.svg';

export default class HouseCupHero extends Component {
    render() {
        return(
            <div className={style.HouseCupHero}>
                <Row className={style.scenery}>
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
                    <div className={style.clouds}>
                        <img src={cloudRight} className={style.cloudOne}/>
                        <img src={cloudLeft} className={style.cloudTwo}/>
                        <img src={cloudRight} className={style.cloudThree}/>
                    </div>
                </Row>
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
                                <Button>
                                    <img src={slackLogo} className={style.slackLogo}/>Add to Slack
                                </Button>}
                            >
                                <DownloadModal />
                            </Modal>
                        </div>
                    </Col>
                    <Col xs="12" sm="6" className={style.crest}>

                        <img src={crest} className={style.crestMedia}/>

                            <img src={boyGreen} className={classy(style.userMed, style.boyGreen)}/>
                            <img src={girlGreen} className={classy(style.userLg, style.girlGreen)}/>
                            <img src={arrow} className={classy(style.accent, style.arrow)}/>
                            <img src={twentyFive} className={classy(style.points, style.twentyFive)}/>

                            <img src={boyBlue} className={classy(style.userMed, style.boyBlue)}/>
                            <img src={girlBlue} className={classy(style.userLg, style.girlBlue)}/>
                            <img src={swirlArrow} className={classy(style.accent, style.swirlArrow)}/>
                            <img src={emphasisLeft} className={classy(style.accent, style.emphasisLeft)}/>
                            <img src={emphasisRight} className={classy(style.accent, style.emphasisRight)}/>
                            <img src={fifty} className={classy(style.points, style.fifty)}/>
                            <img src={crown} className={classy(style.crown, style.crownLg)}/>
                            <img src={crown} className={classy(style.crown, style.crownSm)}/>

                            <img src={boyYellow2} className={classy(style.userMed, style.boyYellow2)}/>
                            <img src={boyYellow1} className={classy(style.userSm, style.boyYellow1)}/>
                            <img src={girlYellow} className={classy(style.userLg, style.girlYellow)}/>
                            <img src={zigzag} className={classy(style.accent, style.zigzag)}/>
                            <img src={tenYellow} className={classy(style.points, style.tenYellow)}/>

                            <img src={boyRed} className={classy(style.userLg, style.boyRed)}/>
                            <img src={girlRed2} className={classy(style.userMed, style.girlRed2)}/>
                            <img src={girlRed1} className={classy(style.userSm, style.girlRed1)}/>
                            <img src={swirl} className={classy(style.accent, style.swirl)}/>
                            <img src={tenRed} className={classy(style.points, style.tenRed)}/>

                    </Col>
                </Row>
                </Container>
                </div>
        );
    }
}
