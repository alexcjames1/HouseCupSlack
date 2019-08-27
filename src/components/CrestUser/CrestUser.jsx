import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './CrestUser.module.scss';
import slackLogo from './images/slack-logo-icon.png';
import {Col, Row, Container } from 'react-bootstrap';
import { Section } from '../../components';
import {Link} from 'react-router-dom';
import { Modal, DownloadModal, Button } from '../../components';

import girlRed1 from './images/gryff-1.png';
import girlRed2 from './images/gryff-2.png';
import boyRed from './images/gryff-3.png';

import girlGreen from './images/sly-1.png';
import boyGreen from './images/sly-2.png';

import girlBlue from './images/rav-1.png';
import boyBlue from './images/rav-2.png';

import girlYellow from './images/huff-3.png';
import boyYellow2 from './images/huff-1.png';
import boyYellow1 from './images/huff-2.png';

export default class HouseCupHero extends Component {
    render() {
        return(
            <div className={style.crestUser}>
                <div className={style.yellowGroup}>
                    <img src={boyYellow2} className={classy(style.userMed, style.boyYellow2)}/>
                    <img src={boyYellow1} className={classy(style.userSm, style.boyYellow1)}/>
                    <img src={girlYellow} className={classy(style.userLg, style.girlYellow)}/>
                </div>
                <div className={style.blueGroup}>
                    <img src={boyBlue} className={classy(style.userMed, style.boyBlue)}/>
                    <img src={girlBlue} className={classy(style.userLg, style.girlBlue)}/>
                </div>
                <div className={style.greenGroup}>
                    <img src={boyGreen} className={classy(style.userMed, style.boyGreen)}/>
                    <img src={girlGreen} className={classy(style.userLg, style.girlGreen)}/>
                </div>
                <div className={style.redGroup}>
                    <img src={boyRed} className={classy(style.userLg, style.boyRed)}/>
                    <img src={girlRed2} className={classy(style.userMed, style.girlRed2)}/>
                    <img src={girlRed1} className={classy(style.userSm, style.girlRed1)}/>
                </div>
            </div>
        );
    }
}
