import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './Footer.module.scss';
import { Row } from 'react-bootstrap';
import { Section } from '../../components';
import { Footer__legal, Footer__SlackCTA } from '../../components';

export default class Footer extends Component {
    render() {
        return(
            <div className={style.footer}>
                <Section className={style.section}>
                    <footer>
                        <Section className={style.section} kind="dark" size="special">
                            <Row>
                                <Footer__SlackCTA />
                                <Footer__legal />
                            </Row>
                        </Section>
                    </footer>
                </Section>
            </div>
        );
    }
}
