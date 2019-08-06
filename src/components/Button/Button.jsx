import React, {Component} from 'react';
import style from './Button.module.scss';
import classy from '../../utils/classy.js';
import { Container } from 'react-bootstrap';

export default class Button extends Component {
    render() {
        const { kind, children, className, state } = this.props;
        // kind types: primary, link, CTA, large
        // size: big, small, xsmall, normal

        return(
            <a href="" className={classy(style.button, className, (kind && 'button--' + kind), (state && 'button--' + state ) )}>
                <Container>
                    {children}
                </Container>
            </a>
        );
    }
}
