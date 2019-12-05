import React from 'react';
//import TechList from './TechList';
//yarn add prop-types
import PropTypes from 'prop-types';

function TechItem( {tech, onDelete} ) {
    return (
        <li>
        {tech}
        <button onClick={onDelete} type="button">Remover</button>
        </li>
    );
}

TechItem.defaultProps = {
    tech: 'Oculto',
};

TechItem.propTypes = {
    tech: PropTypes.string,
    onDelete: PropTypes.func.isRequired,
};

export default TechItem;