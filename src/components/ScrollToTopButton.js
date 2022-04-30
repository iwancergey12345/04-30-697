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
    show && <span className="btn border-none bg-stone-500/50 hover:bg-stone-500/70 btn-circle fixed bottom-14 hover:bottom-[3.75rem] transition-all right-10"
      onClick={handleClick}
    >
      <svg aria-hidden="true" role="img"  width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6l-6 6l1.41 1.41z"></path></svg>
    </span>
  )
}