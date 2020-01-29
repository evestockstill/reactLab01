import React, { Component } from 'react';
import CharacterItem from './CharacterItem';
import styles from './Character.css';
import Chance from 'chance';
const chance = new Chance();

export default class Characters extends Component {
  render() {
    const characterData = [...Array(8)].map(() => {
      return {
        img: 'http://placegoat.com/300/300',
        name: chance.name(),
        status: chance.word(),
        species: chance.animal(),
        gender: chance.gender(),
        origin: chance.country(),
        lastLocation: chance.city()
      };
    });
    console.log(characterData);
    const CharacterItems = characterData.map((char, i) => {
      return <CharacterItem key={i} character={char} />;
    });

    return (
      <div className={styles.cards}>
        <ul>{CharacterItems}</ul>
      </div>
    );
  }
}
