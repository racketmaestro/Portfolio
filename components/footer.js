import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Designed and Developed by Amos Koh.
Built with Next.js. Hosted on Vercel.
    </Box>
  )
}

export default Footer
