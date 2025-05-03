import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  Button,
  useColorModeValue,
  Badge,
  Flex,
  Icon,
  VStack,
  HStack,
  Divider,
} from '@chakra-ui/react'
import { FaCalendarAlt, FaMapMarkerAlt, FaUsers, FaDollarSign } from 'react-icons/fa'

const EventCard = ({ title, date, time, location, description, type, price, spotsLeft }) => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.800')}
      rounded="lg"
      shadow="lg"
      overflow="hidden"
    >
      <Box p={6}>
        <Stack spacing={4}>
          <Stack direction="row" justify="space-between" align="center">
            <Badge
              colorScheme={type === 'fundraiser' ? 'blue' : 'green'}
              px={2}
              py={1}
              rounded="md"
            >
              {type}
            </Badge>
            {spotsLeft && (
              <Text fontSize="sm" color="gray.500">
                {spotsLeft} spots left
              </Text>
            )}
          </Stack>

          <Heading fontSize="xl" fontWeight="bold">
            {title}
          </Heading>

          <VStack align="start" spacing={2}>
            <HStack>
              <Icon as={FaCalendarAlt} color="gray.500" />
              <Text color="gray.600">
                {date} at {time}
              </Text>
            </HStack>
            <HStack>
              <Icon as={FaMapMarkerAlt} color="gray.500" />
              <Text color="gray.600">{location}</Text>
            </HStack>
            {price && (
              <HStack>
                <Icon as={FaDollarSign} color="gray.500" />
                <Text color="gray.600">{price}</Text>
              </HStack>
            )}
          </VStack>

          <Text color="gray.600">{description}</Text>

          <Button
            colorScheme="blue"
            variant="solid"
            width="full"
            mt={2}
          >
            Register Now
          </Button>
        </Stack>
      </Box>
    </Box>
  )
}

export default function Events() {
  const events = [
    {
      title: 'Building Fund Dinner',
      date: 'April 20, 2024',
      time: '6:00 PM',
      location: 'Grand Ballroom, City Center',
      description:
        'Join us for an elegant evening of dinner, entertainment, and fellowship as we raise funds for our new church building.',
      type: 'fundraiser',
      price: '$100 per person',
      spotsLeft: 45,
    },
    {
      title: 'Community Yard Sale',
      date: 'May 5, 2024',
      time: '8:00 AM - 2:00 PM',
      location: 'Church Parking Lot',
      description:
        'Donate your gently used items or come shop! All proceeds will go towards our building fund.',
      type: 'community',
      spotsLeft: null,
    },
    {
      title: 'Building Fund Concert',
      date: 'June 15, 2024',
      time: '7:00 PM',
      location: 'Main Sanctuary',
      description:
        'An evening of worship and music featuring local Christian artists. Free admission with a suggested donation.',
      type: 'fundraiser',
      spotsLeft: 120,
    },
    {
      title: 'Prayer Walk',
      date: 'May 12, 2024',
      time: '9:00 AM',
      location: 'New Building Site',
      description:
        'Join us as we walk and pray over our new building site. We\'ll dedicate the land and pray for God\'s blessing on our project.',
      type: 'community',
      spotsLeft: null,
    },
  ]

  return (
    <Box bg={useColorModeValue('gray.50', 'gray.900')} py={12}>
      <Container maxW="container.xl">
        <Stack spacing={8}>
          <Stack spacing={4} textAlign="center">
            <Heading fontSize="3xl">Upcoming Events</Heading>
            <Text color="gray.600">
              Join us at these upcoming events to support our building fund and
              be part of our growing community.
            </Text>
          </Stack>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            {events.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </SimpleGrid>

          <Box
            bg={useColorModeValue('white', 'gray.800')}
            p={8}
            rounded="lg"
            shadow="md"
          >
            <Stack spacing={6}>
              <Heading fontSize="2xl">Host Your Own Fundraiser</Heading>
              <Text color="gray.600">
                Want to help raise funds for our new church building? We welcome
                community members to organize their own fundraising events.
              </Text>
              <VStack align="start" spacing={4}>
                <HStack>
                  <Icon as={FaUsers} color="blue.500" />
                  <Text>Get support from our fundraising team</Text>
                </HStack>
                <HStack>
                  <Icon as={FaDollarSign} color="blue.500" />
                  <Text>Access to our donation tracking system</Text>
                </HStack>
                <HStack>
                  <Icon as={FaCalendarAlt} color="blue.500" />
                  <Text>Help with event promotion</Text>
                </HStack>
              </VStack>
              <Button colorScheme="blue" size="lg">
                Contact Us to Get Started
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
} 