import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './Header__nav.module.scss';
import { Route } from  'react-router';
import { Modal, DownloadModal, Button, Section } from '../../components';
import slackLogo from './images/slack-logo-icon.png';



export default class Header__nav extends React.Component {
    render() {
        return(
            <div>
                <Modal trigger={
                        <Button>
                            <img src={slackLogo} className={style.slackLogo}/>Add to Slack
                        </Button>
                    }>
                    <DownloadModal />
                </Modal>
            </div>
        );
    }
}
