import React from 'react';
import { useCheckbox } from '../Wrapper';
import "./Checkbox.css"

const Checkbox: React.FC = () => {
  const { hideMnt, setHideMnt } = useCheckbox();

  return (
    <label className='label'>
      <input
        type="checkbox"
        checked={hideMnt}
        onChange={(e) => setHideMnt(e.target.checked)}
      />
      <span className='span-checkbox'>Mostrar Apenas Módulos Ativos</span>
    </label>
  );
};

export default Checkbox;
