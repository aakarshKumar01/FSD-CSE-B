import React from 'react'

const Nav = () => {
  return (
    <div>
      <nav>
        <ul style={{display: 'flex', listStyle: 'none', gap: '20px'}}>
          <li><a href="/">Home</a></li>
          <li><a href="/work">Work</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
