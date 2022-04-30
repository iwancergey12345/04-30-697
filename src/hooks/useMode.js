import { useState } from "react";

export default function useMode() {

  const html = document.querySelector('html');

  const setMode = (mode) => {
    localStorage.setItem('theme', mode);
    html.classList.remove('light', 'dark');
    html.classList.add(localStorage.getItem('theme'));
  }
  return ({  setMode })
}