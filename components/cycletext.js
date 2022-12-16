import { TextLoop } from 'react-text-loop-next'
import { Heading, VStack, Text, Flex, Box, Link, Wrap } from '@chakra-ui/react'

const Cycletext = () => {
  return (
    <h2>
      Year 2 Biomedical Engineering Student at Imperial College London. An
      aspiring engineer who enjoys{' '}
      <TextLoop springConfig={{ stiffness: 180, damping: 8 }}>
        <p style={{ color: '#77B4D4' }}>Muay Thai</p>
        <p style={{ color: '#77B4D4' }}>Hiking</p>
        <p style={{ color: '#77B4D4' }}>Tennis</p>
        <p style={{ color: '#77B4D4' }}>Playing Guitar</p>
      </TextLoop>{' '}
    </h2>
  )
}


export default Cycletext
