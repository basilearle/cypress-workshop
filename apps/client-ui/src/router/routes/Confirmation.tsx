import {
  Title,
  Text,
  Container,
  Button,
  Group,
  Box,
  useMantineTheme,
  Paper,
  ThemeIcon,
} from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import { useNavigate } from 'react-router';

export function Confirmation() {
  const theme = useMantineTheme();
  const navigate = useNavigate();

  return (
    <Box py={80}>
      <Container size="md">
        <Paper shadow="md" radius="md" p="xl" withBorder>
          <Group justify="center" mb="lg">
            <ThemeIcon
              size={80}
              radius={80}
              color={theme.colors.green[6]}
            >
              <IconCheck size={50} stroke={1.5} />
            </ThemeIcon>
          </Group>

          <Title order={1} ta="center" mb="md">
            Thank You for Your Selection!
          </Title>

          <Text ta="center" size="lg" mb="xl">
            Your product has been added to your account. Our team will contact you shortly with the next steps.
          </Text>

          <Group justify="center" mt="xl">
            <Button onClick={() => navigate('/')}>
              Return to Home
            </Button>
          </Group>
        </Paper>
      </Container>
    </Box>
  );
}

export default Confirmation;
