import React, {Component} from 'react';
import style from './DownloadModal.module.scss';
import classy from '../../utils/classy';
import {Col, Row, Container } from 'react-bootstrap';
import { Section } from '../../components';
import { Card } from '../../components';

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
                            <Card mediaClass={style.media} cardClass={style.card} contentClass={style.mediaContent} align="stretch" buttonClass={classy(style.button, style.helpButton)} title="How We Do: Team Building" paragraph="Aliquam sed nulla sollicitudin, cursus ante et, dictum lacus. Cras ut magna quis tortor." button="Read More" />
                        </div>

                        <div className={style.col}>
                            <Card mediaClass={style.media} cardClass={style.card} contentClass={style.mediaContent} align="stretch" buttonClass={classy(style.button, style.helpButton)} title="How We Do: Team Building" paragraph="Aliquam sed nulla sollicitudin, cursus ante et, dictum lacus. Cras ut m liquam sed nulla sollicitudin, cursus ante et, dictum lacus. Cras ut magna quis tortor." button="Read More" />
                        </div>

                        <div className={style.col}>
                            <Card mediaClass={style.media} cardClass={style.card} contentClass={style.mediaContent} align="stretch" buttonClass={classy(style.button, style.helpButton)} title="How We Do: Team Building" paragraph="Aliquam sed nulla sollicitudin, cursus ante et, dictum lacus. Cras ut magna quis tortor." button="Read More" />
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
