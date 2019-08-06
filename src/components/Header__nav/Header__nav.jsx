import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './Header__nav.module.scss';
import {Link} from 'react-router-dom';
import slackLogo from './images/slack-logo-icon.png';
import { Button } from '../../components';
import Modal from "react-responsive-modal";
import { render } from "react-dom";
import { DownloadModal } from '../../components';



export default class App extends React.Component {

    state = {
      open: false
    };

    onOpenModal = () => {
      this.setState({ open: true });
    };

    onCloseModal = () => {
      this.setState({ open: false });
    };


    render() {

        const { open } = this.state;


        return(
            <div>
              <nav className={style.nav}>
                  <a href="#" onClick={this.onOpenModal} className={style.button}>
                      <img src={slackLogo}/>Add to Slack
                  </a>
            </nav>
              <Modal open={open} onClose={this.onCloseModal} className={style.modal}>
                <DownloadModal />
              </Modal>
            </div>
        );
    }
}

render(<App />, document.getElementById("root"));
