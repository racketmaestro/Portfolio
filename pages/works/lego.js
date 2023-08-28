import { Container, Badge, Link, Spacer, Flex, Image} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraphs'
import Layout from '../../components/layouts/article'
export { getServerSideProps } from '../../components/chakra'
import { Stack } from '@chakra-ui/react'

const Project = () => (
  <Layout>
    <Container>
      <Title>
        Lego Machine Learning Classification in realtime <Badge>2022</Badge>
      </Title>
      {/* <WorkImage src="/images/works/legothumbnail.jpg" alt="lego" /> */}
      <P>
        During my summer break in 2022, I interned at Nullspace Robotics, a robotics and programming enrichment centre
        for young students. As part of the software required for an automated lego pieces sorter project, I
        wrote Python scripts to capture and crop images using
        object motion detection and bounding box image processing.
        <br />
        <br />
        Afterwards, I built and trained image classification CNN model using Tensorflow, achieving 93% testing accuracy.
        <br />
        <br />
        Finally, by integrating the Tensorflow model with a live feed from a RaspberryPi camera, it could classify
        lego pieces in realtime to a high degree of accuracy. You can check out the source code and preview in the link below! 
      </P>
      <br />
        <Flex>
          <Meta>Link</Meta>
          <Spacer />
          <Link
            target="_blank"
            href="https://github.com/racketmaestro/Lego-motion-detection-and-image-recognition-ak-ag"
          >
            Github Repository
          </Link>
          <ExternalLinkIcon></ExternalLinkIcon>
        </Flex>
        <Flex pt={5}>
          <Meta>Platform</Meta>
          <Spacer />
          <Image src="/icons/raspberrypi-icon.png" alt="opencv" boxSize="48px" borderRadius="full" />
        </Flex>
        <Flex pt={5}>
          <Meta>Stack</Meta>
          <Spacer />
          <Stack direction="row" spacing={2}>
            <Image src="/icons/python-icon-2.png" alt="Python" boxSize="48px" borderRadius="full" />
            <Image src="/icons/tensorflow-icon.png" alt="tensorflow" boxSize="48px" borderRadius="full" />
            <Image src="/icons/opencv-icon.png" alt="opencv" boxSize="48px" borderRadius="full" />
            <Image src="/icons/linux-icon.png" alt="Linux" boxSize="48px" borderRadius="full" />
          </Stack>
        </Flex>
      <br />
    </Container>
  </Layout>
)

export default Project
