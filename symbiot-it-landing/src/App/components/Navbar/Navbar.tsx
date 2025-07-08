import {DropdownMenu, Flex, Link, Text} from '@radix-ui/themes';
import React, {ReactElement, ReactNode} from 'react';
import {PersonIcon} from "@radix-ui/react-icons";
import styles from './Navbar.module.css';

const Navbar: () => ReactElement = () => <Flex
    justify="between"
    align="center"
    p="4"
    className={styles.bar}
>
    {/* Logo */}
    <Text size="5" weight="bold">
        <Link href="/">Symbiot </Link>
    </Text>

    {/* Menu */}
    <Flex gap="4" align="center">
        <NavButton href="/platforma"> Platforma </NavButton> <Divider/>
        <NavButton href="/wycena"> Wycena </NavButton> <Divider/>
        <NavButton href="/symdolce"> SymDolce </NavButton> <Divider/>
        <NavButton href="/kontakt"> Kontakt </NavButton> <Divider/>

        <DropdownMenu.Root>
            <DropdownMenu.Trigger>
                <PersonIcon width={24} height={24}/>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
                <DropdownMenu.Item>Profil</DropdownMenu.Item>
                <DropdownMenu.Item>Ustawienia</DropdownMenu.Item>
                <DropdownMenu.Separator />
                <DropdownMenu.Item color="red">Wyloguj</DropdownMenu.Item>
            </DropdownMenu.Content>
        </DropdownMenu.Root>
    </Flex>
</Flex>

const NavButton: (_: {
    href: string,
    children: ReactNode
}) => ReactElement = (props) => <Link
    size='5'
    className={styles.navButton}
    href={props.href}
> {props.children} </Link>

const Divider: () => ReactElement = () => <Text color='gray'>|</Text>

export default Navbar;