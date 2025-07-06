import React from "react";
import {Flex, Heading, Text} from "@radix-ui/themes";
import {HeroContent} from "./Hero_content";
import styles from './Hero.module.css';

const Foreground: (_: {
    content: HeroContent
}) => React.JSX.Element = ({ content }) => <div className={styles.foreground}>
    <Heading size='9' color='green' className={styles.heading}>{ content.header }</Heading>

    <Text size='8' className={styles.description}>{ content.description }</Text>
</div>

const Background: () => React.JSX.Element = () => <div className={styles.background}/>

const Hero: (_: {
    content: HeroContent
}) => React.JSX.Element = ({ content }) => <Flex justify='center'>
    <div className={styles.container} >
        <Background/>
        <Foreground content={content} />
    </div>
</Flex>

export default Hero