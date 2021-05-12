import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

const CharacterList = ({ characters }) => (
<ul aria-label="characters">
    {characters.map((character) => (
        <li key={character.id}>
            <Character
            name={character.name}
            affiliation={character.affiliation}
            image={character.image}
            />
        </li>
     ))}
</ul>
);

export default CharacterList;