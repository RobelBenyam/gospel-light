import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  useColorModeValue,
  Image,
  Badge,
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

const EventCard = ({ title, date, time, location, description, image, category }) => {
  return (
    <Card>
      <Box
        h="200px"
        mb={4}
        rounded="lg"
        overflow="hidden"
        shadow="md"
        position="relative"
      >
        <Image
          src={image}
          alt={title}
          objectFit="cover"
          w="full"
          h="full"
        />
        <Badge
          position="absolute"
          top={4}
          right={4}
          colorScheme="blue"
          px={3}
          py={1}
          rounded="full"
          fontSize="sm"
        >
          {category}
        </Badge>
      </Box>
      <Stack spacing={3}>
        <Heading size="md" color="blue.500">
          {title}
        </Heading>
        <Flex direction="column" color="gray.600" fontSize="sm">
          <Text fontWeight="medium">{date}</Text>
          <Text>{time}</Text>
          <Text>{location}</Text>
        </Flex>
        <Text color="gray.600" mt={2}>
          {description}
        </Text>
      </Stack>
    </Card>
  )
}

export default function Events() {
  const events = [
    {
      title: 'Building Fund Kickoff Dinner',
      date: 'March 15, 2024',
      time: '6:00 PM - 8:00 PM',
      location: 'Main Fellowship Hall',
      description: 'Join us for an evening of fellowship and vision casting as we launch our building fund campaign. Enjoy a catered dinner and learn about our plans for the new church building.',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      category: 'Fundraising',
    },
    {
      title: 'Community Open House',
      date: 'March 22, 2024',
      time: '2:00 PM - 5:00 PM',
      location: 'Current Church Building',
      description: 'Tour our current facilities and see the plans for our new building. Meet our leadership team and learn how you can be part of this exciting project.',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      category: 'Community',
    },
    {
      title: 'Prayer and Worship Night',
      date: 'March 29, 2024',
      time: '7:00 PM - 9:00 PM',
      location: 'Main Sanctuary',
      description: 'A special evening of prayer and worship dedicated to our building project. Come join us as we seek God\'s guidance and blessing for this important ministry.',
      image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      category: 'Worship',
    },
  ]

  return (
    <Box bg={useColorModeValue('gray.50', 'gray.900')} py={12}>
      <Container maxW="container.xl">
        <Stack spacing={8}>
          <Stack spacing={4} textAlign="center">
            <Heading fontSize="3xl">Upcoming Events</Heading>
            <Text color="gray.600" fontSize="lg" maxW="3xl" mx="auto">
              Join us for these special events as we work together to build our new church home.
              Your presence and participation make a difference in our community.
            </Text>
          </Stack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {events.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </SimpleGrid>

          <Box
            bg={useColorModeValue('white', 'gray.800')}
            p={8}
            rounded="xl"
            shadow="md"
            textAlign="center"
            borderWidth="1px"
            borderColor={useColorModeValue('gray.200', 'gray.700')}
          >
            <Heading size="md" mb={4} color="blue.500">
              Can't Make It?
            </Heading>
            <Text color="gray.600" mb={4}>
              We understand that not everyone can attend our events. You can still support our
              building project by making a donation or signing up for our newsletter to stay
              updated on our progress.
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4} justify="center">
              <Box
                as="button"
                px={6}
                py={3}
                bg="blue.500"
                color="white"
                rounded="full"
                _hover={{ bg: 'blue.600' }}
                transition="all 0.2s"
              >
                Give Now
              </Box>
              <Box
                as="button"
                px={6}
                py={3}
                borderWidth="2px"
                borderColor="blue.500"
                color="blue.500"
                rounded="full"
                _hover={{ bg: 'blue.50' }}
                transition="all 0.2s"
              >
                Subscribe to Updates
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
} 