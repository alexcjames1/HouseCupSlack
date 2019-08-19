import React, {Component} from 'react';
import style from './Button.module.scss';
import classy from '../../utils/classy.js';
import { Container } from 'react-bootstrap';

export default class Button extends Component {
    render() {
        const { kind, children, className, size, state } = this.props;
        // kinds: primary, secondary
        // size: big, small, xsmall, normal

        return(
            <div className={classy(style.button, className, (kind && style['button--' + kind]), (size && style['button--' + size] ) )}>
                    {children}
            </div>
        );
    }
}
