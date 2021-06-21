import React, { Fragment } from 'react'
import { useRouter } from 'next/router'

// import { getAllEvents } from '../../dummy-data'
import { getAllEvents } from '../../helpers/api-util'
import EventList from '../../components/events/EventList'
import EventsSearch from '../../components/events/EventsSearch'

function AllEventsPage(props) {
  // const events = getAllEvents()

  const { events } = props

  const router = useRouter()

  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`

    router.push(fullPath)
  }

  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  )
}

export async function getStaticProps() {
  const allEvents = await getAllEvents()

  return {
    props: {
      events: allEvents
    },
    revalidate: 60
  }
}

export default AllEventsPage
