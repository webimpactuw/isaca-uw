import Link from 'next/link'
import Container from './Container'

export interface CalendarEvent {
  id: string
  title: string
  start: string    // ISO date
  location: string
  link: string
}

interface HomeProps {
  events: CalendarEvent[]
}

export default function Home({ events }: HomeProps) {
  const format = (iso: string) =>
    new Intl.DateTimeFormat('en-US', {
      month: '2-digit', day: '2-digit', year: '2-digit',
      hour: '2-digit', minute: '2-digit',
    }).format(new Date(iso))

  return (
    <Container>
      <main className="space-y-20">
        {/* Intro */}
        <section className="grid md:grid-cols-2 items-end gap-5">
          <img src="imgs/event1.jpeg" alt="Event 1" className="md:order-last w-full h-auto rounded-lg object-cover hover:shadow-xl/20 transition duration-400 ease-in-out" />

            <div className='md:order-first space-y-5'>
              <h1 className="">
                Promoting Student Engagement in Information Security
              </h1>

              <div className="mt-3 flex items-center space-x-10">
                <h4 className="font-semibold">ISACA UW Chapter</h4>

                <div className="inline-flex items-center bg-[#D4EAF1] rounded-full px-4 py-2">
                  <img src="icons/ischool.png" alt="iSchool Logo" className="w-6 h-6 mr-2" />

                  <Link href='https://ischool.uw.edu/programs/informatics/community'
                    className="text-base font-medium">
                    iSchool affiliated RSO
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* About Us */}
          <section className="grid md:grid-cols-10 items-center gap-10">
            <div className="col-span-6 md:order-last">
              <h2 className="mb-4">
                About Us
              </h2>

              <p className="mb-4 text-lg">
                ISACA is a global professional association focused on IT governance,
                risk management, cybersecurity, and assurance.
              </p>

              <Link
                href="/about"
                className="inline-flex items-center px-3 py-2 border border-[#619DC5] font-medium rounded-xs hover:bg-[#D4EAF1]"
              >
                learn more

                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>

            <img src="imgs/event2.jpeg" alt="Event 2" className="md:order-first col-span-6 md:col-span-4 w-full h-auto rounded-lg object-cover hover:shadow-xl/20 transition duration-400 ease-in-out"/>
          </section>

          {/* Upcoming Events */}
          <section className="space-y-4">
            <h2 className="text-3xl font-semibold">Upcoming Events</h2>
            {/* view all link */}
            <div className="flex space-x-6 overflow-x-auto pb-2">
              {events.map(evt => (
                <div key={evt.id} className="w-[260px] p-6 border rounded-sm flex-shrink-0 space-y-3">
                  <h4>{evt.title}</h4>
                  <h5>{evt.location}</h5>
                  <h5>{format(evt.start)}</h5>
                  {/* <button
                    onClick={() => window.open(evt.link, '_blank')}
                    className="px-3 py-1 border rounded-xs hover:bg-[#D4EAF1] text-sm"
                  >
                    RSVP
                  </button> */}
                </div>
              ))}
            </div>
          </section>

          {/* Follow Us */}
          <section className="grid md:grid-cols-3 items-center gap-10">
            <div className="space-y-4 col-span-2">
              <h2 className="text-3xl font-semibold">Follow Us</h2>

              <p className="text-lg">
                Follow us on socials to keep up with our events and announcements.
              </p>

              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/isacauw/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 border border-[#619DC5] rounded-xs hover:bg-[#D4EAF1]"
                >
                  Instagram
                </a>

                <a
                  href="https://www.linkedin.com/company/isaca-university-of-washington-student-chapter/about/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 border border-[#619DC5] rounded-xs hover:bg-[#D4EAF1]"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <img src="imgs/event3.jpeg" alt="Event 3" className="w-full h-auto col-span-3 md:col-span-1 rounded-lg object-cover hover:shadow-xl/20 transition duration-400 ease-in-out" />
        </section>
      </main>
    </Container>
  );
}
