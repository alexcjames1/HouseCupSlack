import React, {Component} from 'react';
import style from './Icon.module.scss';
import classy from '../../utils/classy.js';
import { Container } from 'react-bootstrap';

export default class Button extends Component {
    render() {
        const { children, size, className, fontSize, color } = this.props;
        // kinds: primary, secondary
        // size: big, small, xsmall, normal

        return(
            <i style={{ fontSize: fontSize, color: color }} className={classy(style.icon, style.mdi, style['mdi-' + children], className )}></i>
        );
    }
}
