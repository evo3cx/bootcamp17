import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Options from '../components/Options';

var arrayStyle = [{key: 0, label: 'Kantor', checked: true}, {key: 1, label: 'Pesta', checked: false}, {key: 2, label: 'Hijab', checked: false}];
var arrayTopSize = [{key: 0, label: 'S', checked: true}, {key: 1, label: 'M', checked: false}, {key: 2, label: 'L', checked: false}, {key: 3, label: 'XL', checked: false}];
var arrayBottomSize = [{key: 0, label: '27', checked: true}, {key: 1, label: '28', checked: false}, {key: 2, label: '29', checked: false}, {key: 3, label: '30', checked: false}];
var arrayColor = [{key: 0, label: 'Bebas', checked: true}, {key: 1, label: 'Hitam', checked: false}, {key: 2, label: 'Putih', checked: false}, {key: 3, label: 'Merah', checked: false}];

export default class Body extends Component {
  render() {
    return (
      <div className="chat-container">
        <div className="chat">
          <div className="greeting">
            Hi,
            <span className="name">Miranda</span>
          </div>
          <div className="intro">
            Lagi bingung cari pakaian? Yuk
            <span className="bot-name">Buka</span>
            bantuin cari. Tapi jawab dulu ya pertanyaan-pertanyaan aku.
          </div>
          <div className="question-wrapper">
            <div className="question">Budget kamu berapa?</div>
            <div className="answer">
              <TextField
                hintText="Rp"
                type="Number"
              />
            </div>
          </div>
          <div className="question-wrapper">
            <div className="question">Style apa yang kamu cari? Pilih 1 aja ya</div>
            <div className="answer">
              <Options
                data={arrayStyle}
              />
            </div>
          </div>
          <div className="question-wrapper">
            <div className="question">Ukuran dress kamu apa?</div>
            <div className="answer">
              <Options
                data={arrayTopSize}
              />
            </div>
          </div>
          <div className="question-wrapper">
            <div className="question">Mau warna apa?</div>
            <div className="answer">
              <Options
                data={arrayColor}
              />
            </div>
          </div>
          <div className="question-wrapper">
            <div className="question">Ukuran celana kamu apa?</div>
            <div className="answer">
              <Options
                data={arrayBottomSize}
              />
            </div>
          </div>
         <div className="question-wrapper">
            <div className="question">Mau warna apa?</div>
            <div className="answer">
              <Options
                data={arrayColor}
              />
            </div>
          </div>
          <div className="form-submit">
          <input type="submit" className="submit-button" value="Cari"/>
          </div>
        </div>
      </div>
    );
  }
}
