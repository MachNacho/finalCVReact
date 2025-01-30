import { useEffect, useState } from 'react';
import { Burger, Container, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import { Link, useLocation } from "react-router-dom";
import classes from './HeaderSimple.module.css';

const links = [
  { link: '/', label: 'Home' },
  { link: '/Details', label: 'Details' },
  { link: '/Hobbies', label: 'Hobbies' },
  { link: '/ContactMe', label: 'Contact me' },
];

export function HeaderSimple() {
  const [opened, { toggle }] = useDisclosure(false);
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  const items = links.map((link) => (
    <Link
      key={link.label}
      to={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={() => {
        setActive(link.link);
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <MantineLogo size={28} />
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}