import React from 'react'

// import { getFeaturedEvents } from '../dummy-data'
import { getFeaturedEvents } from '../helpers/api-util'
import EventList from '../components/events/EventList'

function HomePage(props) {
  const { events } = props

  // const featuredEvents = getFeaturedEvents()

  return (
    <div>
      <EventList items={events} />
    </div>
  )
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents()

  return {
    props: {
      events: featuredEvents
    },
    revalidate: 1800
  }
}

export default HomePage
