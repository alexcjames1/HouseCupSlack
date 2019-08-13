import React, {Component} from 'react';
import { Header, Footer } from '../../components';
import {Helmet} from "react-helmet";

export default class AppWrapper extends Component {
    render() {
        const {children } = this.props;

        return(
            <div className="app">
                <Helmet
                    titleTemplate="%s | HouseCup.gg">
                    <meta name="description" content="Earn money on your own schedule
                        Expert snowplow Miners to your driveway or sidewalk in minutes. Download the app to start your order!" />
                    <title>Home</title>
                </Helmet>
                <Header />
                {children}
                <Footer />
            </div>
        );
    }
}
