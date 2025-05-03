import {
  Box,
  Button,
  Container,
  Heading,
  Stack,
  Text,
  useColorModeValue,
  Image,
  SimpleGrid,
  Icon,
  Flex,
} from '@chakra-ui/react'
import { FaChurch, FaHandsHelping, FaPray } from 'react-icons/fa'

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

export default function Home() {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}
      >
        <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
          <Stack spacing={4} align={'center'} textAlign={'center'}>
            <Heading
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
              lineHeight={'110%'}
            >
              Welcome to{' '}
              <Text as={'span'} color={'blue.400'}>
                Gospel Light
              </Text>
            </Heading>
            <Text color={'gray.600'} maxW={'3xl'}>
              Join us in our mission to build a new home for our church community.
              Together, we can create a space that will serve generations to come.
            </Text>
            <Stack spacing={6} direction={'row'}>
              <Button
                rounded={'full'}
                px={6}
                colorScheme={'blue'}
                bg={'blue.400'}
                _hover={{ bg: 'blue.500' }}
              >
                Give Now
              </Button>
              <Button rounded={'full'} px={6}>
                Learn More
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* Mission Section */}
      <Box p={4}>
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
          <Heading fontSize={'3xl'}>Our Mission</Heading>
          <Text color={'gray.600'} fontSize={'xl'}>
            We are raising funds to build a new church that will serve as a beacon
            of hope and faith in our community. This new space will allow us to
            expand our ministries and better serve those in need.
          </Text>
        </Stack>

        <Container maxW={'6xl'} mt={10}>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Feature
              icon={FaChurch}
              title={'New Home'}
              text={'A modern, welcoming space for worship and community gatherings'}
            />
            <Feature
              icon={FaHandsHelping}
              title={'Community Impact'}
              text={'Expanded programs to serve our community and those in need'}
            />
            <Feature
              icon={FaPray}
              title={'Spiritual Growth'}
              text={'Enhanced facilities for Bible study, youth programs, and prayer'}
            />
          </SimpleGrid>
        </Container>
      </Box>

      {/* Progress Section */}
      <Box bg={useColorModeValue('gray.50', 'gray.900')} p={4}>
        <Container maxW={'7xl'} py={16}>
          <Stack spacing={4} align={'center'} textAlign={'center'}>
            <Heading fontSize={'3xl'}>Building Fund Progress</Heading>
            <Text color={'gray.600'} fontSize={'xl'}>
              Our goal: $1,000,000
            </Text>
            <Box
              w="full"
              bg={useColorModeValue('gray.200', 'gray.700')}
              rounded="full"
              h="35px"
            >
              <Box
                w="45%"
                bg="blue.400"
                h="35px"
                rounded="full"
                textAlign="right"
                pr={4}
                color="white"
                fontWeight="bold"
              >
                45%
              </Box>
            </Box>
            <Text color={'gray.600'}>$450,000 raised so far</Text>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
} 