import { Icon } from "@iconify/react";
import { useEffect, useState } from "react"


export default function ScrollToTopButton() {
  const [show, setShow] = useState();
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 300 ? setShow(true) : setShow(false);
    })
  })
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  return (
    show && <span className="btn border-none bg-stone-500/40 hover:bg-stone-500/50 btn-circle fixed bottom-14 hover:bottom-[3.75rem] transition-all right-10"
      onClick={handleClick}
    >
      <Icon icon={'oi:chevron-top'} width={24} height={24}/>
    </span>
  )
}