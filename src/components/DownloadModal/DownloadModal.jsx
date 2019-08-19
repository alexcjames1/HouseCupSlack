import React, {Component} from 'react';
import style from './DownloadModal.module.scss';
import classy from '../../utils/classy';
import {Col, Row, Container } from 'react-bootstrap';
import { Section } from '../../components';


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

                        <div className={style.col}>
                            <div className={style.card}>
                                <div className={classy(style.icon, style.helpIcon)}><i className="mdi mdi-comment-question-outline" /></div>
                                <div className={style.content}>
                                    <div className={style.contentHeader}>
                                        <h5>
                                            I need help
                                        </h5>
                                    </div>
                                    <div className={style.body}>
                                        <p>Need this installed for you? We do not offer a SaaS yet.</p>
                                    </div>
                                    <div className={style.footer}>
                                         <a href="#" className={classy(style.button, style.buttonHelp)}>
                                             Get help <i className="mdi mdi-arrow-right" />
                                         </a>
                                     </div>
                                 </div>
                            </div>

                            <div className={style.card}>
                                <div className={classy(style.icon, style.getIcon)}><i className="mdi mdi-download" /></div>
                                <div className={style.content}>
                                    <div className={style.contentHeader}>
                                        <h5>
                                            I can do it myself
                                        </h5>
                                    </div>
                                    <div className={style.body}>
                                        <p>Here are some instructions for getting this done on your own.</p>
                                    </div>
                                    <div className={style.footer}>
                                         <a href="#" className={classy(style.button, style.buttonGet)}>
                                             Read instructions <i className="mdi mdi-arrow-right" />
                                         </a>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className={style.col}>
                            <div className={style.card}>
                                <div className={classy(style.icon, style.contributeIcon)}><i className="mdi mdi-square-edit-outline" /></div>
                                <div className={style.content}>
                                    <div className={style.contentHeader}>
                                        <h5>
                                            Contribute
                                        </h5>
                                    </div>
                                    <div className={style.body}>
                                        <p>Please also consider contributing to this open source project.</p>
                                    </div>
                                    <div className={style.footer}>
                                         <a href="#" className={classy(style.button, style.buttonContribute)}>
                                             Contribute <i className="mdi mdi-arrow-right" />
                                         </a>
                                    </div>
                                </div>
                            </div>
                            <div className={style.card}>
                                <div className={classy(style.icon, style.shareIcon)}><i className="mdi mdi-share-variant" /></div>
                                <div className={style.content}>
                                    <div className={style.contentHeader}>
                                        <h5>
                                            Share
                                        </h5>
                                    </div>
                                    <div className={style.body}>
                                        <p>Want to say thanks or share with your friends?</p>
                                    </div>
                                    <div className={style.footer}>
                                         <a href="#" className={classy(style.button, style.buttonShare)}>
                                             Share <i className="mdi mdi-arrow-right" />
                                         </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={style.modalFooter}>
                        <h5>Donate to St. Jude</h5>
                        <p>Ut dui felis, elementum quis urna et, porttitor consequat nisl. Sed libero lorem, hendrerit a egestas auctor, posuere sit amet ex. </p>
                        <a href="https://www.stjude.org/donate/donate-to-st-jude.html?sc_icid=wtg-lz-donatenow" target="_blank">
                            <span className={style.donate}>Donate</span><i className="mdi mdi-arrow-right" />
                        </a>
                    </div>
                </div>

        </Section>
    );
  }
}
