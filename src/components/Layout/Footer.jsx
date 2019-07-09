import React from 'react'
import {LoaderLine} from "./TopNav"
import Styles from "../../styles/footer.module.scss"

export default()=>{
  return(
    <div>
      <LoaderLine />
      <div className={Styles.footerContainer}>
        <p className={Styles.footerContent}>© 2019 by JR Academy Team 3. All rights reserved</p>
      </div>      
    </div>

  )
}