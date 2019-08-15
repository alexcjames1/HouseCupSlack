import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './Header__nav.module.scss';
import slackLogo from './images/slack-logo-icon.png';
import { Section } from '../../components';
import { Route } from  'react-router';
import { Modal } from '../../components';
import { DownloadModal } from  '../../components';



export default class Header__nav extends React.Component {
    render() {
        return(
            <div>
                <Modal trigger={
                        <a className={style.button}>
                            <img src={slackLogo} className={style.slackLogo}/>Add to Slack
                        </a>
                    }>
                    <DownloadModal />
                </Modal>
            </div>
        );
    }
}
