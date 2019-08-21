import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './ModalCard.module.scss';
import {Heading} from '../';
import {Link} from 'react-router-dom';



export default class Card extends Component {
    render() {
        const {children, image, title, paragraph, column, textAlign, button } = this.props;

        return(
            <div className={ classy(style.modalCard) }>
                    <div className={style.mediaContent}>
                        {title ? <Heading tag="h6" className={style.mediaHeading}>{title}</Heading> : ''}
                        {paragraph ? <p className={style.mediaBody}>{paragraph}</p> : ''}
                        {button ? <div className={style.mediaButton}>{button}</div> : ''}
                    </div>
            </div>

        );
    }
}
