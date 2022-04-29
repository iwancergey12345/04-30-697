import PropTypes from 'prop-types';

Range.propTypes = {
  max: PropTypes.number,
  value: PropTypes.number,
  unit: PropTypes.string,
  className: PropTypes.string,
}

export default function Range({ max, value, className, unit = '' }) {
  return (
    <div className="h-10">
      <div className={`relative h-2 bg-gray-200 w-full ${className}`}>
        <div className='absolute -top-2 -translate-x-3' style={{ left: `${value / max * 100}%` }}>
          <div className=' rounded-full p-3 h-0 w-0 leading-none bg-sky-400  ' />
          <p >
            {value}{unit}
          </p>
        </div>
      </div>
    </div>
  )
}