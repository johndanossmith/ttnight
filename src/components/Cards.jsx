import { InfoSvg } from '../utils/svg';
import dayjs from 'dayjs';
import 'dayjs/locale/de';

const Cards = ({ evenData }) => {
  console.log('this is eventData for cards', evenData);
  // const timestamp = 1687625940; // Replace with your timestamp value

  // // Create a new Date object using the timestamp
  // const date = new Date(timestamp);

  // // Get the date components
  // const year = date.getFullYear();
  // const month = date.getMonth() + 1; // Add 1 to get the actual month (January is 0)
  // const day = date.getDate();
  // const days = dayjs(date).get('day');

  // // Get the time components
  // const hours = date.getHours();
  // const minutes = date.getMinutes();
  // const seconds = date.getSeconds();

  // // Format the date and time as per your requirements
  // const formattedDate = `${year}-${month}-${day}`;
  // const formattedTime = `${hours}:${minutes}:${seconds}`;

  // // Print the date and time
  // console.log('Date:', formattedDate);
  // console.log('Time:', formattedTime);
  // console.log('Day:', days);

  return (
    <div className="custom-container">
      <div className="tab">
        <div className="tab-header">
          <div className="row justify-content-between text-white">
            <div className="days">
              <h3 className="donderdag">Vandaag</h3>
            </div>

            <div className="date">
              <h5 className="date">2 augustus</h5>
            </div>
          </div>
        </div>
        <div className="tab-body">
          <div className="event-box">
            <div className="row">
              <div className="event-content text-white">
                <a href="/single-event">
                  <h5 className="Charlee">Fissa 16:00</h5>
                  <h6 className="text-light-gray">Oliva, Amsterdam</h6>
                  <div className="Sould Out">
                    <span>Sold out</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tab">
        <div className="tab-header">
          <div className="row justify-content-between text-white">
            <div className="days">
              <h3 className="donderdag">Vrijdag</h3>
            </div>

            <div className="date">
              <h5 className="date">3 augustus</h5>
            </div>
          </div>
        </div>
        <div className="tab-body">
          <div className="event-box">
            <div className="row double">
              <div className="event-content text-white doubles">
                <a href="/single-event">
                  <h5 className="Charlee">Happy feelings 16:00</h5>
                  <h6 className="text-light-gray">Thuishaven, Amsterdam</h6>
                  <div className="Sould Out">
                    <span>Sold out</span>
                  </div>
                </a>
              </div>

              <div className="event-content text-white doubles">
                <a href="/single-event">
                  <h5 className="Charlee">Happy feelings 16:00</h5>
                  <h6 className="text-light-gray">Thuishaven, Amsterdam</h6>
                  <div className="tooltipss">
                    <span>16:00</span>
                    <span>18+</span>
                    <div className="tool">
                      <span className="gen">Gastenlijst</span>{' '}
                      <span className="tooltips">
                        {' '}
                        <InfoSvg />
                        <span className="tooltiptext tooltipText wa Vriendenticket">
                          We zetten jouw naam op de gastenlijst, zodat je gratis
                          of goedkoper naar binnen kan.
                        </span>
                      </span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="event-content evebt-cibtrikk text-white doubles">
                <a href="/single-event">
                  <h5 className="Charlee">Happy feelings 16:00</h5>
                  <h6 className="text-light-gray">Thuishaven, Amsterdam</h6>
                  <div className="tooltipss">
                    <span>16:00</span>
                    <span>18+</span>
                    <div className="tool">
                      <span className="gen">Gastenlijst</span>
                      <span className="tooltips">
                        {' '}
                        <InfoSvg />
                        <span className="tooltiptext tooltipText wa Vriendenticket">
                          We zetten jouw naam op de gastenlijst, zodat je gratis
                          of goedkoper naar binnen kan.
                        </span>
                      </span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="event-content text-white doubles">
                <a href="/single-event">
                  <h5 className="Charlee">Happy feelings 16:00</h5>
                  <h6 className="text-light-gray">Thuishaven, Amsterdam</h6>
                  <div className="tooltipss">
                    <span>16:00</span>
                    <span>18+</span>
                    <div className="tool">
                      <span className="gen">Vriendenticket</span>
                      <span className="tooltips">
                        {' '}
                        <InfoSvg />
                        <span className="tooltiptext tooltipText wa Vriendenticket">
                          We zetten jouw naam op de gastenlijst, zodat je gratis
                          of goedkoper naar binnen kan.
                        </span>
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tab">
        <div className="tab-header">
          <div className="row justify-content-between text-white">
            <div className="days">
              <h3 className="donderdag">Zaterdag</h3>
            </div>

            <div className="date">
              <h5 className="date">4 augustus</h5>
            </div>
          </div>
        </div>
        <div className="tab-body">
          <div className="event-box">
            <div className="row double">
              <div className="event-content text-white doubles">
                <a href="/single-event">
                  <h5 className="Charlee">Charlee 23:00</h5>
                  <h6 className="text-light-gray">Lovelee, Amsterdam</h6>
                  <div className="tooltipss">
                    <span>23:00</span>
                    <span>21+</span>
                    <div className="tool">
                      <span className="gen">Vriendenticket</span>
                      <span className="tooltips">
                        {' '}
                        <InfoSvg />
                        <span className="tooltiptext tooltipText wa Vriendenticket">
                          We zetten jouw naam op de gastenlijst, zodat je gratis
                          of goedkoper naar binnen kan.
                        </span>
                      </span>
                    </div>
                  </div>
                </a>
              </div>

              <div className="event-content text-white doubles">
                <a href="/single-event">
                  <h5 className="Charlee">Charlee 23:00</h5>
                  <h6 className="text-light-gray">Lovelee, Amsterdam</h6>
                  <div className="tooltipss">
                    <span>23:00</span>
                    <span>21+</span>
                    <div className="tool">
                      <span className="gen">Gastenlijst</span>
                      <span className="tooltips">
                        {' '}
                        <InfoSvg />
                        <span className="tooltiptext tooltipText wa Vriendenticket">
                          We zetten jouw naam op de gastenlijst, zodat je gratis
                          of goedkoper naar binnen kan.
                        </span>
                      </span>
                    </div>
                  </div>
                </a>
              </div>

              <div className="event-content text-white doubles">
                <a href="/single-event">
                  <h5 className="Charlee">Charlee 23:00</h5>
                  <h6 className="text-light-gray">Lovelee, Amsterdam</h6>
                  <div className="Sould Out">
                    <span>Sold out</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tab">
        <div className="tab-header">
          <div className="row justify-content-between text-white">
            <div className="days">
              <h3 className="donderdag">Zondag</h3>
            </div>

            <div className="date">
              <h5 className="date">5 augustus</h5>
            </div>
          </div>
        </div>
        <div className="tab-body">
          <div className="event-box">
            <div className="row">
              <div className="event-content text-white">
                <a href="/single-event">
                  <h5 className="Charlee">Charlee 23:00</h5>
                  <h6 className="text-light-gray">Lovelee, Amsterdam</h6>
                  <div className="tooltipss">
                    <span>23:00</span>
                    <span>21+</span>
                    <div className="tool">
                      <span className="gen">Gastenlijst</span>
                      <span className="tooltips">
                        {' '}
                        <InfoSvg />
                        <span className="tooltiptext tooltipText wa Vriendenticket">
                          We zetten jouw naam op de gastenlijst, zodat je gratis
                          of goedkoper naar binnen kan.
                        </span>
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-divider"></div>
    </div>
  );
};

export default Cards;
