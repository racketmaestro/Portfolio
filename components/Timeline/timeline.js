import { Box, VStack, HStack, Text, Link, Icon } from '@chakra-ui/react';
import { School, Work } from '@material-ui/icons';




const TimelineElement = ({ title, location, description, link, date, icon }) => {
    const iconColor = icon === 'Work' ? 'blue.500' : 'orange.500';
    const IconComponent = icon === 'Work' ? Work : School;
    const bgColor = useColorModeValue('gray.100', 'gray.700');
  
    return (
      <HStack spacing={4} mb={6}>
        <Icon as={IconComponent} color={iconColor} boxSize={10} />
        <VStack align="start">
          <Box p={4} borderRadius="md" boxShadow="md" bgColor={bgColor} width="100%">
            <Text fontWeight="bold" fontSize="xl">
              {title}
            </Text>
            <Link href={link} isExternal color={iconColor}>
              {location}
            </Link>
            <Box
            />
            <Text fontSize="sm" color="gray.500">
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
