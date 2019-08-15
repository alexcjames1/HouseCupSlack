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
                        <i onClick={this.closeModalHandler} class="mdi mdi-close"></i>
                        {this.props.children}
                    </div>

                </div>
                <div onClick={this.openModalHandler}>{this.props.trigger}</div>
            </Fragment>
        );
    }
}
