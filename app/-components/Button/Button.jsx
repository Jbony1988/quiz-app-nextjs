import React from 'react'
import Link from 'next/link';

const Button = ({className}) => {
  return (
    <Link href="/python-quiz">
    <button className={className}>Take Coding Assessment</button>
  </Link>
  )
}

export default Button