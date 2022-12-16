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
import Cycletext from "./cycletext";  
import Contact from "./contact";

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
              <Cycletext />
            <Contact />
          </Heading>
        </SlideFade>
      </Stack>
    </Flex>
  );
}
