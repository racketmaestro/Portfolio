import * as React from 'react'
import { SimpleGrid, Container } from '@chakra-ui/react'
import softwareSkillsList from './tech-stack-data'
import Card from './skill-card'
import Layout from '../layouts/article'

const TechStack = () => {
  return (
    <Layout>
      <Container justifyContent='flex-start'>
        <SimpleGrid columns={[1, 1, 2]} spacing={4}>
          {softwareSkillsList().map((tool, index) => (
            <Card
              key={index}
              name={tool.name}
              description={tool.description}
              image={tool.image}
            />
          ))}
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default TechStack
