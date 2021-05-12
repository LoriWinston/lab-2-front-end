import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Character = ({ name, affiliation, image }) => (
<>
<img src={image} alt={name} />
<p>{name}</p>
<p>{affiliation}</p>
</>
);

Character.propTypes = {
    name: PropTypes.string.isRequired,
    affiliation: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

export default Character;