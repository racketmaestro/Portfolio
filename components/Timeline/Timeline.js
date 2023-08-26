import { Box, VStack, HStack, Text, Link, Icon } from '@chakra-ui/react';
import { School, Work } from '@material-ui/icons';

const TimelineElement = ({ title, location, description, link, date, icon }) => {
  const iconColor = icon === 'Work' ? 'blue.500' : 'orange.500';
  const IconComponent = icon === 'Work' ? Work : School;

  return (
    <HStack spacing={4} mb={6}>
      <Icon as={IconComponent} color={iconColor} boxSize={10} />
      <VStack align="start">
        <Text fontWeight="bold">{title}</Text>
        <Link href={link} isExternal color={iconColor}>
          {location}
        </Link>
        <Text>{description}</Text>
        <Text fontSize="sm" color="gray.500">
          {date}
        </Text>
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
