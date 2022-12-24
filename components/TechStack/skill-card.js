import * as React from 'react';
import {
  VStack,
  HStack,
  Text,
  useColorModeValue,
  Link,
  Box,
  Image,
  Skeleton
} from '@chakra-ui/react';
import { usePalette } from 'react-palette';
import { motion } from 'framer-motion';


const Card = ({ name, image, description }) => {
  const { data, loading } = usePalette(image);

  return (
    <motion.div whileHover={{ y: -5 }}>
        <HStack
          p={4}
          bg = '#E2F6FE'
          rounded="xl"
          borderWidth="1px"
          borderColor={useColorModeValue('gray.100', 'gray.700')}
          w="100%"
          textAlign="left"
          align="flex-start"
          spacing={4}
          _hover={{ shadow: 'md' }}
        >
          <Box
            rounded="lg"
            p={2}
            position="relative"
            overflow="hidden"
            lineHeight={0}
            boxShadow="inset 0 0 1px 1px rgba(0, 0, 0, 0.015)"
          >
            <Box
              bg={data.lightVibrant}
              position="absolute"
              top={0}
              bottom={0}
              left={0}
              right={0}
              opacity={0.25}
            ></Box>
            {loading ? (
              <Skeleton height={26} width={26} rounded="md" />
            ) : (
              <Image src={image} height={26} width={26} layout="fixed" rounded="md" />
            )}
          </Box>
          <VStack align="start" justify="flex-start" spacing={1} maxW="lg" h="100%">
            <VStack spacing={0} align="start" flexGrow={1}>
              <Text fontWeight="bold" fontSize="md" noOfLines={2} color="#0C3C65">
                {name}
              </Text>
              <Text fontSize="sm" color='black'>
                {description}
              </Text>
            </VStack>
          </VStack>
        </HStack>
    </motion.div>
  );
};

export default Card;