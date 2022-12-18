import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraphs'
import Layout from '../../components/layouts/article'

const Project = () => (
    <Layout>
        <Container>
            <Title>
                Lego recognition <Badge>2022</Badge>
            </Title>
            <WorkImage
                src="/images/works/legothumbnail.jpg"
                alt="ReChat"
            />
            <P>
                Wrote Python scripts on RaspberryPi to capture and crop images using object motion detection and bounding
                box image processing, creating a Lego pieces database containing 6000 images across 7 classes.
                <br/><br/>
                Built and trained image classification CNN model for automated Lego pieces sorter using Tensorflow, achieving
                93% testing accuracy. 
                <br/><br/>  
                Integrated model with livestream from RaspberryPi camera to classify lego pieces in realtime.

                
            </P>
            <br/>
            <List>
                <ListItem>
                    <Meta>Link</Meta>
                    <Link href="https://github.com/racketmaestro/Lego-motion-detection-and-image-recognition-ak-ag">
                    Github  Repository
                    </Link> <ExternalLinkIcon></ExternalLinkIcon>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <Link>RaspberryPi</Link>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <Link>Python | Tensorflow | OpenCV</Link>
                </ListItem>
            </List>
            <br/>
            <WorkImage src="/images/works/rechat.png"/>
        </Container>
    </Layout>
)

export default Project