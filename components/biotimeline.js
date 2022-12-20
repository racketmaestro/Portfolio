// import "../pages/myTimeline.css";
import WorkIcon from '@mui/icons-material/Work'
import SchoolIcon from '@material-ui/icons/School'
import { Text, Container, Heading } from '@chakra-ui/layout'
import timelineElements from './timelineElements'
import Layout from './layouts/article'
import { Button } from '@chakra-ui/button'
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'

import 'react-vertical-timeline-component/style.min.css'
export { getServerSideProps } from '../components/chakra'

function BioTimeline() {
  let workIconStyles = { background: '#369FD0' }
  let schoolIconStyles = { background: '#FDBA69' }

  return (
    <div>
      <VerticalTimeline layout="1-column-left">
        {timelineElements.map(element => {
          let isWorkIcon = element.icon === 'work'
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== ''

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
              contentStyle={{ background: '#E2F6FE' }}
              contentArrowStyle={{
                borderRight: '7px solid #E2F6FE'
              }}
            >
              <h2>
                <b>{element.title}</b>
              </h2>
              <a
                target="_blank"
                href={element.link}
                className="vertical-timeline-element-subtitle"
              >
                {element.location}
              </a>
              <h1 className="vertical-timeline-element-description">
                {element.description}
              </h1>
              {/* {showButton && (
                <a
                  target="_blank"
                  className={`button ${
                    isWorkIcon ? 'workButton' : 'schoolButton'
                  }`}
                  href={element.link}
                >
                  {element.buttonText}
                </a>
              )} */}
            </VerticalTimelineElement>
          )
        })}
      </VerticalTimeline>
    </div>
  )
}

export default BioTimeline
