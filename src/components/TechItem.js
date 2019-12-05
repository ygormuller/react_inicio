import React from 'react';
import TechList from './TechList';
//yarn add prop-types

function TechItem( {tech, onDelete} ) {
    return (
        <li key={tech}>
        {tech}
        <button onClick={(onDelete) => this.handleDelete(tech)} type="button">Remover</button>
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