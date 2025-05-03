import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
  Radio,
  RadioGroup,
  Select,
  Textarea,
  VStack,
  HStack,
  useToast,
} from '@chakra-ui/react'
import { useState } from 'react'

const DonationAmount = ({ amount, isSelected, onClick }) => (
  <Button
    w="full"
    h="60px"
    variant={isSelected ? 'solid' : 'outline'}
    colorScheme={isSelected ? 'blue' : 'gray'}
    onClick={onClick}
    fontSize="xl"
    fontWeight="bold"
  >
    ${amount}
  </Button>
)

export default function Give() {
  const [amount, setAmount] = useState('')
  const [customAmount, setCustomAmount] = useState('')
  const [frequency, setFrequency] = useState('one-time')
  const [paymentMethod, setPaymentMethod] = useState('credit')
  const toast = useToast()

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically handle the payment processing
    toast({
      title: 'Thank you for your donation!',
      description: 'Your contribution will help us build our new church home.',
      status: 'success',
      duration: 5000,
      isClosable: true,
    })
  }

  return (
    <Box bg={useColorModeValue('gray.50', 'gray.900')} py={12}>
      <Container maxW="container.md">
        <Stack spacing={8}>
          <Stack spacing={4} textAlign="center">
            <Heading fontSize="3xl">Support Our Building Fund</Heading>
            <Text color="gray.600">
              Your generous contribution will help us build a new home for our church
              community. Every donation makes a difference.
            </Text>
          </Stack>

          <Box
            bg={useColorModeValue('white', 'gray.700')}
            rounded="xl"
            p={8}
            shadow="lg"
          >
            <form onSubmit={handleSubmit}>
              <VStack spacing={6}>
                <FormControl>
                  <FormLabel>Select Donation Amount</FormLabel>
                  <RadioGroup value={amount} onChange={setAmount}>
                    <Stack spacing={4}>
                      <HStack spacing={4}>
                        <DonationAmount
                          amount="25"
                          isSelected={amount === '25'}
                          onClick={() => setAmount('25')}
                        />
                        <DonationAmount
                          amount="50"
                          isSelected={amount === '50'}
                          onClick={() => setAmount('50')}
                        />
                        <DonationAmount
                          amount="100"
                          isSelected={amount === '100'}
                          onClick={() => setAmount('100')}
                        />
                      </HStack>
                      <HStack spacing={4}>
                        <DonationAmount
                          amount="250"
                          isSelected={amount === '250'}
                          onClick={() => setAmount('250')}
                        />
                        <DonationAmount
                          amount="500"
                          isSelected={amount === '500'}
                          onClick={() => setAmount('500')}
                        />
                        <DonationAmount
                          amount="1000"
                          isSelected={amount === '1000'}
                          onClick={() => setAmount('1000')}
                        />
                      </HStack>
                    </Stack>
                  </RadioGroup>
                </FormControl>

                <FormControl>
                  <FormLabel>Custom Amount</FormLabel>
                  <Input
                    type="number"
                    placeholder="Enter amount"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value)
                      setAmount('custom')
                    }}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Donation Frequency</FormLabel>
                  <RadioGroup value={frequency} onChange={setFrequency}>
                    <Stack direction="row" spacing={8}>
                      <Radio value="one-time">One-time</Radio>
                      <Radio value="monthly">Monthly</Radio>
                      <Radio value="quarterly">Quarterly</Radio>
                    </Stack>
                  </RadioGroup>
                </FormControl>

                <FormControl>
                  <FormLabel>Payment Method</FormLabel>
                  <Select
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  >
                    <option value="credit">Credit Card</option>
                    <option value="debit">Debit Card</option>
                    <option value="bank">Bank Transfer</option>
                  </Select>
                </FormControl>

                <FormControl>
                  <FormLabel>Message (Optional)</FormLabel>
                  <Textarea
                    placeholder="Add a message with your donation..."
                    rows={3}
                  />
                </FormControl>

                <Button
                  type="submit"
                  colorScheme="blue"
                  size="lg"
                  width="full"
                  mt={4}
                >
                  Donate Now
                </Button>
              </VStack>
            </form>
          </Box>

          <Box textAlign="center" color="gray.600">
            <Text fontSize="sm">
              Your donation is secure and tax-deductible. A receipt will be sent to
              your email address.
            </Text>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
} 