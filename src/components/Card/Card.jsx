import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './Card.module.scss';
import {Heading} from '../';
import {Link} from 'react-router-dom';



export default class Card extends Component {
    render() {
        const {image, title, paragraph, column, textAlign, button, buttonClass, align, cardClass, mediaClass, contentClass, imageClass, bodyClass} = this.props;
        // align: top, center, stretch

        return(
            <div className={ classy(style.card, style['align-' + align], cardClass) }>
                <div className={classy(style.media, mediaClass)}>
                    <div className={style.mediaFigure}>
                        <img className={imageClass} src={image} />
                    </div>
                    <div className={classy(style.mediaContent, contentClass)}>
                        {title ? <Heading tag="h6" className={style.mediaHeading}>{title}</Heading> : ''}
                        {paragraph ? <p className={classy(style.mediaBody, bodyClass)}>{paragraph}</p> : ''}
                        {button ? <div className={classy(style.mediaButton, buttonClass)}>{button}</div> : ''}
                    </div>
                </div>
            </div>

        );
    }
}
