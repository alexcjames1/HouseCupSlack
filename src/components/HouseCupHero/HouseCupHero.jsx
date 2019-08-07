import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './HouseCupHero.module.scss';
import slackLogo from './images/slack-logo-icon.png';
import {Col, Row, Container } from 'react-bootstrap';
import { Section } from '../../components';
import Modal from 'react-skylight';
import { DownloadModal } from '../../components';


export default class HouseCupHero extends Component {

    constructor(props){
      super(props);
    }

    render() {

        var modalStyles = {
          backgroundColor: '#fff',
          color: '#000',
          borderRadius: '6px',
          width: '70%',
          marginTop: '-300px',
          marginLeft: '-35%',
        };

        return(
            <Section className={style.section} size="big">

                <Row>
                    <Col xs="12" sm="8" className={style.CTA}>
                        <div className={style.header}>
                            <h1 className={style.title}>
                                Team up &amp; award house points.
                            </h1>
                        </div>
                        <div className={style.content}>
                            <p>In gravida ligula facilisis odio convallis, quis mollis nibh dignissim. In vehicula placerat malesuada. Praesent pharetra tincidunt est feugiat pharetra.</p>
                        </div>
                        <div>
                            <section>
                                    <a href="#" onClick={() => this.customDialog.show()} className={style.button}>
                                        <img src={slackLogo}/>Add to Slack
                                    </a>
                            </section>
                            <div className={style.audentioModal}>
                                    <Modal dialogStyles={modalStyles} hideOnOverlayClicked ref={ref => this.customDialog = ref}>
                                        <DownloadModal />
                                    </Modal>
                            </div>
                        </div>
                    </Col>
                </Row>

            </Section>
        );
    }
}
