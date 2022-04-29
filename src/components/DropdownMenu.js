import PropTypes from 'prop-types';
import { useState } from 'react';

DropdownMenu.propTypes = {
  summary: PropTypes.node,
  children: PropTypes.node,
  className: PropTypes.string,
}

export default function DropdownMenu({ summary, children, className, }) {
  const [toggle, setToggle] = useState(false);
  return (
    <div className={`relative `}>
      <button className={`flex items-center gap-3 justify-between ${className}`} onClick={() => setToggle(!toggle)}>
        {summary}
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m4 9l8 8l8-8" /></svg>
      </button>
      {toggle &&
        <div className='absolute top-full right-0 z-50' onClick={() => setToggle(!toggle)}>
          {children}
        </div>
      }
    </div>
  )
}