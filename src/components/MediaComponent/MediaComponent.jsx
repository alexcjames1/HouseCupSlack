import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './MediaComponent.scss';
import {flexboxgrid} from '../../';
import reset from '../../';
import {Heading} from '../';

export default class Blurb extends Component  {
    render() {
        const {image, title, paragraph, column, textAlign } = this.props;

        return (
            <div className={ classy('media', column ? 'media--column' : '', textAlign ? ['textAlign--' + textAlign] : '') }>
                <div className="media__figure media__figure--centered">
                    <img src={image} />
                </div>
                <div className="media__content">
                    {title ? <Heading tag="h3" className='media__title'>{title}</Heading> : ''}
                    {paragraph ? <p className="media__body">{paragraph}</p> : ''}
                </div>
            </div>
        );
    }
}
