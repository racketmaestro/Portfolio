import { Box, VStack, HStack, Text, Link, Icon } from '@chakra-ui/react';
import { FaBriefcase, FaSchool } from 'react-icons/fa';

const TimelineElement = ({ title, location, description, link, date, icon }) => {
  const iconColor = icon === 'Work' ? 'blue.500' : 'orange.500';
  const IconComponent = icon === 'Work' ? FaBriefcase : FaSchool;
    return (
        <HStack spacing={4} mb={6}>
          <Icon as={IconComponent} color={iconColor} boxSize={10} />
          <VStack align="start">
          <Box w="100%" textAlign='left' p={5} borderWidth={1} borderRadius="md" borderColor="gray.200">
              <Text fontWeight="bold" fontSize="xl">
                {title}
              </Text>
              <Link href={link} isExternal color={iconColor}>
                {location}
              </Link>
              <Text mt={2}>{description}</Text>
              <Text fontSize="sm" color="gray.500" mt={4}>
                {date}
              </Text>
            </Box>
          </VStack>
        </HStack>
      );
      
  };
  
  
const Timeline = ({ elements }) => {
  return (
    <VStack align="start" spacing={4}>
      {elements.map((element, index) => (
        <TimelineElement key={index} {...element} />
      ))}
    </VStack>
  );
};

export default Timeline;
