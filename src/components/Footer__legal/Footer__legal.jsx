import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './Footer__legal.module.scss';
import { Row, Col } from 'react-bootstrap';
import Modal from 'react-skylight';
import { AudentioModal } from '../../components';

export default class Footer__legal extends Component {
    render() {
        return(
            <Row>

                <div className={style.legal}>
                    <Col xs="6">
                        <p className={style.copyright}>
                            Made with <i className="mdi mdi-heart"></i> by <button className={style.audentio}>Audentio</button>
                        </p>
                    </Col>
                    <Col xs="6" className={style.socialMedia}>
                        <ul className={style.socialMediaLinks}>
                            <li className={style.twitter}>
                                <a href="https://twitter.com/Audentio" target="_blank"><i className="mdi mdi-twitter"></i></a>
                            </li>
                            <li className={style.facebook}>
                                <a href="https://www.facebook.com/Audentio/" target="_blank"><i className="mdi mdi-facebook-box"></i></a>
                            </li>
                            <li className={style.linkedin}>
                                <a href="https://www.linkedin.com/company/audentio/" target="_blank"><i className="mdi mdi-linkedin"></i></a>
                            </li>
                        </ul>
                    </Col>
                </div>

            </Row>
        );
    }
}
