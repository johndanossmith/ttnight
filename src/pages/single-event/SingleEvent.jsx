import { useState } from 'react';
import axios from 'axios';
import { Checkbox, Input, effect } from '@chakra-ui/react';

import { LogoSvg } from '../../utils/svg';
import ArrowImg from '../../assets/image svg/arrow-left.svg';
import LoodsImg from '../../assets/image svg/Loods1.svg';
import LocateImg from '../../assets/image svg/Locatie.svg';
import CalendarImg from '../../assets/image svg/Calendar-N.svg';
import GuestListImg from '../../assets/image svg/Guestlist.svg';
import UserImg from '../../assets/image svg/User.svg';
import MusicImg from '../../assets/image svg/Music.svg';
import GuestListSinImg from '../../assets/image svg/Guestlist-sin.svg';
import UserSinImg from '../../assets/image svg/User-sin.svg';
import WarningImg from '../../assets/image svg/Warning.svg';

import './SingleEvent.css';
import { API_URL } from '../../utils/config';

const SingleEvent = ({ token }) => {
  const [eFormData, setEFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    dob: '',
    gender: '',
    event: 'SUPER SOCIAL | Chicago Social Club',
    event_id: '29395',
  });
  const [dobPlaceHolder, setDobPlaceHolder] = useState('Geboortedatum');

  const onChange = e => {
    setEFormData({ ...eFormData, [e.target.name]: e.target.value });
  };

  const focusDob = () => {
    setDobPlaceHolder('dd-mm-jjjj');
  };

  const blurDob = () => {
    setDobPlaceHolder('Geboortedatum');
  };

  const changeDob = e => {
    const value = e.target.value;
    let formattedValue = value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
    let placeholder = 'dd-mm-jjjj';
    let cursorPosition = formattedValue.length;

    // Format day (dd)
    if (formattedValue.length >= 2) {
      formattedValue =
        formattedValue.slice(0, 2) + '-' + formattedValue.slice(2);
      placeholder = formattedValue + placeholder.slice(3);
      console.log('here is day', formattedValue, placeholder.slice(3));

      cursorPosition = 3;
    }

    // Format month (mm)
    if (formattedValue.length >= 5) {
      formattedValue =
        formattedValue.slice(0, 5) + '-' + formattedValue.slice(5);
      placeholder = placeholder.slice(0, 3) + '-mm-' + placeholder.slice(6);
      console.log('here is month', formattedValue, placeholder);

      cursorPosition = 6;
    }

    // Format year (jjjj)
    if (formattedValue.length > 10) {
      formattedValue = formattedValue.slice(0, 10);
      console.log('here is year', formattedValue, placeholder);
    }

    setEFormData({ ...eFormData, dob: formattedValue });
    setDobPlaceHolder(placeholder);

    // const input = document.getElementById('date');
    // input.setSelectionRange(cursorPosition, cursorPosition);
  };

  const arePropertiesFilled = obj => {
    for (let key of Object.keys(obj)) {
      if (obj[key] === '') {
        return false;
      }
    }
    return true;
  };

  const createEvent = () => {
    const propertiesFilled = arePropertiesFilled(eFormData);
    if (propertiesFilled) {
      eventCreation();
    } else {
      window.alert('Empty value exist!');
    }
  };

  async function getEventData(token) {
    const data = {
      token: token,
    };
    try {
      const result = await fetch(`${API_URL}read.php`, {
        mode: 'cors',
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        },
        body: JSON.stringify(data),
      });
      const resData = await result.json();
      console.log('result--->', resData);
    } catch (err) {
      console.log('Error===>', err);
    }
  }

  async function eventCreation() {
    console.log('eventForm Data', eFormData);
    const res = await fetch(`${API_URL}create.php`, {
      mode: 'cors',
      method: 'post',
      body: JSON.stringify({
        Firstname: eFormData.first_name,
        Lastname: eFormData.last_name,
        Email: eFormData.email,
        dob: eFormData.dob,
        gender: eFormData.gender,
        event: eFormData.event,
        event_id: eFormData.event_id,
        token: token,
      }),
    });
    const response = await res.json();
    console.log('create post request--->', response);
    if (response.status) {
      window.alert(response.msg);
    }
  }

  return (
    <div>
      <div className="hero-section-single">
        <div className="container-single">
          <div className="row">
            <div className="arrow">
              <a href="/">
                <img src={ArrowImg} alt="arrow" className="logo" />
              </a>
            </div>
            <div className="logo-Img">
              <a href="/">
                <LogoSvg />
              </a>
            </div>
          </div>
        </div>

        <div className="custom-container containers">
          <div className="event-img text-center">
            <img src={LoodsImg} alt="Loods1" />
          </div>
          <div className="event-heading">
            <h1 className="text-center text-whites">Fissa</h1>
          </div>
          <div className="event-information-box">
            <ul className="row gap">
              <li className="event date">
                <a className="text-white flex">
                  <img src={LocateImg} alt="Locatie" />
                  <span className="text-color ml-1">Oliva, Amsterdam</span>
                </a>
              </li>

              <li className="event date">
                <a className="text-white flex">
                  <img src={CalendarImg} alt="Calendar" />
                  <span className="text-color ml-1">25 aug — 23:00</span>
                </a>
              </li>

              <li className="event date">
                <a className="text-white flex">
                  <img src={GuestListImg} alt="Guestlist" />
                  <span className="text-color ml-1">Gastenlijst</span>
                </a>
              </li>
              <li className="event date">
                <a className="text-white flex">
                  <img src={UserImg} alt="User" />
                  <span className="text-color ml-1">21+</span>
                </a>
              </li>
              <li className="event date">
                <a className="text-white flex">
                  <img src={MusicImg} alt="Music" />
                  <span className="text-color ml-1">Hitjes, R&B, House</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="event-price-box first ">
            <div className="row justify-content-between">
              <div className="price-box text-white">
                <h3>€15,-</h3>
                <h6>in plaats van €25,-</h6>
              </div>

              <div className="price-button">
                <button className="button">Koop vriendenticket</button>
              </div>
            </div>
          </div>

          <div className="events-box">
            <div className="multipan-event-box vriendenticket">
              <div className="events-image">
                <img src={GuestListSinImg} alt="guest-list-sin" />
              </div>
              <div className="events-content">
                <h5 className="text-white">Gastenlijst</h5>
                <p className="text-light-gray event-content">
                  We zetten jouw naam op de gastenlijst, zodat je gratis of
                  goedkoper naar binnen kan.
                </p>
              </div>
            </div>

            <div className="multipan-event-box">
              <div className="events-image">
                <img src={UserSinImg} alt="user-sin" />
              </div>
              <div className="events-content">
                <h5 className="text-white">Minimale leeftijd 21+</h5>
              </div>
            </div>

            <div className="multipan-event-box">
              <div className="events-image">
                <img src={WarningImg} alt="warning" />
              </div>
              <div className="events-content">
                <h5 className="text-white">
                  Ticket refund- en resell niet mogelijk
                </h5>
              </div>
            </div>
          </div>
        </div>

        <section className="event-form-sec">
          <div className="custom-container containers">
            <div className="event-information-form">
              <h3 className="text-white form-heading">Jouw gegevens</h3>
              <form>
                <div className="first-name event-sec-forms">
                  <div className="col-md-6">
                    <Input
                      type="text"
                      placeholder="Voornaam"
                      name="first_name"
                      value={eFormData.first_name}
                      className="sin"
                      onChange={onChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <Input
                      type="text"
                      placeholder="Achternaam"
                      name="last_name"
                      value={eFormData.last_name}
                      className="sin"
                      onChange={onChange}
                    />
                  </div>
                </div>
                <div className="email event-sec-form">
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    value={eFormData.email}
                    placeholder="E-mail"
                    className="sin"
                    onChange={onChange}
                  />
                </div>
                <div className="date event-sec-form">
                  <Input
                    type="text"
                    maxLength="10"
                    id="date"
                    name="dob"
                    value={eFormData.dob}
                    inputMode="numeric"
                    className="sin"
                    placeholder={dobPlaceHolder}
                    onFocus={focusDob}
                    onBlur={blurDob}
                    onChange={changeDob}
                  />
                  {/* <span>jaar</span> */}
                </div>
                <div className="geslacht event-sec-form sin">
                  <select
                    id="geslacht"
                    className="cx-ui-select"
                    name="gender"
                    size="1"
                    data-filter="false"
                    data-placeholder=""
                    onChange={onChange}
                  >
                    <option value="gender">Geslacht</option>
                    <option value="Man">man</option>
                    <option value="Vrouw">Vrouw</option>
                    <option value="Onzijdig">Onzijdig</option>
                  </select>
                </div>

                <div className="hidden-field ">
                  <Input
                    type="hidden"
                    name="token"
                    id="token"
                    placeholder="token"
                  />
                  <Input
                    type="hidden"
                    name="event_id"
                    id="event_id"
                    placeholder="event_id"
                  />
                  <Input
                    type="hidden"
                    name="event"
                    id="event"
                    placeholder="event"
                  />
                </div>
                <div className="checkbox">
                  <div className="check">
                    <Input type="checkbox" name="" id="" />{' '}
                  </div>
                  <div className="texts">
                    <label className="text-white">
                      Ik ga akkoord met de <a href="#">algemene voorwaarden</a>{' '}
                      <span>van 22NIGHT</span>
                    </label>
                  </div>{' '}
                </div>

                <div className="event-price-box destop">
                  <div className="row justify-content-between">
                    <div className="price-box text-white">
                      <h3>€15,-</h3>
                      <h6>in plaats van €25,-</h6>
                    </div>

                    <div className="price-button">
                      <button
                        className="button openPopupButtons"
                        type="button"
                        onClick={createEvent}
                      >
                        Koop vriendenticket
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div id="popups" className="popups">
            <div className="popup-contents">
              <img
                src="assets/image svg/Illustration.svg"
                className="Illustration"
              />
              <p className="Hier">Hier is je community ticket</p>
              <p className="Je">
                Je ontvangt een e-mail van de organisatie zodra de betaling is
                afgerond.
              </p>
              <a href="index.html" className="Terug">
                Terug naar home
              </a>
            </div>
          </div>
        </section>
        <div className="event-price-box mobile">
          <div className="row justify-content-between">
            <div className="price-box text-white">
              <h3>€15,-</h3>
              <h6>in plaats van €25,-</h6>
            </div>

            <div className="price-button">
              <button className="button openPopupButtons" onClick={createEvent}>
                Koop vriendenticket
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleEvent;
