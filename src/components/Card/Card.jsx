import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './Card.module.scss';
import {Heading} from '../';
import {Link} from 'react-router-dom';



export default class Card extends Component {
    render() {
        const {image, title, paragraph, column, textAlign, button } = this.props;

        return(
            <div className={ classy(style.card) }>
                <div className={style.media}>
                    <div className={style.mediaFigure}>

                    </div>
                    <div className={style.mediaContent}>
                        {title ? <Heading tag="h6" className={style.mediaHeading}>{title}</Heading> : ''}
                        {paragraph ? <p className={style.mediaBody}>{paragraph}</p> : ''}
                        {button ? <Link className={style.mediaButton}>{button}</Link> : ''}
                    </div>
                </div>
            </div>

        );
    }
}
