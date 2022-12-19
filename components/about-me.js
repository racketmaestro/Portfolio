import { Heading, VStack, Text, Flex, Box, Link, Wrap } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export default function AboutMe() {
  return (
    <Flex alignItems="center" justifyContent="center">
      <Wrap spacing={["100px", "200px"]} justify={"center"} align="center">
        <Box w={["85vw", "42.5vw"]}>
          <VStack spacing={4} justifyContent="center" alignItems="flex-start">
            <Heading color={"displayColor"}>About Me</Heading>
            <Text fontSize="rem1" color="textSecondary">
              Hi! I'm{" "}
              <Link fontSize="display3" color="#77B4D4">
                Amos
              </Link>{" "}
              . I was born and raised in Singapore, and am currently studying in
              London, United Kingdom. <br />
              <br /> As a Bioengineering student, I have picked up skills in
              various engineering discplines. <br />
              <br /> I proactively develop my software skills and aspire to
              augment my engineering projects with smart software. <br />
              <br />
            </Text>
          </VStack>
        </Box>
      </Wrap>
    </Flex>
  );
}
