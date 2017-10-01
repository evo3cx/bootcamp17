import React, { Component } from 'react';
import Rate from 'material-ui/svg-icons/action/grade';

import BundleResult from './BundleResult'

const iconStyles = {
  height: 16,
  width: 16
};

const rateStyle = {
  width: '85%'
};

export default class ResultSearch extends Component {
  render() {
    return (
      <div className="chat-container">
        <div className="chat">
          <div className="greeting">
            Hi,
            <span className="name">Miranda</span>
            ini rekomendasi special dari
            <span className="bot-name">Buka</span>
            buat kamu.
          </div>
          <div className="selected-attribute">
            <div className="attribute attribute--purple">250.000</div>
            <div className="attribute attribute--blue">Acara Formal</div>
            <div className="attribute attribute--red">Ukuran Baju - M</div>
            <div className="attribute attribute--yellow">Ukuran Celana/Rok - 30</div>
          </div>

          <BundleResult />
        </div>
      </div>
    );
  }
}
