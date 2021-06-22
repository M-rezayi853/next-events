import Head from 'next/head'
import { useRouter } from 'next/router'

import Button from '../components/ui/Button';
// import { getFeaturedEvents } from '../helpers/api-util';
// import EventList from '../components/events/EventList';

function FirstPage(props) {
  // const { events } = props
  
  const router = useRouter
  const link = '/home'

  return (
    <div>
      <Head>
        <title>NextJS Events</title>
        <meta 
          name='description' 
          content='Find a lot of great events that allow you to evolve...' 
        />
      </Head>

      {/* <EventList items={events} /> */}

      <div className='center'>
        <Button link={link}>
          Home Page
        </Button>
      </div>
    </div>
  );
}

// export async function getStaticProps() {
//   const featuredEvents = await getFeaturedEvents();

//   return {
//     props: {
//       events: featuredEvents
//     },
//     revalidate: 1800
//   }
// }

export default FirstPage;