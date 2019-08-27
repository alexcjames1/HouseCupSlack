import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './Footer.module.scss';
import { Row, Col } from 'react-bootstrap';
import { Section } from '../../components';

export default class Footer extends Component {
    render() {
        return(
            <Section>
                <Row className={style.legal}>

                    <Col>
                        <p className={style.copyright}>
                            <a href="https://www.audent.io/" target="_blank"> Made with <i className="mdi mdi-heart"></i> by <span className={style.audentio}>Audentio</span></a>
                        </p>
                    </Col>
                    <Col className={style.socialMedia}>
                        <ul className={style.socialMediaLinks}>
                            <li className={style.icon}>
                                <a href="https://twitter.com/Audentio" target="_blank"><i className="mdi mdi-twitter"></i></a>
                            </li>
                            <li className={style.icon}>
                                <a href="https://www.facebook.com/Audentio/" target="_blank"><i className="mdi mdi-facebook-box"></i></a>
                            </li>
                            <li className={style.icon}>
                                <a href="https://www.linkedin.com/company/audentio/" target="_blank"><i className="mdi mdi-linkedin"></i></a>
                            </li>
                        </ul>
                    </Col>

                </Row>
            </Section>
        );
    }
}
