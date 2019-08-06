import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './Logo.module.scss';
import botLogo from './images/bot-logo.png';

export default class Logo extends Component {
    render() {
        return(
            <div className={style.logo}>

                <div className={style.media}>
                    <img src={botLogo} alt="" />
                </div>

                <div className={style.content}>
                    <h5>House Cup</h5>
                    <p>Slack Bot</p>
                </div>
                
            </div>
        );
    }
}
