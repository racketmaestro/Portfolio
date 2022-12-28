// import "../pages/myTimeline.css";
import WorkIcon from '@mui/icons-material/Work'
import SchoolIcon from '@material-ui/icons/School'
import { Flex, Text, VStack, Link } from '@chakra-ui/layout'
import { Avatar } from '@material-ui/core'
import timelineElements from './timelineElements'
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'

import 'react-vertical-timeline-component/style.min.css'
import { useColorModeValue } from '@chakra-ui/color-mode'
export { getServerSideProps } from '../chakra'

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
              <VStack align="left">
                <Text as="h2" font-weight={100}>
                  <b>{element.title}</b>
                </Text>
                <Link
                  target="_blank"
                  href={element.link}
                  className="vertical-timeline-element-subtitle"
                  justifyContent="flex-end"
                  color = "#0C3C65"
                >
                  {element.location}
                </Link>
                <h1 className="vertical-timeline-element-description">
                  {element.description}
                </h1>
              </VStack>
            </VerticalTimelineElement>
          )
        })}
      </VerticalTimeline>
    </div>
  )
}

export default BioTimeline
