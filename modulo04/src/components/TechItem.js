import React from 'react';

function TechItem({ tech, onDelete }) {
  return(
    <li className="e-block-list__item">
    {tech}
      <button 
        onClick={onDelete} 
        type="button">Remover
      </button>
    </li>
  );
}

export default TechItem;
