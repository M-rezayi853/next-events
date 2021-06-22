import React, { Fragment } from 'react'
// import { useRouter } from 'next/router'
import Head from 'next/head'

// import { getEventById } from '../../dummy-data'
import { getEventById, getFeaturedEvents } from '../../helpers/api-util'
import EventSummary from '../../components/event-detail/EventSummary'
import EventLogistics from '../../components/event-detail/EventLogistics'
import EventContent from '../../components/event-detail/EventContent'
// import ErrorAlert from '../../components/error-alert/ErrorAlert'
// import Button from '../../components/ui/Button'

function EventDetailPage(props) {
  // const router = useRouter()

  // const eventId = router.query.eventId

  // const event = getEventById(eventId)

  const { event } = props

  if(!event) {
    return (
      <div className='center'>
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <Fragment>
      <Head>
        <title>{event.title}</title>
        <meta 
          name='description' 
          content={event.description} 
        />
      </Head>

      <EventSummary title={event.title} />
      <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title} />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  )
}

export async function getStaticProps(context) {
  const { params } = context

  const eventId = params.eventId

  const selectedEvent = await getEventById(eventId)

  return {
    props: {
      event: selectedEvent
    },
    revalidate: 60
  }
}

export async function getStaticPaths() {
  const events = await getFeaturedEvents()

  const paths = events.map(event => ({ params: { eventId: event.id } }))

  return {
    paths: paths,
    // fallback: true,
    fallback: 'blocking',
  }
}

export default EventDetailPage
