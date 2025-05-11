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
} from '@mantine/core';
import { useNavigate } from 'react-router';

// Sample product data
const products = [
  {
    id: 1,
    name: 'Premium Business Suite',
    description: 'Complete solution for enterprise businesses with advanced analytics and reporting',
    price: 999.99,
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    category: 'Enterprise',
    features: ['Advanced Analytics', '24/7 Support', 'Cloud Integration']
  },
  {
    id: 2,
    name: 'Small Business Package',
    description: 'Perfect for small to medium businesses looking to optimize their operations',
    price: 499.99,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    category: 'SMB',
    features: ['Basic Analytics', 'Email Support', 'Local Deployment']
  },
  {
    id: 3,
    name: 'Startup Essentials',
    description: 'Essential tools for startups to grow and scale their business efficiently',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    category: 'Startup',
    features: ['Growth Metrics', 'Community Support', 'Scalable Architecture']
  },
  {
    id: 4,
    name: 'E-commerce Solution',
    description: 'Complete e-commerce platform with inventory management and payment processing',
    price: 799.99,
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    category: 'E-commerce',
    features: ['Inventory Management', 'Payment Processing', 'Customer Analytics']
  },
  {
    id: 5,
    name: 'Marketing Toolkit',
    description: 'Comprehensive marketing tools to boost your brand presence and customer engagement',
    price: 399.99,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    category: 'Marketing',
    features: ['Social Media Integration', 'Campaign Analytics', 'Content Management']
  },
  {
    id: 6,
    name: 'Customer Support Platform',
    description: 'Streamline your customer support with our comprehensive ticketing and chat system',
    price: 599.99,
    image: 'https://images.unsplash.com/photo-1560438718-eb61ede255eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    category: 'Support',
    features: ['Ticketing System', 'Live Chat', 'Customer Feedback']
  }
];

export function Products() {
  const theme = useMantineTheme();
  const navigate = useNavigate();

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
