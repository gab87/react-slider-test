import React, {useRef, useEffect} from 'react'
import AnimateMouse from '../../utils/AnimateMouse'

export const Pointer = ({activeView}) => {
  const pointer = useRef(null)
  const circle = useRef(null)

  useEffect(() => {
    new AnimateMouse(pointer.current, circle.current)
  }, [activeView])

  return (
    <div className="pointer" ref={pointer}>
      <svg viewBox="0 0 54 54" width="54" height="54">
        <path ref={circle} strokeWidth="1" fill="none" strokeMiterlimit="10"
              d="M27,0.5c14.5,0,26.5,12,26.5,26.5S41.5,53.5,27,53.5S0.5,41.5,0.5,27S12.5,0.5,27,0.5z"/>
      </svg>
    </div>
  )
}