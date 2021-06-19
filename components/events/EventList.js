import React from 'react'

import EventItem from './EventItem'
import classes from './EventList.module.css'

function EventList({ items }) {
  return (
    <ul className={classes.list}>
      {items.map(item => (
        <EventItem key={item.id} {...item} />
      ))}
    </ul>
  )
}

export default EventList
