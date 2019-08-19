import React, {Component, Fragment} from 'react';
import classy from '../../utils/classy';
import style from './Modal.module.scss';

export default class Modal extends Component {

    constructor() {
    super();

        this.state = {
            isShowing: false
        }
    }

    openModalHandler = () => {
        this.setState({
            isShowing: true
        });
    }

    closeModalHandler = () => {
        this.setState({
            isShowing: false
        });
    }

    render() {
        return(
            <Fragment>
                <div className={classy(style.modal, this.state.isShowing == true && style.isOpen )}>
                    <div onClick={this.closeModalHandler} className={style.modalCloser}></div>
                    <div className={style.modalContent}>
                        <div className={style.closeButton}>
                            <i onClick={this.closeModalHandler} className="mdi mdi-close"></i>
                        </div>
                        {this.props.children}
                    </div>

                </div>
                <span onClick={this.openModalHandler}>{this.props.trigger}</span>
            </Fragment>
        );
    }
}
