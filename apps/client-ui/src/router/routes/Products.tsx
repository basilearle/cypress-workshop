import {
  Title,
  Text,
  Container,
  Button,
  Group,
  Card,
  SimpleGrid,
  Image,
  Badge,
  useMantineTheme,
  Box,
  Loader,
  Center,
} from '@mantine/core';
import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import { Product } from '../../data/products';

export function Products() {
  const theme = useMantineTheme();
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch products from the API
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Failed to load products. Please try again later.');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

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

  const handleSelectProduct = (productId: number) => {
    console.log(`Selected product: ${productId}`);
    // In a real application, you would store the selected product in state or context
    // and then use it in the confirmation page
    navigate('/confirmation');
  };

  const productCards = products.map((product) => (
    <Card key={product.id} shadow="md" radius="md" padding="lg" withBorder>
      <Card.Section>
        <Image
          src={product.image}
          height={180}
          alt={product.name}
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={700} fz="lg">{product.name}</Text>
        <Badge color={theme.primaryColor} variant="light">
          {product.category}
        </Badge>
      </Group>

      <Text size="sm" c="dimmed" mb="md">
        {product.description}
      </Text>

      <Group gap="xs" mb="md">
        {product.features.map((feature) => (
          <Badge key={feature} variant="outline">
            {feature}
          </Badge>
        ))}
      </Group>

      <Group justify="space-between" mt="md">
        <Text fw={700} fz="xl" c={theme.primaryColor}>
          ${product.price.toFixed(2)}
        </Text>
        <Button onClick={() => handleSelectProduct(product.id)}>
          Select
        </Button>
      </Group>
    </Card>
  ));

  return (
    <>
      <Box bg={theme.colors.gray[0]} py={40}>
        <Container size="lg">
          <Title order={1} ta="center" mb="sm">
            Our Products
          </Title>
          <Text ta="center" c="dimmed" size="lg" mb={50} maw={800} mx="auto">
            Choose from our range of innovative solutions designed to help your business grow and succeed
          </Text>
          <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing={30}>
            {productCards}
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
}

export default Products;
