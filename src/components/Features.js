import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Icon,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react'
import React, { ReactElement } from 'react'
import {
    FcAbout,
    FcAssistant,
    FcCollaboration,
    FcDonate,
    FcManager,
    FcCalendar,
    FcVideoCall
} from 'react-icons/fc'

const Card = ({ heading, description, icon, href }) => {
    return (
        <Box

            maxW={{ base: 'full', md: '275px' }}
            w={'full'}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p={5}>
            <Stack align={'start'} spacing={2}>
                <Flex
                    w={16}
                    h={16}
                    align={'center'}
                    justify={'center'}
                    color={'white'}
                    rounded={'full'}
                    bg={useColorModeValue('gray.100', 'gray.700')}>
                    {icon}
                </Flex>
                <Box mt={2}>
                    <Heading size="md">{heading}</Heading>
                    <Text mt={1} fontSize={'sm'}>
                        {description}
                    </Text>
                </Box>
                <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
                    Dowiedz się więcej
                </Button>
            </Stack>
        </Box>
    )
}

export default function Features() {
    return (
        <Box id="Onas" p={4} marginTop={'3rem'} marginBottom={
            {
                base: '5rem',
                lg: '8rem'

            }


        }>
            <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'} >
                <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
                    Dlaczego my?
                </Heading>
                <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
                    Korzyści płynące ze współpracy z Nami
                </Text>
            </Stack>

            <Container maxW={'5xl'} mt={12}>
                <Flex flexWrap="wrap" gridGap={6} justify="center">
                    <Card
                        heading={'Spersonalizowany Plan Treningowy'}
                        icon={<Icon as={FcCalendar} w={10} h={10} />}
                        description={'Nasz zespół doświadczonych trenerów stworzy dla Ciebie spersonalizowany plan treningowy, dostosowany do Twoich celów i umiejętności.'}
                        href={'#'}
                    />
                    <Card
                        heading={'Dedykowane Szkolenie'}
                        icon={<Icon as={FcCollaboration} w={10} h={10} />}
                        description={'Oferujemy indywidualne sesje treningowe, dzięki którym masz pełną uwagę trenera, co pomaga w osiągnięciu szybszych wyników.'}
                        href={'#'}
                    />
                    <Card
                        heading={'Dieta i Plan Żywieniowy'}
                        icon={<Icon as={FcDonate} w={10} h={10} />}
                        description={'Nasi eksperci ds. żywienia opracują dla Ciebie plan żywieniowy, który pomoże Ci osiągnąć optymalne wyniki i utrzymać zdrową dietę.'}
                        href={'#'}
                    />
                    <Card
                        heading={'Monitorowanie Postępów'}
                        icon={<Icon as={FcVideoCall} w={10} h={10} />}
                        description={'Śledzimy Twoje postępy i dostosowujemy program treningowy, aby zapewnić Ci najwyższą skuteczność i motywację.'}
                        href={'#'}
                    />
                    <Card
                        heading={'Wsparcie Trenera 24/7'}
                        icon={<Icon as={FcAssistant} w={10} h={10} />}
                        description={'Nasz zespół trenerów jest dostępny, aby odpowiedzieć na Twoje pytania i oferować wsparcie przez całą dobę, zapewniając Ci pełen komfort i pewność siebie.'}
                        href={'#'}
                    />
                </Flex>
            </Container>
        </Box>
    )
}