import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CharacterItem extends Component {
  render() {
    const { character } = this.props;

    return (
      <li>
        <img src={character.img} />
        
        <h3>{character.name}</h3>
      
        <p>
          STATUS
          <span>{character.status}</span>
        </p>
        <p>
          SPECIES
          <span>{character.species}</span>
        </p>
        <p>
          GENDER
          <span>{character.gender}</span>
        </p>
        <p>
          ORIGIN
          <span>{character.origin}</span>
        </p>
        <p>
          LAST LOCATION
          <span>{character.lastLocation}</span>
        </p>
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
