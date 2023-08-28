import { Container, Badge, Link, Spacer, Flex, Image } from '@chakra-ui/react'
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
        Converting geojsons into Apple's IMDF <Badge>2023</Badge>
      </Title>
      {/* <WorkImage src="/images/works/legothumbnail.jpg" alt="lego" /> */}
      <P>
      Apple Indoor Maps Program offers a way for organizations to create detailed maps of indoor spaces with 
      'BlueDot' positioning accuracy using existing Wi-Fi infrastructure. These maps can be used for
      their apps and websites. A critical step is converting floor plans to Indoor Mapping Data Format (IMDF)
      before conducting indoor 'fingerprinting'.
      <br />
      <br />
      Essentially, IMDF is a set of geojson files governed by a set of rules
      defined by Apple. There are 3rd party companies offering the conversion of floorplans into IMDF. However they charge an exorbitant
      price for creating a set of geojson documents.
      <br />
      <br /> 
      During my internship in 2023, my team strived to create a detailed indoor map of Addenbrooke's Hospital. 
      I used QGIS (an opensource geographic information system) to create geo-referenced polygons,
      points and lines of the hospital's internal structure. Subsequently,
      I wrote this Python script to automate the conversion (the laborious bits) of a set of Geojsons into IMDF compatible 
      ones.  This automation handled the most tedious parts of the conversion, allowing manual labeling and refinements to be 
      done efficiently with the Apple IMDF Sandbox.
      Post this refinement, MapKit can be used to display an indoor map on your app and website.
      </P>
      <br />
        <Flex>
          <Meta>Link</Meta>
          <Spacer />
          <Link
            target="_blank"
            href="https://github.com/racketmaestro/Geojson-to-IMDF-Transformer"
          >
            Github Repository
          </Link>
          <ExternalLinkIcon></ExternalLinkIcon>
        </Flex>
        <Flex pt={5}>
          <Meta>Stack</Meta>
          <Spacer />
          <Stack direction="row" spacing={2}>
            <Image src="/icons/python-icon-2.png" alt="Python" boxSize="48px" borderRadius="full" />
          </Stack>
        </Flex>
      <br />
    </Container>
  </Layout>
)

export default Project
