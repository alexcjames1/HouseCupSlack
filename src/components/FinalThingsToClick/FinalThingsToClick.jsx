import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './FinalThingsToClick.module.scss';
import botLogo from './images/bot-logo.png';
import slackLogoWhite from './images/slack-icon-white.png';
import { Modal } from '../../components';
import { DownloadModal } from  '../../components';

export default class Footer__SlackCTA extends Component {
    render() {
        return(
            <div className={style.footer__SlackCTA}>

                <div className={style.media}>
                    <div className={style.mediaFigure}>
                        <img src={botLogo} alt="#" />
                    </div>
                </div>
                <div className={style.content}>
                    <div className={style.header}>
                        <div className={style.title}>
                            <h2>Start winning house points</h2>
                        </div>
                    </div>
                    <div className={style.body}>
                        <p>
                            Aliquam sed nulla sollicitudin, cursus ante et, dictum lacus. Cras ut magna quis tortor.
                        </p>
                    </div>
                    <div className={style.footer}>
                        <Modal trigger={
                            <a className={classy(style.button, style.slackButton)}>
                                <img src={slackLogoWhite} className={style.slackLogo}/> Add to slack
                            </a>
                        }>
                            <DownloadModal />
                        </Modal>
                        <a href="https://github.com/" target="_blank" className={classy(style.button, style.githubButton)}>
                            Contribute to GitHub
                        </a>
                        <p className={style.subTitle}>
                            Free to use · Easy setup · Open source
                        </p>
                    </div>
                </div>

            </div>
        );
    }
}
