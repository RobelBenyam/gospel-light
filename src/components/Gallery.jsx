import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Image,
  useColorModeValue,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Stack,
  Badge,
} from '@chakra-ui/react'
import { useState } from 'react'

const ImageCard = ({ src, title, description, category }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Box
      position="relative"
      rounded="lg"
      overflow="hidden"
      cursor="pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={src}
        alt={title}
        width="100%"
        height="300px"
        objectFit="cover"
        transition="transform 0.3s ease"
        transform={isHovered ? 'scale(1.05)' : 'scale(1)'}
      />
      <Box
        position="absolute"
        bottom="0"
        left="0"
        right="0"
        bg="rgba(0, 0, 0, 0.7)"
        color="white"
        p={4}
        transform={isHovered ? 'translateY(0)' : 'translateY(100%)'}
        transition="transform 0.3s ease"
      >
        <Stack spacing={2}>
          <Heading size="sm">{title}</Heading>
          <Text fontSize="sm">{description}</Text>
          <Badge colorScheme="blue" alignSelf="start">
            {category}
          </Badge>
        </Stack>
      </Box>
    </Box>
  )
}

export default function Gallery() {
  const images = {
    current: [
      {
        src: 'https://images.unsplash.com/photo-1548625149-fc4a29cf7092?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        title: 'Current Sanctuary',
        description: 'Our current worship space that has served us well for many years.',
        category: 'Current Church',
      },
      {
        src: 'https://images.unsplash.com/photo-1548625149-fc4a29cf7092?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        title: 'Fellowship Hall',
        description: 'Where we gather for meals and community events.',
        category: 'Current Church',
      },
    ],
    progress: [
      {
        src: 'https://images.unsplash.com/photo-1548625149-fc4a29cf7092?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        title: 'Groundbreaking Ceremony',
        description: 'The beginning of our new building journey.',
        category: 'Progress',
      },
      {
        src: 'https://images.unsplash.com/photo-1548625149-fc4a29cf7092?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        title: 'Foundation Work',
        description: 'Laying the foundation for our future home.',
        category: 'Progress',
      },
    ],
    renderings: [
      {
        src: 'https://images.unsplash.com/photo-1548625149-fc4a29cf7092?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        title: 'Exterior View',
        description: 'Artist rendering of our new church building.',
        category: 'Renderings',
      },
      {
        src: 'https://images.unsplash.com/photo-1548625149-fc4a29cf7092?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        title: 'Worship Center',
        description: 'The heart of our new building.',
        category: 'Renderings',
      },
    ],
  }

  return (
    <Box bg={useColorModeValue('gray.50', 'gray.900')} py={12}>
      <Container maxW="container.xl">
        <Stack spacing={8}>
          <Stack spacing={4} textAlign="center">
            <Heading fontSize="3xl">Building Gallery</Heading>
            <Text color="gray.600">
              Take a visual journey through our current church, building progress,
              and future vision.
            </Text>
          </Stack>

          <Tabs variant="soft-rounded" colorScheme="blue" align="center">
            <TabList>
              <Tab>Current Church</Tab>
              <Tab>Progress</Tab>
              <Tab>Renderings</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
                  {images.current.map((image, index) => (
                    <ImageCard key={index} {...image} />
                  ))}
                </SimpleGrid>
              </TabPanel>
              <TabPanel>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
                  {images.progress.map((image, index) => (
                    <ImageCard key={index} {...image} />
                  ))}
                </SimpleGrid>
              </TabPanel>
              <TabPanel>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
                  {images.renderings.map((image, index) => (
                    <ImageCard key={index} {...image} />
                  ))}
                </SimpleGrid>
              </TabPanel>
            </TabPanels>
          </Tabs>

          <Box
            bg={useColorModeValue('white', 'gray.800')}
            p={8}
            rounded="lg"
            shadow="md"
            textAlign="center"
          >
            <Stack spacing={4}>
              <Heading fontSize="2xl">Share Your Photos</Heading>
              <Text color="gray.600">
                Have photos of our church or building progress? Share them with us
                to be featured in our gallery.
              </Text>
              <Text
                as="a"
                href="#"
                color="blue.500"
                fontWeight="bold"
                _hover={{ textDecoration: 'underline' }}
              >
                Submit Photos →
              </Text>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
} 