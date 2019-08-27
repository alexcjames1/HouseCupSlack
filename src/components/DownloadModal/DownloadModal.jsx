import React, {Component} from 'react';
import style from './DownloadModal.module.scss';
import classy from '../../utils/classy';
import {Col, Row, Container } from 'react-bootstrap';
import { Section, Card, Icon } from '../../components';

export default class downloadModal extends React.Component {

  render () {
    return (
        <Section className={style.section} kind="primary" size="xsmall">

                <div className={style.setup}>
                    <div className={style.header}>
                        <h4 className={style.heading}>
                            Thank you for using HouseCup.gg!
                        </h4>
                        <p className={style.lead}>
                            Ut dui felis, elementum quis urna et, porttitor consequat nisl. Sed libero lorem, hendrerit a egestas auctor, posuere sit amet ex.
                        </p>
                    </div>

                    <div className={style.row}>

                        <div>
                            <div className={classy(style.icon, style.helpIcon)}><i className="mdi mdi-comment-question-outline" /></div>
                            <div className={style.col}>
                                <Card mediaClass={style.media} cardClass={style.card} contentClass={style.mediaContent} align="stretch" buttonClass={classy(style.button, style.helpButton)} title="I need help" paragraph="Need this installed for you? We do not offer a SaaS yet." button="Get help" />
                            </div>
                        </div>

                        <div>
                            <div className={classy(style.icon, style.selfIcon)}><i className="mdi mdi-download" /></div>
                            <div className={style.col}>
                                <Card mediaClass={style.media} cardClass={style.card} contentClass={style.mediaContent} align="stretch" buttonClass={classy(style.button, style.selfButton)} title="I can do it myself" paragraph="Here are some instructions for getting this done on your own." button="Read Instructions" />
                            </div>
                        </div>

                        <div>
                            <div className={classy(style.icon, style.contributeIcon)}><i className="mdi mdi-square-edit-outline" /></div>
                            <div className={style.col}>
                                <Card mediaClass={style.media} cardClass={style.card} contentClass={style.mediaContent} align="stretch" buttonClass={classy(style.button, style.contributeButton)} title="Contribute" paragraph="Please also consider contributing to this open source project." button="Contribute" />
                            </div>
                        </div>

                        <div>
                            <div className={classy(style.icon, style.shareIcon)}><i className="mdi mdi-share-variant" /></div>
                            <div className={style.col}>
                                <Card mediaClass={style.media} cardClass={style.card} contentClass={style.mediaContent} align="stretch" buttonClass={classy(style.button, style.shareButton)} title="Share" paragraph="Want to say thanks or share with your friends?" button="Share" />
                            </div>
                        </div>

                    </div>

                    <div className={style.modalFooter}>
                        <h5>Donate to St. Jude</h5>
                        <p>Ut dui felis, elementum quis urna et, porttitor consequat nisl. Sed libero lorem, hendrerit a egestas auctor, posuere sit amet ex. </p>
                        <a href="https://www.stjude.org/donate/donate-to-st-jude.html?sc_icid=wtg-lz-donatenow" target="_blank">
                            <span className={classy(style.buttonResponsive, style.donate)}>Donate</span><i className="mdi mdi-arrow-right" />
                        </a>
                    </div>
                    
                </div>

        </Section>
    );
  }
}
