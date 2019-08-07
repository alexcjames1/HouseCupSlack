import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './Header__nav.module.scss';
import {Link} from 'react-router-dom';
import slackLogo from './images/slack-logo-icon.png';
import { Button } from '../../components';
import {Col, Row, Container } from 'react-bootstrap';
import { Section } from '../../components';
import Modal from 'react-skylight';
import { DownloadModal } from '../../components';



export default class Header__nav extends React.Component {

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
        );
    }
}
