import React, { Component } from 'react';
import Rate from 'material-ui/svg-icons/action/grade';

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
            <div className="attribute attribute--purple">170.000</div>
            <div className="attribute attribute--blue">Kerja</div>
            <div className="attribute attribute--red">Atasan - M</div>
            <div className="attribute attribute--yellow">Bawahan - 28</div>
          </div>
          <div className="bundle">
            <div className="product">
              <div className="product-image">
                <img alt="Baju Kemeja Wanita" height="194" src="https://s3.bukalapak.com/img/366961769/s-194-194/dad3ff760544bd454b208bdcec54696b.jpeg" width="194"/>
              </div>
              <div className="product-description">
                <div className="product-name">Baju Kemeja Wanita</div>
                <div className="product-price"><span>Rp59.000</span></div>
                <div className="product-rating">
                  <div className="product-rating__bg">
                    <Rate
                      color="#ddd"
                      style={iconStyles}
                    />
                    <Rate
                      color="#ddd"
                      style={iconStyles}
                    />
                    <Rate
                      color="#ddd"
                      style={iconStyles}
                    />
                    <Rate
                      color="#ddd"
                      style={iconStyles}
                    />
                    <Rate
                      color="#ddd"
                      style={iconStyles}
                    />
                  </div>
                  <div className="product-rating__fg" style={rateStyle}>
                    <Rate
                      color="#ffc53e"
                      style={iconStyles}
                    />
                    <Rate
                      color="#ffc53e"
                      style={iconStyles}
                    />
                    <Rate
                      color="#ffc53e"
                      style={iconStyles}
                    />
                    <Rate
                      color="#ffc53e"
                      style={iconStyles}
                    />
                    <Rate
                      color="#ffc53e"
                      style={iconStyles}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bundle-icon">+</div>
            <div className="product">
              <div className="product-image">
                <img alt="Baju Kemeja Wanita" height="194" src="https://s3.bukalapak.com/img/366961769/s-194-194/dad3ff760544bd454b208bdcec54696b.jpeg" width="194"/>
              </div>
              <div className="product-description">
                <div className="product-name">Baju Kemeja Wanita</div>
                <div className="product-price"><span>Rp59.000</span></div>
                <div className="product-rating">
                  <div className="product-rating__bg">
                    <Rate
                      color="#ddd"
                      style={iconStyles}
                    />
                    <Rate
                      color="#ddd"
                      style={iconStyles}
                    />
                    <Rate
                      color="#ddd"
                      style={iconStyles}
                    />
                    <Rate
                      color="#ddd"
                      style={iconStyles}
                    />
                    <Rate
                      color="#ddd"
                      style={iconStyles}
                    />
                  </div>
                  <div className="product-rating__fg" style={rateStyle}>
                    <Rate
                      color="#ffc53e"
                      style={iconStyles}
                    />
                    <Rate
                      color="#ffc53e"
                      style={iconStyles}
                    />
                    <Rate
                      color="#ffc53e"
                      style={iconStyles}
                    />
                    <Rate
                      color="#ffc53e"
                      style={iconStyles}
                    />
                    <Rate
                      color="#ffc53e"
                      style={iconStyles}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bundle-icon">=</div>
            <div className="result">
              <div className="total-price">Rp118.000</div>
              <div className="action-button">
                <button className="button button--gray">Ganti Style</button>
                <button className="button button--red">Beli</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
