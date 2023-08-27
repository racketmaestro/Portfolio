import { Box } from '@chakra-ui/react';
import timelineElements from './timelineElements';

const BioTimeline = () => {
  return (
    <Box p={6}>
      <Timeline elements={timelineElements} />
    </Box>
  );
};

export default BioTimeline;
