import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './Footer__SlackCTA.module.scss';
import botLogo from './images/bot-logo.png';
import Modal from 'react-skylight';
import { DownloadModal } from '../../components';

export default class Footer__SlackCTA extends Component {

    constructor(props){
      super(props);
    }

    render() {

        var modalStyles = {
          backgroundColor: '#fff',
          color: '#000',
          borderRadius: '6px',
          width: '70%',
          marginTop: '-20.3%',
          marginLeft: '-35%',
        };

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
                        <button onClick={() => this.customDialog.show()} className={classy(style.button, style.slackButton)}>
                            <i className="mdi mdi-slack" /> Add to slack
                        </button>
                        <button>
                            <a href="https://github.com/" target="_blank" className={classy(style.button, style.githubButton)}>
                                Contribute to GitHub
                            </a>
                        </button>
                        <p className={style.subTitle}>
                            Free to use · Easy setup · Open source
                        </p>
                        <Modal dialogStyles={modalStyles} hideOnOverlayClicked ref={ref => this.customDialog = ref}>
                            <DownloadModal />
                        </Modal>
                    </div>
                </div>

            </div>
        );
    }
}
