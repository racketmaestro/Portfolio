import * as React from 'react'
import { SimpleGrid, Container } from '@chakra-ui/react'
import engineeringSkillsList from './engineering-stack-data'
import Card from './skill-card'
import Layout from '../layouts/article'

const EngineeringStack = () => {
  return (
    <Layout>
      <Container justifyContent='flex-start'>
        <SimpleGrid columns={[1, 1, 2]} spacing={4}>
          {engineeringSkillsList().map((tool, index) => (
            <Card
              key={index}
              name={tool.name}
              description={tool.description}
              image={tool.image}
              // link={tool.link}
            />
          ))}
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default EngineeringStack
