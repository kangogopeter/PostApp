import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMediumM, faGithub  } from '@fortawesome/fontawesome-free-brands'

export default () => (
  <footer>
    <a 
    <h1>
    terms and conditions apply
    </h1>
      title='Articles'
      className={'small-button medium'}
    >
      <FontAwesomeIcon icon={faMediumM} size='3x' color='#fff' />
    </a>
    <a 
    href="" 
      title='MY Github'
      className={'small-button github'}
    >
      <FontAwesomeIcon icon={faGithub} size='3x' color='#fff' />
    </a>
  </footer>
)