import React from "react";
import {Flex, Heading, Text} from "@radix-ui/themes";
import {heroContent} from "./Hero_content";
import styles from './Hero.module.css';

const Hero: () => React.JSX.Element = () => <Flex justify='center'>
    <div className={styles.container} >

        <div className={styles.background}/>

        <div className={styles.foreground}>
            <Heading size='9' color='green' className={styles.heading}>{ heroContent.header }</Heading>

            <Text size='8' className={styles.description}>{ heroContent.description }</Text>
        </div>

    </div>
</Flex>

export default Hero