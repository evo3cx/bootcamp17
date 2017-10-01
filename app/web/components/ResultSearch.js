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
            <div className="product-wrapper">
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
              <button className="button button--gray">Ganti</button>
            </div>
            <div className="bundle-icon">+</div>
            <div className="product-wrapper">
              <div className="product">
                <div className="product-image">
                  <img alt="Baju Kemeja Wanita" height="194" src="https://s4.bukalapak.com/img/457514759/w-300/Celana_Kerja_Wanita___Celana_Kantor___Celana_Wanita___Celana.jpg" width="194"/>
                </div>
                <div className="product-description">
                  <div className="product-name">Celana Kerja Wanita</div>
                  <div className="product-price"><span>Rp79.000</span></div>
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
              <button className="button button--gray">Ganti</button>
            </div>
            <div className="bundle-icon">=</div>
            <div className="result">
              <div className="total-price">Rp138.000</div>
              <div className="action-button">
                <button className="button button--gray">Ganti Style</button>
                <button className="button button--red">Beli</button>
              </div>
            </div>
          </div>
          <div className="search-atasan">
            <div className="bundle">
              <div className="product-wrapper empty">
                <div className="product">
                </div>
                <button className="button button--gray">Ganti</button>
              </div>
              <div className="bundle-icon">+</div>
              <div className="product-wrapper">
              <div className="product">
                <div className="product-image">
                  <img alt="Baju Kemeja Wanita" height="194" src="https://s4.bukalapak.com/img/457514759/w-300/Celana_Kerja_Wanita___Celana_Kantor___Celana_Wanita___Celana.jpg" width="194"/>
                </div>
                <div className="product-description">
                  <div className="product-name">Celana Kerja Wanita</div>
                  <div className="product-price"><span>Rp79.000</span></div>
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
              <button className="button button--gray">Ganti</button>
            </div>
              <div className="bundle-icon">=</div>
              <div className="result">
                <div className="total-price">Rp79.000</div>
                <div className="action-button">
                  <button className="button button--gray">Ganti Style</button>
                  <button className="button button--red">Beli</button>
                </div>
              </div>
            </div>
            <ul className="product-list">
              <li>
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
              </li>
              <li>
                <div className="product">
                  <div className="product-image">
                    <img alt="Baju Kemeja Wanita" height="194" src="https://s4.bukalapak.com/img/4860084201/m-1000-1000/1486116818876_scaled.jpg.webp" width="194"/>
                  </div>
                  <div className="product-description">
                    <div className="product-name">Kemeja Wanita Terbaru</div>
                    <div className="product-price"><span>Rp79.000</span></div>
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
              </li>
              <li>
                <div className="product">
                  <div className="product-image">
                    <img alt="Baju Kemeja Wanita" height="194" src="https://s3.bukalapak.com/img/8818049401/m-1000-1000/IMG_20170208_222045_scaled.jpg.webp" width="194"/>
                  </div>
                  <div className="product-description">
                    <div className="product-name">Blouse Tunik Kemeja Wanita</div>
                    <div className="product-price"><span>Rp69.000</span></div>
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
              </li>
            </ul>
          </div>
          <div className="search-bawahan">
            <div className="bundle">
              <div className="product-wrapper">
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
                <button className="button button--gray">Ganti</button>
              </div>
              <div className="bundle-icon">+</div>
              <div className="product-wrapper empty">
                <div className="product">
                </div>
                <button className="button button--gray">Ganti</button>
              </div>
              <div className="bundle-icon">=</div>
              <div className="result">
                <div className="total-price">Rp59.000</div>
                <div className="action-button">
                  <button className="button button--gray">Ganti Style</button>
                  <button className="button button--red">Beli</button>
                </div>
              </div>
            </div>
            <ul className="product-list">
              <li>
                <div className="product">
                  <div className="product-image">
                    <img alt="Baju Kemeja Wanita" height="194" src="https://s4.bukalapak.com/img/457514759/w-300/Celana_Kerja_Wanita___Celana_Kantor___Celana_Wanita___Celana.jpg" width="194"/>
                  </div>
                  <div className="product-description">
                    <div className="product-name">Celana Kerja Wanita</div>
                    <div className="product-price"><span>Rp79.000</span></div>
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
              </li>
              <li>
                <div className="product">
                  <div className="product-image">
                    <img alt="Baju Kemeja Wanita" height="194" src="https://s2.bukalapak.com/img/2584136261/w-300/Zetha_Celana_Kerja_Kantor_Wanita_Original_Bahan_Katun_Abu_As.JPG" width="194"/>
                  </div>
                  <div className="product-description">
                    <div className="product-name">Celana Kantor Original</div>
                    <div className="product-price"><span>Rp110.000</span></div>
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
              </li>
              <li>
                <div className="product">
                  <div className="product-image">
                    <img alt="Baju Kemeja Wanita" height="194" src="https://s2.bukalapak.com/img/7527545861/w-300/Celana_Panjang_Wanita_Kerja_Carmelia_Size_S_M_dan_L_XL.jpg" width="194"/>
                  </div>
                  <div className="product-description">
                    <div className="product-name">Celana Panjang Carmelia</div>
                    <div className="product-price"><span>Rp120.000</span></div>
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
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
