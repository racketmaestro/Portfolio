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
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Contact() {
  return (
    <Stack pt={8} spacing={5} alignItems="flex-start" >
      <SlideFade
        in={true}
        transition={{ enter: { duration: 0.4, delay: 1.0 } }}
      >
        <Stack isInline spacing={3}>
          <Link
            target="_blank"
            href="https://github.com/racketmaestro"
            isExternal
          >
            <Button
              leftIcon={<FaGithub color="#5F99FF" />}
              position="static"
              size="md"
              color="white"
              bg="#151415"
            >
              Github
            </Button>
          </Link>
          <Link
            target="_blank"
            href="https://linkedin.com/in/ak726/"
            isExternal
          >
            <Button
              leftIcon={<FaLinkedin color="#5F99FF" />}
              position="static"
              size="md"
              color="white"
              bg="#151415"
            >
              LinkedIn
            </Button>
          </Link>
          <Link
            target="_blank"
            href="mailto:amos.koh21@imperial.ac.uk"
            isExternal
          >
            <Button
              leftIcon={<FaEnvelope fill="#5F99FF" />}
              transition="0.3s"
              position="static"
              size="md"
              color="white"
              bg="#151415"
            >
              Email
            </Button>
          </Link>
        </Stack>
      </SlideFade>
    </Stack>
  )
}
