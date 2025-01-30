import { Container, Overlay, Text, Title } from '@mantine/core';
import classes from './HeroImageBackground.module.css';

export function HeroImageBackground() {
  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          Welcome to my website{' '}
          <Text component="span" inherit className={classes.highlight}>
            
          </Text>
        </Title>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
           Hey my name is Asiphile Mokweni
          </Text>
        </Container>


      </div>
    </div>
  );
}