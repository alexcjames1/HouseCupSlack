import React, {Component} from 'react';
import style from './Button.module.scss';
import classy from '../../utils/classy.js';
import { Icon } from '../../components';
import { Container } from 'react-bootstrap';

export default class Button extends Component {
    render() {
        const { kind, children, className, size, state, href, target, icon } = this.props;
        // kinds: primary, secondary
        // size: big, small, xsmall, normal

        return(
            <a href={href} target={target} className={classy(style.button, className, (kind && style['button--' + kind]), (size && style['button--' + size] ) )}>
                <Icon className={style.icon}>{icon}</Icon>
                {children}
            </a>
        );
    }
}
