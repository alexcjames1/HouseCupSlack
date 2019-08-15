import React, { Component } from 'react';
import {Heading, Header, AppWrapper, Dashboard, HouseCupHero, HouseCupFeatures, TeamsOrIndividuals, ArticleCards, FinalThingsToClick, JoinTogether, Modal, Footer} from '../../components';
import {Helmet} from "react-helmet";

export default class Home extends Component {
    render() {
        return (
          <AppWrapper>
              <Helmet>
                <title>Join Together</title>
              </Helmet>
            <HouseCupHero />
            <JoinTogether />
            <HouseCupFeatures />
            <TeamsOrIndividuals />
            <ArticleCards />
            <FinalThingsToClick />
          </AppWrapper>
        );
    }
}
