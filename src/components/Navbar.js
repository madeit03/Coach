import React from 'react';
import {
    Box,
    Flex,
    HStack,
    Text,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
const Links = [
    {
        id: "Onas",
        title: 'O nas'
    },
    {
        id: "Cennik",
        title: 'Cennik'
    },
    {
        id: "Kontakt",
        title: 'Kontakt'
    }

]
const NavLink = (props) => {
    const { children, id } = props

    return (
        <Box
            as="a"
            px={2}
            py={1}
            rounded={'md'}
            _hover={{
                cursor: 'pointer',
                textDecoration: 'none',
                bg: useColorModeValue('#11100e'),
            }}
            onClick={(e) => {
                console.log(id)
                const targetElement = document.getElementById(id);
                if (targetElement) {
                    console.log('tak')
                    // Pobieramy jego pozycję względem górnej krawędzi strony
                    const targetPosition = targetElement.getBoundingClientRect().top;

                    // Przewijamy stronę do pozycji celu, uwzględniając bieżącą pozycję przewijania
                    window.scrollTo({
                        top: targetPosition + window.scrollY - 100,
                        behavior: 'smooth' // Użyj płynnego przewijania
                    });
                }


            }}>
            {children}

        </Box>
    )
}

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Box bg={useColorModeValue('#22211f')} px={'2rem'} position={'fixed'} width={'100%'} zIndex={10}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'} >
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'} color={'white'}>
                        <Box>Logo</Box>
                        <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }} color={'white'}>
                            {Links.map((link) => (
                                <NavLink id={link.id} key={link.title}>{link.title}</NavLink>
                            ))}
                        </HStack>
                    </HStack>
                    <Flex alignItems={'center'}>
                        <Menu>
                            <MenuButton
                                as={Button}
                                rounded={'full'}
                                variant={'link'}
                                cursor={'pointer'}
                                minW={0}

                            >
                            </MenuButton>
                            <MenuList >
                                <MenuItem>Link 1</MenuItem>
                                <MenuItem>Link 2</MenuItem>
                                <MenuDivider />
                                <MenuItem>Link 3</MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4} color={'white'}>
                            {Links.map((link) => (
                                <NavLink id={link.id} key={link.title}>{link.title}</NavLink>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>


        </>
    )
}