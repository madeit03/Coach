import React from 'react';
import { Stack, Flex, Button, Text, VStack, useBreakpointValue } from '@chakra-ui/react'

export default function Hero() {
    return (
        <Flex
            w={'full'}
            h={'100vh'}
            backgroundImage={
                'url(https://cdn.discordapp.com/attachments/797099582139793408/1152207626457862195/pexels-victor-freitas-2261477.jpg)'
            }
            backgroundSize={'cover'}
            backgroundPosition={'center center'}>
            <VStack
                w={'full'}
                justify={'center'}
                px={useBreakpointValue({ base: 4, md: 8 })}
                bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
                <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
                    <Text
                        color={'white'}
                        fontWeight={700}
                        lineHeight={1.2}
                        fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
                        Trenuj z głową - Wybierz nas jeśli chcesz osiągać znakomite efekty.
                    </Text>
                    <Stack direction={'row'}>
                        <Button
                            bg={'#22211f'}
                            rounded={'full'}
                            color={'white'}
                            _hover={{ bg: '#00000e' }}
                            onClick={(e) => {

                                const targetElement = document.getElementById("Onas");
                                if (targetElement) {
                                    console.log('tak')
                                    // Pobieramy jego pozycję względem górnej krawędzi strony
                                    const targetPosition = targetElement.getBoundingClientRect().top;
                                    console.log('targetPosition:', targetPosition);
                                    console.log('window.scrollY:', window.scrollY)
                                    // Przewijamy stronę do pozycji celu, uwzględniając bieżącą pozycję przewijania
                                    window.scrollTo({
                                        top: targetPosition + window.scrollY - 100,
                                        behavior: 'smooth' // Użyj płynnego przewijania
                                    });
                                }


                            }}
                        >
                            Sprawdź
                        </Button>
                        {/* <Button
                            bg={'whiteAlpha.300'}
                            rounded={'full'}
                            color={'white'}
                            _hover={{ bg: 'whiteAlpha.500' }}>
                            Show me more
                        </Button> */}
                    </Stack>
                </Stack>
            </VStack>
        </Flex >
    )
}