import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './Crown.module.scss';
import slackLogo from './images/slack-logo-icon.png';
import {Col, Row, Container } from 'react-bootstrap';
import { Section } from '../../components';
import {Link} from 'react-router-dom';
import { Modal, DownloadModal, Button } from '../../components';
import crown from './images/crown.svg';

export default class HouseCupHero extends Component {
    render() {
        return(
            <div className={style.crestCrown}>

                <img src={crown} className={classy(style.crown, style.crownLg)}/>
                <img src={crown} className={classy(style.crown, style.crownSm)}/>

            </div>
        );
    }
}
