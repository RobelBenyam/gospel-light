import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  useColorModeValue,
  Avatar,
  AvatarGroup,
} from '@chakra-ui/react'

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
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mt={8}>
              <Box
                bg={useColorModeValue('white', 'gray.800')}
                p={6}
                rounded="lg"
                shadow="md"
              >
                <Heading size="md" mb={4}>
                  1995
                </Heading>
                <Text color="gray.600">
                  Our church began with just 20 members meeting in a small rented space.
                </Text>
              </Box>
              <Box
                bg={useColorModeValue('white', 'gray.800')}
                p={6}
                rounded="lg"
                shadow="md"
              >
                <Heading size="md" mb={4}>
                  2005
                </Heading>
                <Text color="gray.600">
                  We moved to our current location and began expanding our ministries.
                </Text>
              </Box>
              <Box
                bg={useColorModeValue('white', 'gray.800')}
                p={6}
                rounded="lg"
                shadow="md"
              >
                <Heading size="md" mb={4}>
                  2024
                </Heading>
                <Text color="gray.600">
                  Launching our building fund campaign to better serve our growing community.
                </Text>
              </Box>
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
              <Box
                bg={useColorModeValue('white', 'gray.800')}
                p={6}
                rounded="lg"
                shadow="md"
              >
                <Heading size="md" mb={4}>
                  New Building Features
                </Heading>
                <Stack spacing={3}>
                  <Text color="gray.600">• Modern worship center with 500+ seating capacity</Text>
                  <Text color="gray.600">• Dedicated children's and youth spaces</Text>
                  <Text color="gray.600">• Community gathering areas</Text>
                  <Text color="gray.600">• State-of-the-art audio and visual systems</Text>
                </Stack>
              </Box>
              <Box
                bg={useColorModeValue('white', 'gray.800')}
                p={6}
                rounded="lg"
                shadow="md"
              >
                <Heading size="md" mb={4}>
                  Community Impact
                </Heading>
                <Stack spacing={3}>
                  <Text color="gray.600">• Expanded food pantry and outreach programs</Text>
                  <Text color="gray.600">• Community event spaces for local organizations</Text>
                  <Text color="gray.600">• Counseling and support services</Text>
                  <Text color="gray.600">• Educational programs and workshops</Text>
                </Stack>
              </Box>
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
              <Box
                bg={useColorModeValue('white', 'gray.800')}
                p={6}
                rounded="lg"
                shadow="md"
                textAlign="center"
              >
                <Avatar
                  size="xl"
                  name="John Smith"
                  bg="blue.500"
                  color="white"
                  mb={4}
                />
                <Heading size="md" mb={2}>
                  John Smith
                </Heading>
                <Text color="gray.500" mb={2}>
                  Senior Pastor
                </Text>
                <Text color="gray.600">
                  Leading our church with vision and passion for over 15 years.
                </Text>
              </Box>
              <Box
                bg={useColorModeValue('white', 'gray.800')}
                p={6}
                rounded="lg"
                shadow="md"
                textAlign="center"
              >
                <Avatar
                  size="xl"
                  name="Sarah Johnson"
                  bg="green.500"
                  color="white"
                  mb={4}
                />
                <Heading size="md" mb={2}>
                  Sarah Johnson
                </Heading>
                <Text color="gray.500" mb={2}>
                  Building Committee Chair
                </Text>
                <Text color="gray.600">
                  Overseeing the construction and development of our new building.
                </Text>
              </Box>
              <Box
                bg={useColorModeValue('white', 'gray.800')}
                p={6}
                rounded="lg"
                shadow="md"
                textAlign="center"
              >
                <Avatar
                  size="xl"
                  name="Michael Brown"
                  bg="purple.500"
                  color="white"
                  mb={4}
                />
                <Heading size="md" mb={2}>
                  Michael Brown
                </Heading>
                <Text color="gray.500" mb={2}>
                  Finance Director
                </Text>
                <Text color="gray.600">
                  Managing the building fund and financial planning for the project.
                </Text>
              </Box>
            </SimpleGrid>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
} 