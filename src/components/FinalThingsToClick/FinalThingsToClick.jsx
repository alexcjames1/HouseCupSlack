import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './FinalThingsToClick.module.scss';
import botLogo from './images/bot-logo.png';
import slackLogoWhite from './images/slack-icon-white.png';
import { Modal, DownloadModal, Section, Button } from '../../components';

export default class Footer__SlackCTA extends Component {
    render() {
        return(
            <Section className={style.section} kind="primary" size="xsmall">
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
                            <Modal  classname={style.modal} trigger={
                                <Button kind="dark" icon="slack">
                                    Add to slack
                                </Button>
                            }>
                                <DownloadModal />
                            </Modal>
                            <Button href="https://github.com/" target="_blank">
                                Contribute to GitHub
                            </Button>
                            <p className={style.subTitle}>
                                Free to use · Easy setup · Open source
                            </p>
                        </div>
                    </div>

                </div>
            </Section>
        );
    }
}
