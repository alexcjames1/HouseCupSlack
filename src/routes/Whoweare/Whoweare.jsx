import React, { Component } from 'react';
import {Heading, Header, AppWrapper, Dashboard, HouseCupHero, HouseCupFeatures, TeamsOrIndividuals, FinalThingsToClick, JoinTogether, Footer} from '../../components';
import {Helmet} from "react-helmet";

export default class Whoweare extends Component {
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
            <FinalThingsToClick />
          </AppWrapper>
        );
    }
}
