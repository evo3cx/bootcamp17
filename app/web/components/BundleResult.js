import React, { Component } from 'react'
import Rate from 'material-ui/svg-icons/action/grade';
import GantiAtasan from './GantiAtasan'
import GantiBawahan from './GantiBawahan'

const iconStyles = {
  height: 16,
  width: 16
};

const rateStyle = {
  width: '85%'
};

class BundleResult extends Component {
  constructor(props){
    super(props)
    this.state = {
      gantiStep:0,
    }
  }

  onClick(value){
    this.setState({gantiStep: value})
  }

  onReset(){
    this.setState({gantiStep: 0})
  }

  render(){
    return (
    <div>
      { 0 === this.state.gantiStep &&

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
            <button onClick={()=> this.onClick(1)} className="button button--gray">Ganti</button>
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
            <button onClick={()=> this.onClick(2)}  className="button button--gray">Ganti</button>
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
      }

      { this.state.gantiStep  == 1 &&
        <GantiAtasan />
      }

      { this.state.gantiStep  == 2 &&
        <GantiBawahan/>
      }
    </div>
    )
  }
}


export default BundleResult
