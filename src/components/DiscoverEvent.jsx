import DatumIcon from '../assets/image svg/Calendar-N.svg';
import CategoryIcon from '../assets/image svg/party.svg';
import GenreIcon from '../assets/image svg/Music.svg';
import UserIcon from '../assets/image svg/User.svg';

import ArrowDownIcon from '../assets/image svg/chevron down.svg';
import {
  Button,
  Checkbox,
  Menu,
  MenuButton,
  MenuItem,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from '@chakra-ui/react';
import { useState } from 'react';

const discoveryMenus = {
  datum: [
    'Vandaag',
    'Morgen',
    'Deze week',
    'Volgende week',
    'Deze maand',
    'Alle datums',
  ],
  categorie: ['Dag event', 'Nacht event', 'Festival', 'Alle events'],
  genre: [
    'Amapiano',
    'Classics',
    'Hip-hop',
    'Hitjes',
    'House',
    'disco',
    'techno',
  ],
  leeftijd: ['18+', '21+', '23+', 'Alle leeftijden'],
};

const DiscoverEvent = () => {
  const [discovery, setDiscovery] = useState({
    datum: 'Datum',
    categorie: 'Categorie',
    genre: 'Genre',
    leeftijd: 'Leeftijd',
  });
  const [genreList, setGenreList] = useState(discoveryMenus.genre);

  const genreChange = e => {
    console.log('genreChange', e);
  };
  return (
    <div className="custom-container">
      <h2 className="text-white ontdek">Ontdek evenementen</h2>
      <div className="wrapper">
        <div className="external-dropdown">
          <div className="outer">
            <div className="side">
              <Menu>
                <MenuButton
                  as={Button}
                  className="btn btn-dropdown dropdown-toggle"
                  leftIcon={<img src={DatumIcon} alt="datum" />}
                  rightIcon={<img src={ArrowDownIcon} alt="arrow down" />}
                >
                  <span className="selectedOption" id="button1Text">
                    {discovery.datum}
                  </span>
                </MenuButton>
                <MenuList className="menu-list" pos="absolute" top="8" left="0">
                  <MenuOptionGroup
                    className=""
                    defaultValue="Vandaag"
                    type="radio"
                  >
                    {discoveryMenus.datum.map((item, index) => (
                      <MenuItemOption
                        key={index}
                        onClick={() =>
                          setDiscovery({ ...discovery, datum: item })
                        }
                        value={item}
                      >
                        {item}
                      </MenuItemOption>
                    ))}
                  </MenuOptionGroup>
                </MenuList>
              </Menu>
            </div>
            <div className="side">
              <Menu>
                <MenuButton
                  as={Button}
                  className="btn btn-dropdown dropdown-toggle"
                  leftIcon={<img src={CategoryIcon} alt="datum" />}
                  rightIcon={<img src={ArrowDownIcon} alt="arrow down" />}
                >
                  <span className="selectedOption" id="button1Text">
                    {discovery.categorie}
                  </span>
                </MenuButton>
                <MenuList className="menu-list" pos="absolute" top="8" left="0">
                  <MenuOptionGroup
                    className=""
                    defaultValue="Dag event"
                    type="radio"
                  >
                    {discoveryMenus.categorie.map((item, index) => (
                      <MenuItemOption
                        key={index}
                        onClick={() =>
                          setDiscovery({ ...discovery, categorie: item })
                        }
                        value={item}
                      >
                        {item}
                      </MenuItemOption>
                    ))}
                  </MenuOptionGroup>
                </MenuList>
              </Menu>
            </div>
            <div className="side">
              <Menu closeOnSelect={false}>
                <MenuButton
                  as={Button}
                  className="btn btn-dropdown dropdown-toggle"
                  leftIcon={<img src={GenreIcon} alt="datum" />}
                  rightIcon={<img src={ArrowDownIcon} alt="arrow down" />}
                >
                  <span className="selectedOption" id="button1Text">
                    {discovery.genre}
                  </span>
                </MenuButton>
                <MenuList
                  className="menu-list menu-checkbox-list"
                  pos="absolute"
                  top="8"
                  left="0"
                >
                  <MenuOptionGroup
                    className=""
                    type="checkbox"
                    defaultValue={genreList}
                    aria-multiselectable
                    onChange={genreChange}
                  >
                    {genreList.map((item, index) => (
                      <MenuItemOption key={index} value={item}>
                        {item}
                      </MenuItemOption>
                    ))}
                  </MenuOptionGroup>
                </MenuList>
              </Menu>
            </div>
            <div className="side">
              <Menu>
                <MenuButton
                  as={Button}
                  className="btn btn-dropdown dropdown-toggle"
                  leftIcon={<img src={UserIcon} alt="datum" />}
                  rightIcon={<img src={ArrowDownIcon} alt="arrow down" />}
                >
                  <span className="selectedOption" id="button1Text">
                    {discovery.leeftijd}
                  </span>
                </MenuButton>
                <MenuList className="menu-list" pos="absolute" top="8" left="0">
                  <MenuOptionGroup className="" defaultValue="18+" type="radio">
                    {discoveryMenus.leeftijd.map((item, index) => (
                      <MenuItemOption
                        key={index}
                        onClick={() =>
                          setDiscovery({ ...discovery, leeftijd: item })
                        }
                        value={item}
                      >
                        {item}
                      </MenuItemOption>
                    ))}
                  </MenuOptionGroup>
                </MenuList>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverEvent;
