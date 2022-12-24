import { Container, Badge, Link, Spacer, Flex } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraphs'
import Layout from '../../components/layouts/article'
export { getServerSideProps } from '../../components/chakra'
import { Avatar } from '@material-ui/core'
import { Stack } from '@chakra-ui/react'

const Project = () => (
  <Layout>
    <Container>
      <Title>
        Lego recognition <Badge>2022</Badge>
      </Title>
      <WorkImage src="/images/works/legothumbnail.jpg" alt="lego" />
      <P>
        Wrote Python scripts on RaspberryPi to capture and crop images using
        object motion detection and bounding box image processing, creating a
        Lego pieces database containing 6000 images across 7 classes.
        <br />
        <br />
        Built and trained image classification CNN model for automated Lego
        pieces sorter using Tensorflow, achieving 93% testing accuracy.
        <br />
        <br />
        Integrated model with livestream from RaspberryPi camera to classify
        lego pieces in realtime.
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
          <Avatar src="/icons/raspberrypi-icon.png" title= 'RaspberryPi' />
        </Flex>
        <Flex pt={5}>
          <Meta>Stack</Meta>
          <Spacer />
          <Stack direction="row" spacing={2}>
            <Avatar src="/icons/python-icon-2.png" title="Python" />
            <Avatar src="/icons/tensorflow-icon.png" title="Tensorflow" />
            <Avatar src="/icons/opencv-icon.png" title="OpenCV" />
            <Avatar src="/icons/linux-icon.png" title="Linux" />
          </Stack>
        </Flex>
      <br />
    </Container>
  </Layout>
)

export default Project
