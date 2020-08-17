import * as React from 'react'

import { Card } from '../interfaces/Card'

type CardProps = {
  item: Card
}

const CardView = ({ item: card }: CardProps) => (
  <div>
    <h1>{card.title}</h1>
    <p>{card.body}</p>
  </div>
)

export default CardView