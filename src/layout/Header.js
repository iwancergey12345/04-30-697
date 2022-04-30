import { useState } from 'react';
import { Link } from 'react-router-dom';
import DropdownMenu from '../components/DropdownMenu';
import ModeButton from '../components/ModeButton';
import useMode from '../hooks/useMode';
import logo from '../logo.svg';
import { menuConfig } from './NavConfig';

const LANGUAGES = [
  { name: 'EN', value: 'enEN' },
  { name: 'RU', value: 'RUru' },
]

export default function Header() {
  const [language, setLanguage] = useState(LANGUAGES[0]);

  const handleMintFruit=()=>{
    console.log('handle')
  }

  return (
    <div className=" flex items-stretch justify-between bg-sky-400">
      <div className=" flex items-center justify-center w-28 h-28">
        <img src={logo} height="80px" width="auto" alt="logo" />
      </div>
      <div className="grow hidden lg:flex items-center justify-center gap-16 rounded-md bg-indigo-400 dark:bg-transparent font-bold p-5">
        {menuConfig.map((item, index) =>
          <Link className='' to={item.link} key={index}>
            {item.name}
          </Link>
        )}
      </div>
      <div className='flex items-center justify-around  w-80 px:3 lg:px-10 bg-orange-300 dark:bg-transparent text-white font-bold'>
        <DropdownMenu
          className='font-bold'
          summary={language.name}>
          <div className='rounded-md  bg-sky-300 shadow-xl py-3 px-1 w-20'>
            {LANGUAGES.map((item, index) =>
              <button className='rounded-lg px-3 py-1 hover:bg-sky-400 w-full' key={index} onClick={() => setLanguage(item)}>
                {item.name}
              </button>
            )}
          </div>
        </DropdownMenu>
        <button className='rounded-full border-[3px] border-white px-5 font-bold py-2 hover:bg-gray-500/30'
        onClick={handleMintFruit}
        >
          Mint Fruit
        </button>
       <ModeButton/>
      </div>
    </div>
  )
}