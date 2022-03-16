/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../../components/Header';
import IntroContent from '../../../components/IntroContent/IntroContent';
import KeyPass from '../../../components/KeyPass';
import RoadMap from '../../../components/RoadMap/RoadMap';
import Timeline from '../../../components/Timeline/Timeline';
import FAQ from '../../../components/FAQ/FAQ';
import Team from '../../../components/Team/Team';
import YoutubeSubscribe from '../../../components/Subscribe/YoutubeSubscribe';

const App = () => {
  return (
      <div>
        <Header />
        <IntroContent />
        <KeyPass />
        <RoadMap />
        <Timeline />
        <FAQ />
        <Team />
        <YoutubeSubscribe />
      </div>
  )
}




export default {
  init() {
    // JavaScript to be fired on all pages
    ReactDOM.render(<App />, document.getElementById('root'))
  },
  finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired
  },
};
