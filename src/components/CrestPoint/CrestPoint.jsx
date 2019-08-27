import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './CrestPoint.module.scss';
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

import tenRed from './images/+10.svg';
import twentyFive from './images/+25.svg';
import fifty from './images/+50.svg';
import tenYellow from './images/+10.svg';

export default class HouseCupHero extends Component {
    render() {
        return(
            <div className={style.crestPoint}>

                <img src={twentyFive} className={classy(style.points, style.twentyFive)}/>
                <img src={fifty} className={classy(style.points, style.fifty)}/>
                <img src={tenYellow} className={classy(style.pointsTen, style.tenYellow)}/>
                <img src={tenRed} className={classy(style.pointsTen, style.tenRed)}/>

            </div>
        );
    }
}
