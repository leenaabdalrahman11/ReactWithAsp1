import React from 'react'
import style from "./Footer.module.css"
export default function Footer() {
  return (
    <>
        <footer className={style.footer}>
      <p>© {new Date().getFullYear()}  All rights reserved.</p>
    </footer>
      
    </>
  )
}
