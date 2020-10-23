import React from 'react'

export const Header = ({header = '- DON\'T<br>STYLING & PHOTOGRAPHY COLLECTIVE'}) => {
  return (
    <header className="header">
      <span dangerouslySetInnerHTML={{__html: header}}/>
    </header>
  )
}