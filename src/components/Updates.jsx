import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Flex,
  Badge,
  Icon,
  VStack,
  HStack,
} from '@chakra-ui/react'
import { FaCheckCircle, FaCircle, FaClock } from 'react-icons/fa'

const UpdateCard = ({ date, title, description, status, isLast }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'green'
      case 'in-progress':
        return 'blue'
      case 'upcoming':
        return 'gray'
      default:
        return 'gray'
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return FaCheckCircle
      case 'in-progress':
        return FaClock
      case 'upcoming':
        return FaCircle
      default:
        return FaCircle
    }
  }

  return (
    <Flex gap={4}>
      <Flex direction="column" align="center">
        <Icon
          as={getStatusIcon(status)}
          w={6}
          h={6}
          color={useColorModeValue(`${getStatusColor(status)}.500`, `${getStatusColor(status)}.300`)}
        />
        {!isLast && (
          <Box
            w="2px"
            h="full"
            bg={useColorModeValue('gray.200', 'gray.700')}
            my={2}
          />
        )}
      </Flex>
      <Box
        bg={useColorModeValue('white', 'gray.800')}
        p={6}
        rounded="lg"
        shadow="md"
        flex={1}
      >
        <HStack justify="space-between" mb={2}>
          <Text fontWeight="bold" fontSize="lg">
            {title}
          </Text>
          <Badge colorScheme={getStatusColor(status)}>{status}</Badge>
        </HStack>
        <Text color="gray.500" fontSize="sm" mb={2}>
          {date}
        </Text>
        <Text color={useColorModeValue('gray.600', 'gray.400')}>
          {description}
        </Text>
      </Box>
    </Flex>
  )
}

export default function Updates() {
  const updates = [
    {
      date: 'March 15, 2024',
      title: 'Building Permit Approved',
      description:
        'We have received official approval for our building permit. This marks a significant milestone in our journey to build our new church home.',
      status: 'completed',
    },
    {
      date: 'April 1, 2024',
      title: 'Groundbreaking Ceremony',
      description:
        'Join us for our groundbreaking ceremony as we officially begin construction on our new church building. The event will include prayers, speeches, and a community celebration.',
      status: 'in-progress',
    },
    {
      date: 'May 2024',
      title: 'Foundation Work Begins',
      description:
        'Construction crews will begin work on the foundation of our new building. This phase is expected to take approximately 4-6 weeks.',
      status: 'upcoming',
    },
    {
      date: 'July 2024',
      title: 'Framing and Structure',
      description:
        'The main structure of the building will begin to take shape as the framing work commences. This is when our vision will start becoming a reality.',
      status: 'upcoming',
    },
    {
      date: 'October 2024',
      title: 'Interior Work Begins',
      description:
        'With the structure complete, work will begin on the interior spaces including the worship center, classrooms, and community areas.',
      status: 'upcoming',
    },
  ]

  return (
    <Box bg={useColorModeValue('gray.50', 'gray.900')} py={12}>
      <Container maxW="container.lg">
        <Stack spacing={8}>
          <Stack spacing={4} textAlign="center">
            <Heading fontSize="3xl">Building Progress Updates</Heading>
            <Text color="gray.600">
              Stay informed about the latest developments in our building project.
              We'll keep you updated on milestones, achievements, and upcoming events.
            </Text>
          </Stack>

          <VStack spacing={8} align="stretch">
            {updates.map((update, index) => (
              <UpdateCard
                key={index}
                {...update}
                isLast={index === updates.length - 1}
              />
            ))}
          </VStack>

          <Box
            bg={useColorModeValue('white', 'gray.800')}
            p={6}
            rounded="lg"
            shadow="md"
            textAlign="center"
          >
            <Heading fontSize="xl" mb={4}>
              Want to Stay Updated?
            </Heading>
            <Text color="gray.600">
              Subscribe to our newsletter to receive regular updates about the
              building progress and upcoming events.
            </Text>
            <Stack
              direction={{ base: 'column', md: 'row' }}
              spacing={4}
              mt={6}
              justify="center"
            >
              <Text
                as="a"
                href="#"
                color="blue.500"
                fontWeight="bold"
                _hover={{ textDecoration: 'underline' }}
              >
                Subscribe to Updates →
              </Text>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
} 