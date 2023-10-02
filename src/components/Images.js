import React from 'react'

import { Image, Box, Stack, Heading } from '@chakra-ui/react'
const Images = () => {
    return (
        <Box margin={'auto'} marginBottom={'5rem'} display={'flex'}
            flexDirection={'column'}
        >
            <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'} textAlign={'center'} py={'3rem'}>
                Zdjęcia
            </Heading>
            <Stack direction='row' display={'flex'} justifyContent={'center'} wrap={'wrap'} gap={'2rem'}>
                <Image width={'100%'} maxWidth={'500px'} src='https://img.freepik.com/darmowe-zdjecie/silacz-trening-na-silowni_1303-23478.jpg?size=626&ext=jpg&ga=GA1.1.351271937.1684318814&semt=sph' alt='Dan Abramov' objectFit={'cover'} />
                <Image width={'100%'} maxWidth={'500px'} src='https://img.freepik.com/darmowe-zdjecie/mlody-czlowiek-w-sportowej-klasy-cwiczen-w-silowni_1150-12372.jpg?size=626&ext=jpg&ga=GA1.1.351271937.1684318814&semt=sph' alt='Dan Abramov' />
                <Image width={'100%'} maxWidth={'500px'} src='https://img.freepik.com/darmowe-zdjecie/koncepcja-moc-sila-zdrowy-styl-zycia-sport-potezny-atrakcyjny-muskularny-mezczyzna-w-silowni_155003-4993.jpg?size=626&ext=jpg&ga=GA1.1.351271937.1684318814&semt=sph' alt='Dan Abramov' />
                <Image width={'100%'} maxWidth={'500px'} src='https://img.freepik.com/darmowe-zdjecie/silacz-trening-na-silowni_1303-23876.jpg?size=626&ext=jpg&ga=GA1.1.351271937.1684318814&semt=sph' />
                <Image width={'100%'} maxWidth={'500px'} src='https://img.freepik.com/darmowe-zdjecie/streszczenie-rozmycie-silownia-i-sala-fitness_74190-4765.jpg?size=626&ext=jpg&ga=GA1.1.351271937.1684318814&semt=sph' />
                <Image width={'100%'} maxWidth={'500px'} src='https://img.freepik.com/darmowe-zdjecie/nie-do-zatrzymania-mlody-muskularny-sportowiec-kaukaski-uprawiajacy-przysiady-w-silowni-z-ciezarem-model-mezczyzna-robi-cwiczenia-silowe-trening-dolnej-czesci-ciala-wellness-zdrowy-styl-zycia-koncepcja-kulturystyki_155003-28004.jpg?size=626&ext=jpg&ga=GA1.1.351271937.1684318814&semt=sph' />

            </Stack>
        </Box>
    )
}

export default Images
