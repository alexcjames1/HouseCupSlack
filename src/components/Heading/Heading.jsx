import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './Heading.scss';
import {flexboxgrid} from '../../';
import reset from '../../';

export default class Heading extends Component {
    render() {
        const {tag, text, noMargin, align, className, children} = this.props;
        const classNameProps = classy(
            tag, 
            'heading', 
            noMargin ? 'noMargin' : '',
            align ? ['align--' + align] : '',
            className,
        );
        
        return(
            <div className={classNameProps}>{children}</div>
        );
    }
}