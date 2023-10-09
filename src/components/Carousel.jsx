import { useState } from 'react';
import clsx from 'clsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y } from 'swiper';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import NotificationIcon from '../assets/new-image/Notification.svg';
import NewImage from '../assets/new-image/Img.svg';
import NewsLetterImg from '../assets/image svg/newsletter.svg';

const arrayList = Array(5).fill('number');
const Carousel = () => {
  const [firstModal, setFirstModal] = useState(false);
  const [secondModal, setSecondModal] = useState(false);

  const openFirstModal = () => {
    setFirstModal(true);
  };
  const openSecondModal = () => {
    setFirstModal(false);
    setSecondModal(true);
  };
  return (
    <div className="custom-container">
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        modules={[Navigation, Scrollbar, A11y]}
        slidesPerView={'auto'}
        loop={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        scrollbar={{ draggable: true }}
        className="custom-arrow"
      >
        {arrayList.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="slider-item">
              <img src={NewImage} alt="Image 1" />
              <button
                className="openFirstModal btn trigger"
                onClick={openFirstModal}
              >
                <img
                  src={NotificationIcon}
                  alt="notification"
                  className="Notification-img"
                />
              </button>
              <div className="section-text">
                <h5 className="slider-heading">Zomer w/ Colyn 10HRS</h5>
                <p className="slider-p">Thuishaven,Amsterdam</p>
                <div className="toolt">
                  <span>1 aug — 23:00</span>
                  <span className="ml-1.5">21+</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* First Modal */}
      <div className={clsx('modal firstModal', firstModal ? 'open' : '')} id="">
        <div className="modal-content">
          <div className="header">
            <span
              className="closeSecondModal close-button"
              onClick={() => setFirstModal(false)}
            >
              &times;
            </span>
            <h2>Hou me op de hoogte</h2>
          </div>
          <div className="Modal-Body">
            <p>Jouw gegevens</p>
            <input
              type="email"
              name="email"
              value="E-mail"
              placeholder="E-mail"
            />
            <p className="sturen">
              We sturen jou een e-mail zodra het event live is!
            </p>
            <button
              className="openSecondModal Stuur"
              type="submit"
              onClick={openSecondModal}
            >
              Stuur mij een e-mail
            </button>
          </div>
        </div>
      </div>
      {/* Second Modal */}
      <div
        className={clsx('modal secondModal', secondModal ? 'open' : '')}
        id=""
      >
        <div className="modal-content">
          <div className="header">
            <span
              className="closeSecondModal close-button"
              onClick={() => setSecondModal(false)}
            >
              &times;
            </span>
            <h2>Hou me op de hoogte</h2>
          </div>
          <div className="Modal-Body">
            <div className="thnaks-img flex justify-center">
              <img src={NewsLetterImg} alt="newletter" className="thanks" />
            </div>
            <p className="gelukt">
              Gelukt! We sturen jou een e-mail zodra het event live is!
            </p>
            <button
              className="openSecondModal Stuur"
              type="submit"
              onClick={() => setSecondModal(false)}
            >
              Terug naar home
            </button>
          </div>
        </div>
      </div>{' '}
    </div>
  );
};

export default Carousel;
