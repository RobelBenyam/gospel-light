import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  useColorModeValue,
  Avatar,
  Image,
  Flex,
} from '@chakra-ui/react'

const Card = ({ children, ...props }) => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.800')}
      p={6}
      rounded="xl"
      shadow="md"
      borderWidth="1px"
      borderColor={useColorModeValue('gray.200', 'gray.700')}
      _hover={{
        transform: 'translateY(-5px)',
        shadow: 'xl',
        borderColor: 'blue.400',
      }}
      transition="all 0.3s ease"
      {...props}
    >
      {children}
    </Box>
  )
}

export default function About() {
  return (
    <Box bg={useColorModeValue('gray.50', 'gray.900')} py={12}>
      <Container maxW="container.xl">
        <Stack spacing={12}>
          {/* History Section */}
          <Stack spacing={6}>
            <Heading fontSize="3xl" textAlign="center">
              Our Story
            </Heading>
            <Text color="gray.600" fontSize="lg" textAlign="center" maxW="3xl" mx="auto">
              Gospel Light Church was founded in 1995 with a vision to be a beacon of hope
              in our community. Over the years, we have grown from a small gathering to a
              vibrant congregation serving thousands of families.
            </Text>
            <Box
              w="full"
              h="400px"
              position="relative"
              overflow="hidden"
              rounded="xl"
              mb={8}
              shadow="lg"
            >
              <Image
                src="https://images.unsplash.com/photo-1548625149-fc4a29cf7092?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Church building"
                objectFit="cover"
                w="full"
                h="full"
              />
            </Box>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mt={8}>
              <Card>
                <Heading size="md" mb={4} color="blue.500">
                  1995
                </Heading>
                <Text color="gray.600">
                  Our church began with just 20 members meeting in a small rented space.
                </Text>
              </Card>
              <Card>
                <Heading size="md" mb={4} color="blue.500">
                  2005
                </Heading>
                <Text color="gray.600">
                  We moved to our current location and began expanding our ministries.
                </Text>
              </Card>
              <Card>
                <Heading size="md" mb={4} color="blue.500">
                  2024
                </Heading>
                <Text color="gray.600">
                  Launching our building fund campaign to better serve our growing community.
                </Text>
              </Card>
            </SimpleGrid>
          </Stack>

          {/* Vision Section */}
          <Stack spacing={6}>
            <Heading fontSize="3xl" textAlign="center">
              Our Vision
            </Heading>
            <Text color="gray.600" fontSize="lg" textAlign="center" maxW="3xl" mx="auto">
              We are building a new church home that will serve as a center for worship,
              community, and outreach. Our vision is to create a space that welcomes all
              and reflects God's love for our community.
            </Text>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} mt={8}>
              <Card>
                <Box
                  h="200px"
                  mb={4}
                  rounded="lg"
                  overflow="hidden"
                  shadow="md"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    alt="New building rendering"
                    objectFit="cover"
                    w="full"
                    h="full"
                  />
                </Box>
                <Heading size="md" mb={6} color="blue.500">
                  New Building Features
                </Heading>
                <Stack spacing={4}>
                  <Text color="gray.600" fontSize="md" fontWeight="medium">Modern worship center with 500+ seating capacity</Text>
                  <Text color="gray.600" fontSize="md" fontWeight="medium">Dedicated children's and youth spaces</Text>
                  <Text color="gray.600" fontSize="md" fontWeight="medium">Community gathering areas</Text>
                  <Text color="gray.600" fontSize="md" fontWeight="medium">State-of-the-art audio and visual systems</Text>
                </Stack>
              </Card>
              <Card>
                <Box
                  h="200px"
                  mb={4}
                  rounded="lg"
                  overflow="hidden"
                  shadow="md"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    alt="Community impact"
                    objectFit="cover"
                    w="full"
                    h="full"
                  />
                </Box>
                <Heading size="md" mb={6} color="blue.500">
                  Community Impact
                </Heading>
                <Stack spacing={4}>
                  <Text color="gray.600" fontSize="md" fontWeight="medium">Expanded food pantry and outreach programs</Text>
                  <Text color="gray.600" fontSize="md" fontWeight="medium">Community event spaces for local organizations</Text>
                  <Text color="gray.600" fontSize="md" fontWeight="medium">Counseling and support services</Text>
                  <Text color="gray.600" fontSize="md" fontWeight="medium">Educational programs and workshops</Text>
                </Stack>
              </Card>
            </SimpleGrid>
          </Stack>

          {/* Leadership Section */}
          <Stack spacing={6}>
            <Heading fontSize="3xl" textAlign="center">
              Leadership Team
            </Heading>
            <Text color="gray.600" fontSize="lg" textAlign="center" maxW="3xl" mx="auto">
              Meet the dedicated leaders who are guiding our church through this exciting
              building project.
            </Text>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mt={8}>
              <Card textAlign="center">
                <Avatar
                  size="xl"
                  name="John Smith"
                  bg="blue.500"
                  color="white"
                  mb={4}
                  boxShadow="lg"
                />
                <Heading size="md" mb={2} color="blue.500">
                  John Smith
                </Heading>
                <Text color="gray.500" mb={2} fontWeight="medium">
                  Senior Pastor
                </Text>
                <Text color="gray.600">
                  Leading our church with vision and passion for over 15 years.
                </Text>
              </Card>
              <Card textAlign="center">
                <Avatar
                  size="xl"
                  name="Sarah Johnson"
                  bg="blue.500"
                  color="white"
                  mb={4}
                  boxShadow="lg"
                />
                <Heading size="md" mb={2} color="blue.500">
                  Sarah Johnson
                </Heading>
                <Text color="gray.500" mb={2} fontWeight="medium">
                  Building Committee Chair
                </Text>
                <Text color="gray.600">
                  Overseeing the construction and development of our new building.
                </Text>
              </Card>
              <Card textAlign="center">
                <Avatar
                  size="xl"
                  name="Michael Brown"
                  bg="blue.500"
                  color="white"
                  mb={4}
                  boxShadow="lg"
                />
                <Heading size="md" mb={2} color="blue.500">
                  Michael Brown
                </Heading>
                <Text color="gray.500" mb={2} fontWeight="medium">
                  Finance Director
                </Text>
                <Text color="gray.600">
                  Managing the building fund and financial planning for the project.
                </Text>
              </Card>
            </SimpleGrid>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
} 