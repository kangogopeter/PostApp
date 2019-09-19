import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMediumM, faGithub  } from '@fortawesome/fontawesome-free-brands'

export default () => (
  <footer>
    <a 
  
    href = "peterkangogo501@gmail.com"
      title='Email Info'
      className={'small-button medium'}
    >
      <FontAwesomeIcon icon={faMediumM} size='3x' color='#fff' />
    </a>
    <a 
    href="https://github.com/kangogopeter/PostApp.git" 
      title='MY Github'
      className={'small-button github'}
    >
      <FontAwesomeIcon icon={faGithub} size='3x' color='#fff' />
    </a>
  </footer>
)