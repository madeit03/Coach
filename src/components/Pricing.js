
import React from 'react'
import {
    Box,
    Button,
    Divider,
    Heading,
    List,
    ListIcon,
    ListItem,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react'
import { FaCheckCircle } from 'react-icons/fa'
import { color } from 'framer-motion'

const options = [
    { id: 1, desc: '1 lorem ipsum' },
    { id: 2, desc: 'Lorem, ipsum dolor.' },
    { id: 3, desc: 'Monthly Updates' },
]

const PackageTier = ({ title, options, typePlan, checked = false }) => {
    // const colorTextLight = checked ? 'white' : 'purple.800'
    // const bgColorLight = checked ? 'purple.500' : 'gray.100'

    // const colorTextDark = checked ? 'white' : 'purple.500'
    // const bgColorDark = checked ? 'purple.400' : 'gray.400'

    return (
        <Stack
            p={3}
            py={3}
            justifyContent={{
                base: 'flex-start',
                md: 'space-around',
            }}
            direction={{
                base: 'column',
                md: 'row',
            }}
            alignItems={{ md: 'center' }}>
            <Heading size={'md'}>{title}</Heading>
            <List spacing={3} textAlign="start">
                {options.map((desc, id) => (
                    <ListItem key={desc.id}>
                        <ListIcon as={FaCheckCircle} color="green.500" />
                        {desc.desc}
                    </ListItem>
                ))}
            </List>
            <Heading size={'xl'}>{typePlan}</Heading>
            <Stack>
                <Button
                    size="md"
                    color={'white'}
                    backgroundColor={checked ? "purple.700" : "purple.400"}
                    _hover={{ backgroundColor: checked ? "purple.900" : "purple.500" }}
                >
                    Wybieram
                </Button>
            </Stack>
        </Stack>
    )
}
const Pricing = () => {
    return (
        <Box id="Cennik" py={6} px={5} width="100%" maxWidth={'1100px'} margin={'auto'} my={{
            base: '1rem',
            lg: '4rem'
        }}>
            <Stack spacing={4} width={'100%'} direction={'column'}>
                <Stack
                    p={5}
                    alignItems={'center'}
                    justifyContent={{
                        base: 'flex-start',
                        md: 'space-around',
                    }}
                    direction={{
                        base: 'column',
                        md: 'row',
                    }}>
                    <Stack
                        width={{
                            base: '100%',
                            md: '40%',
                        }}
                        textAlign={'center'}>
                        <Heading size={'lg'}>
                            Cennik <Text color="purple">dla wielu budżetów</Text>
                        </Heading>
                    </Stack>
                    <Stack
                        width={{
                            base: '100%',
                            md: '60%',
                        }}>
                        <Text textAlign={'center'}>
                            Wybierz pakiet, który najlepiej odpowiada Twoim potrzebom.
                        </Text>
                    </Stack>
                </Stack>
                <Divider />

                <PackageTier title={'Starter'} typePlan="200zł/miesiąc" options={
                    [
                        { id: 1, desc: 'Personalne plany treningowe' },
                        { id: 2, desc: 'Wsparcie 24/7' },
                        { id: 3, desc: 'Dostęp do aplikacji mobilnej' },
                    ]
                } />

                <Divider />

                <PackageTier
                    title={'Premium'}
                    checked={true}
                    typePlan="500zł/miesiąc"
                    options={
                        [
                            { id: 1, desc: 'Personalne plany treningowe' },
                            { id: 2, desc: 'Wsparcie 24/7' },
                            { id: 3, desc: 'Dostęp do aplikacji mobilnej' },
                            { id: 4, desc: 'Indywidualne sesje treningowe' },
                            { id: 5, desc: 'Niestandardowe plany dietetyczne' },
                            { id: 6, desc: 'Konsultacje online' },
                        ]
                    }
                />
                <Divider />

                <PackageTier title={'Ultimate'} typePlan="900zł/miesiąc" options={[
                    { id: 1, desc: 'Personalne plany treningowe' },
                    { id: 2, desc: 'Wsparcie 24/7' },
                    { id: 3, desc: 'Dostęp do aplikacji mobilnej' },
                    { id: 4, desc: 'Indywidualne sesje treningowe' },
                    { id: 5, desc: 'Niestandardowe plany dietetyczne' },
                    { id: 6, desc: 'Konsultacje online' },
                    { id: 7, desc: 'Treningi grupowe' },
                    { id: 8, desc: 'Dostęp do zajęć fitness online' },
                    { id: 9, desc: 'Analiza postępów i statystyk' },
                ]} />
            </Stack>
        </Box>
    )
}

export default Pricing;