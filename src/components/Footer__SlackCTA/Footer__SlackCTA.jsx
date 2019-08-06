import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './Footer__SlackCTA.module.scss';
import botLogo from './images/bot-logo.png';
// import {Col, Row, Container } from 'react-bootstrap';

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
                            <h3>Start winning house points</h3>
                        </div>
                    </div>
                    <div className={style.content}>
                        <p>
                            Aliquam sed nulla sollicitudin, cursus ante et, dictum lacus. Cras ut magna quis tortor.
                        </p>
                    </div>
                    <div className={style.footer}>
                        <a href="https://www.slack.com/" target="_blank" className={classy(style.button, style.slackButton)}>
                            <i className="mdi mdi-slack" /> Add to slack
                        </a>
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
