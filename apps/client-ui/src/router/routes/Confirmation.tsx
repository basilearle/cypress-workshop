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
  Image,
  Badge,
  Loader,
  Center,
} from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import { useNavigate, useSearchParams } from 'react-router';
import { useState, useEffect } from 'react';
import { Product } from '~/data-fixtures';

export function Confirmation() {
  const theme = useMantineTheme();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Get product ID from URL query parameters
  const productId = searchParams.get('productId');

  useEffect(() => {
    // Check for productId inside useEffect to properly trigger error boundary
    if (!productId) {
      throw new Error('No product selected');
    }
    const fetchProductDetails = async () => {
      try {
        // Fetch the product details from the API
        const response = await fetch(`/api/products/${productId}`);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching product details:', err);
        setError('Failed to load product details. Please try again later.');
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [productId]);

  // Show loading state
  if (loading) {
    return (
      <Center style={{ height: '70vh' }}>
        <Loader size="xl" />
      </Center>
    );
  }

  // Show error state
  if (error) {
    return (
      <Center style={{ height: '70vh' }}>
        <Text color="red" size="xl">{error}</Text>
      </Center>
    );
  }

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

          {product && (
            <Paper shadow="sm" radius="md" p="md" withBorder mb="xl">
              <Group>
                <Image
                  src={product.image}
                  height={120}
                  width={180}
                  fit="cover"
                  radius="md"
                  alt={product.name}
                />
                <Box style={{ flex: 1 }}>
                  <Group justify="space-between" mb="xs">
                    <Title order={3}>{product.name}</Title>
                    <Badge color={theme.primaryColor} variant="light" size="lg">
                      {product.category}
                    </Badge>
                  </Group>
                  <Text size="sm" mb="md">{product.description}</Text>
                  <Group justify="space-between">
                    <Group gap="xs">
                      {product.features.map((feature) => (
                        <Badge key={feature} variant="outline">
                          {feature}
                        </Badge>
                      ))}
                    </Group>
                    <Text fw={700} fz="lg" c={theme.primaryColor}>
                      ${product.price.toFixed(2)}
                    </Text>
                  </Group>
                </Box>
              </Group>
            </Paper>
          )}

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
