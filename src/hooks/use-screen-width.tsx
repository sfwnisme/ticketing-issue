import React, { useEffect, useState } from 'react'

export default function useScreenWidth() {
  const [state, setState] = useState('')
  useEffect(() => {
    console.log(window.innerWidth)
    setState(window.innerWidth)
    console.log(window)
  }, [window.innerWidth])
  console.log(state)
  return state
}