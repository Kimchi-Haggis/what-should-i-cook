import React from 'react'
import TryCaribbean from './TryCaribbean';
import TryGreek from './TryGreek';

type Props = {}

const TryThis = (props: Props) => {
  return (
    <>
      <TryCaribbean />
      <TryGreek />
    </>
  )
}

export default TryThis;