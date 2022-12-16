import {
  Stack,
  Box,
  SlideFade,
  Text,
  Heading,
  Link,
  Button,
  Flex,
} from "@chakra-ui/react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import Cycletext from "./cycletext";

export default function Intro() {
  return (
    <Flex p={10} w="full" alignItems="center" justifyContent="center">
      <Stack spacing={10} justifyContent="flex-start" alignItems="flex-start">
        <SlideFade
          in={true}
          transition={{ enter: { duration: 0.4, delay: 0.7 } }}
        >
          <Box position="relative">
            <Text
              color="displayColor"
              fontSize="3xl"
              fontWeight="medium"
              position="relative"
            >
              Hey there, I'm
            </Text>
          </Box>
          <Heading
            fontSize="6xl"
            lineHeight={"95%"}
            color="complement"
            letterSpacing={{ sm: "-1.2px", md: "-1.8px" }}
            position="relative"
          >
            <Box color="displayColor" as="span">
              Amos Koh
            </Box>
            .
          </Heading>
        </SlideFade>

        <SlideFade
          in={true}
          transition={{ enter: { duration: 0.4, delay: 0.9 } }}
        >
          <Heading
            color="textSecondary"
            fontSize="4xl"
            fontWeight="medium"
            whiteSpace="pre-wrap"
            letterSpacing="-1.6px"
            w={["85vw", "40vw"]}
          >
            <Box color="displayColor" as="span">
              Year 2 Biomedical Engineering Student at Imperial College London. An aspiring engineer who enjoys{" "}
              <Cycletext/>
            </Box>
              
            
              
          </Heading>
        </SlideFade>

        <SlideFade
          in={true}
          transition={{ enter: { duration: 0.4, delay: 1.0 } }}
        >
          <Stack isInline spacing={4}>
            <Link href="https://github.com/racketmaestro" isExternal>
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
            <Link href="https://linkedin.com/in/ak726/" isExternal>
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
            <Link href="mailto:amos.koh21@imperial.ac.uk" isExternal>
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
    </Flex>
  );
}
