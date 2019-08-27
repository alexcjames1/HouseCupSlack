import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './Crest.module.scss';
import slackLogo from './images/slack-logo-icon.png';
import {Col, Row, Container } from 'react-bootstrap';
import { Section } from '../../components';
import {Link} from 'react-router-dom';
import { Modal, DownloadModal, Button, Crown, CrestUser, CrestPoint } from '../../components';
import crest from './images/crest.png';


export default class HouseCupHero extends Component {
    render() {
        return(
            <div className={style.crestContainer}>
                <img src={crest} className={style.crest}/>
                    <Crown />
                    <CrestUser />
                    <CrestPoint />
            </div>
        );
    }
}
