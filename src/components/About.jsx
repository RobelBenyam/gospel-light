import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  Image,
  useColorModeValue,
  Avatar,
  Flex,
  Icon,
} from '@chakra-ui/react'
import { FaChurch, FaHandshake, FaUsers } from 'react-icons/fa'

const Feature = ({ title, text, icon }) => {
  return (
    <Stack spacing={4} align="center" textAlign="center">
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={useColorModeValue('blue.500', 'blue.300')}
        mb={1}
      >
        <Icon as={icon} w={10} h={10} />
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={useColorModeValue('gray.600', 'gray.400')}>{text}</Text>
    </Stack>
  )
}

const LeadershipCard = ({ name, role, image }) => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'xl'}
      rounded={'md'}
      overflow={'hidden'}
      p={6}
      textAlign={'center'}
    >
      <Avatar
        size={'2xl'}
        src={image}
        alt={name}
        mb={4}
        pos={'relative'}
      />
      <Heading fontSize={'2xl'} fontFamily={'body'}>
        {name}
      </Heading>
      <Text fontWeight={600} color={'gray.500'} mb={4}>
        {role}
      </Text>
    </Box>
  )
}

export default function About() {
  return (
    <Box bg={useColorModeValue('gray.50', 'gray.900')}>
      {/* History Section */}
      <Container maxW={'7xl'} py={12}>
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'} mb={12}>
          <Heading fontSize={'3xl'}>Our Story</Heading>
          <Text color={'gray.600'} fontSize={'xl'}>
            Gospel Light Church has been a beacon of hope in our community since 1995.
            What started as a small gathering of believers has grown into a vibrant
            community of faith, serving thousands of families in our area.
          </Text>
        </Stack>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Feature
            icon={FaChurch}
            title={'Our Beginning'}
            text={'Founded in 1995 with just 20 members, we began our journey of faith and service'}
          />
          <Feature
            icon={FaHandshake}
            title={'Community Impact'}
            text={'Serving our community through various outreach programs and ministries'}
          />
          <Feature
            icon={FaUsers}
            title={'Growing Family'}
            text={'Now serving over 500 families with diverse programs for all ages'}
          />
        </SimpleGrid>
      </Container>

      {/* Vision Section */}
      <Box bg={useColorModeValue('white', 'gray.800')} py={12}>
        <Container maxW={'7xl'}>
          <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'} mb={12}>
            <Heading fontSize={'3xl'}>Our Vision</Heading>
            <Text color={'gray.600'} fontSize={'xl'}>
              We envision a new church home that will serve as a center for worship,
              community service, and spiritual growth. Our new building will enable us
              to expand our ministries and better serve our growing congregation.
            </Text>
          </Stack>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Box>
              <Heading fontSize={'2xl'} mb={4}>Building Plans</Heading>
              <Text color={'gray.600'}>
                Our new church will feature:
                • A 500-seat worship center
                • Modern classrooms for Sunday School
                • Youth and children's ministry spaces
                • Community gathering areas
                • Administrative offices
                • State-of-the-art audio/visual systems
              </Text>
            </Box>
            <Box>
              <Heading fontSize={'2xl'} mb={4}>Future Impact</Heading>
              <Text color={'gray.600'}>
                With our new facility, we will be able to:
                • Host larger community events
                • Expand our youth programs
                • Provide more space for Bible studies
                • Better serve our growing congregation
                • Create a welcoming environment for visitors
              </Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Leadership Section */}
      <Container maxW={'7xl'} py={12}>
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'} mb={12}>
          <Heading fontSize={'3xl'}>Our Leadership</Heading>
          <Text color={'gray.600'} fontSize={'xl'}>
            Meet the dedicated team leading our church and building project
          </Text>
        </Stack>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <LeadershipCard
            name={'Pastor John Smith'}
            role={'Senior Pastor'}
            image={'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'}
          />
          <LeadershipCard
            name={'Sarah Johnson'}
            role={'Building Committee Chair'}
            image={'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'}
          />
          <LeadershipCard
            name={'Michael Brown'}
            role={'Finance Director'}
            image={'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'}
          />
        </SimpleGrid>
      </Container>
    </Box>
  )
} 