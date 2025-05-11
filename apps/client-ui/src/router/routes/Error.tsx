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
import { IconAlertTriangle } from '@tabler/icons-react';
import { useNavigate, useSearchParams } from 'react-router';

export function Error() {
  const theme = useMantineTheme();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // Get error message from URL query parameter or use default
  const errorMessage = searchParams.get('message') || 'Something went wrong. Please try again later.';

  return (
    <Box py={80}>
      <Container size="md">
        <Paper shadow="md" radius="md" p="xl" withBorder>
          <Group justify="center" mb="lg">
            <ThemeIcon
              size={80}
              radius={80}
              color={theme.colors.red[6]}
            >
              <IconAlertTriangle size={50} stroke={1.5} />
            </ThemeIcon>
          </Group>

          <Title order={1} ta="center" mb="md">
            Error
          </Title>

          <Text ta="center" size="lg" mb="xl" color="red">
            {errorMessage}
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

export default Error;
