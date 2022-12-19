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
    <Flex p={10} w="full" alignItems="center" justifyContent="center">
      <Stack spacing={10} justifyContent="flex-start" alignItems="flex-start">
        <SlideFade
          in={true}
          transition={{ enter: { duration: 0.4, delay: 0.7 } }}
        >
          <Heading fontSize="3xl" fontWeight="medium" >
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
          <Contact /> 
        </SlideFade>
      </Stack>
    </Flex>
  )
}
