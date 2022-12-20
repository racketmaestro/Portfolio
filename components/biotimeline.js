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
  let workIconStyles = { background: '#06D6A0' }
  let schoolIconStyles = { background: '#f9c74f' }

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
              contentStyle={{ background: '#E3F6F9', color: '#D9F4F9' }}
              contentArrowStyle={{
                borderRight: '7px solid #E3F6F9'
              }}
            >
              <Heading
                fontSize="sm"
                className="vertical-timeline-element-title"
              >
                {element.title}
              </Heading>
              <Heading
                fontSize="sm"
                className="vertical-timeline-element-subtitle"
              >
                {element.location}
              </Heading>
              <Text pb = {10} id="description">{element.description}</Text>
              {/* {showButton && (
                <a
                  className={`button ${
                    isWorkIcon ? 'workButton' : 'schoolButton'
                  }`}
                  href="/"
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
