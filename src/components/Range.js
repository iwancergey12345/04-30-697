import PropTypes from 'prop-types';
import { useState } from 'react';

Range.propTypes = {
  max: PropTypes.number,
  value: PropTypes.number,
  unit: PropTypes.string,
  className: PropTypes.string,
  readOnly: PropTypes.bool,
  onValue: PropTypes.func,
}

export default function Range({ max, value = 0, onValue, className, unit = '', readOnly }) {

  const [range, setRange] = useState(value);

  const percent = `${range / max * 100}%`;

  const handleRange = (e) => {
    const _range = Math.round((e.screenX - e.target.offsetLeft) / e.target.clientWidth * 100) / 100 * max;
    setRange(Math.floor(_range));
  }

  return (
    <div className="h-10">
      <div className={`relative h-2 bg-sky-300 w-full cursor-pointer ${className}`}
        style={{ backgroundImage: `linear-gradient(90deg, transparent 0%, transparent ${percent},lightgray ${percent}, lightgray)` }}
        onMouseDown={readOnly ? () => { } : handleRange}
      >
        <div className='absolute -top-2 -translate-x-1/2 pointer-events-none' style={{ left: percent }}>
          <div className=' rounded-full p-3 h-0 w-0 leading-none bg-sky-400 ' />
          <p >
            {range}{unit}
          </p>
        </div>
      </div>
    </div>
  )
}