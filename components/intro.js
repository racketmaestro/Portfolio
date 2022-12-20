import {
  Stack,
  Box,
  SlideFade,
  Text,
  Heading,
  Link,
  Button,
  Flex
} from '@chakra-ui/react'
import Cycletext from './cycletext'
import Contact from './contact'

export default function Intro() {
  return (
      <Stack pt = {10}spacing={5} justifyContent="flex-start" alignItems="flex-start">
        <SlideFade
          in={true}
          transition={{ enter: { duration: 0.4, delay: 0.7 } }}
        >
          <Heading fontSize="3xl" fontWeight="medium">
            Hey there 👋, I'm
          </Heading>

          <Heading
            fontSize="5xl"
            lineHeight={'95%'}
            letterSpacing={{ sm: '-1.2px', md: '-1.8px' }}
            position="relative"
          >
            Amos Koh .
          </Heading>
        </SlideFade>

        <SlideFade
          in={true}
          transition={{ enter: { duration: 0.4, delay: 0.9 } }}
        >
          <Cycletext />
        </SlideFade>
        
      </Stack>
  )
}
