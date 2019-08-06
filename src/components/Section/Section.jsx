import React, {Component} from 'react';
import style from './Section.module.scss';
import classy from '../../utils/classy.js';
import { Container } from 'react-bootstrap';

export default class Section extends Component {
    render() {
        const { kind, children, className, size } = this.props;
        // kind types: primary, secondary, dark
        // size: big, small, xsmall, normal

        return(
            <div className={classy(style.section, className, (kind && style['section--' + kind]), (size && style['section--' + size] ) )}>
                <Container>
                    {children}
                </Container>
            </div>
        );
    }
}
