import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CharacterItem extends Component {
  render() {
    const { character } = this.props;

    return (
      <li>
        <img src={character.img}/>
        <p>{character.name}</p>
        <p>STATUS</p>
        <span>{character.status}</span>
        <p>SPECIES</p>
        <span>{character.species}</span>
        <p>GENDER</p>
        <span>{character.gender}</span>
        <p>ORIGIN</p>
        <span>{character.origin}</span>
        <p>LAST LOCATION</p>
        <span>{character.lastLocation}</span>
      </li>
    );
  }
}
CharacterItem.propTypes = {
  character: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    origin: PropTypes.string.isRequired,
    lastLocation: PropTypes.string.isRequired
  }).isRequired
};
