import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './Header__nav.module.scss';
import slackLogo from './images/slack-logo-icon.png';
import { Section } from '../../components';
import Modal from 'react-skylight';
import { DownloadModal } from '../../components';



export default class Header__nav extends React.Component {
    render() {
        return(
            <div>
                        <a href="#" className={style.button}>
                            <img src={slackLogo} className={style.slackLogo}/>Add to Slack
                        </a>
            </div>
        );
    }
}
