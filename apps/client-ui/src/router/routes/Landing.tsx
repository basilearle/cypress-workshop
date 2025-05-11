import {
  Title,
  Text,
  Container,
  Button,
  Group,
  Card,
  SimpleGrid,
  ThemeIcon,
  Image,
  Divider,
  Box,
  rem,
  useMantineTheme,
} from '@mantine/core';
import { IconCheck, IconBrandGithub, IconBrandTwitter, IconBrandLinkedin } from '@tabler/icons-react';

const features = [
  {
    title: 'Free and open source',
    description: 'All our software is free and open source, with a strong community behind it',
    icon: IconCheck,
  },
  {
    title: 'TypeScript based',
    description: 'Build type-safe applications with ease using our TypeScript-first approach',
    icon: IconCheck,
  },
  {
    title: 'No dependencies',
    description: 'Our software has minimal external dependencies, ensuring stability and security',
    icon: IconCheck,
  },
  {
    title: 'Cross-platform',
    description: 'Works on all modern platforms and browsers without any additional configuration',
    icon: IconCheck,
  },
];

export function Landing() {
  const theme = useMantineTheme();

  const featureCards = features.map((feature) => (
    <Card key={feature.title} shadow="md" radius="md" padding="xl" withBorder>
      <ThemeIcon
        size={50}
        radius={50}
        variant="light"
        color={theme.primaryColor}
        mb="md"
      >
        <feature.icon size={26} stroke={1.5} />
      </ThemeIcon>
      <Text fw={700} fz="lg" mb="xs">
        {feature.title}
      </Text>
      <Text c="dimmed" fz="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <>
      {/* Hero section */}
      <Box
        style={{
          backgroundColor: theme.colors.blue[7],
          color: theme.white,
          padding: `${rem(80)} 0`,
        }}
      >
        <Container size="lg">
          <div style={{ maxWidth: rem(600), marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
            <Title order={1} size="h1" fw={900} mb="md">
              Welcome to the shop
            </Title>
            <Text size="xl" mb="xl">
              We sell innovative solutions for modern businesses
            </Text>
            <Group justify="center">
              <Button size="lg" variant="white" color="dark">
                Buy Things
              </Button>
              <Button size="lg" variant="outline" color="white">
                Learn More
              </Button>
            </Group>
          </div>
        </Container>
      </Box>

      {/* Features section */}
      <Container size="lg" py={80}>
        <Title order={2} ta="center" mb={50}>
          Why Choose Our Company
        </Title>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={30}>
          {featureCards}
        </SimpleGrid>
      </Container>

      {/* About section */}
      <Box bg="gray.0" py={80}>
        <Container size="lg">
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing={50}>
            <div>
              <Title order={2} mb="md">About Our Company</Title>
              <Text mb="md">
                Founded in 2020, our company has been at the forefront of technological innovation,
                providing cutting-edge solutions to businesses of all sizes.
              </Text>
              <Text mb="md">
                Our team of experts is dedicated to delivering high-quality products that help our
                clients achieve their goals and stay ahead of the competition.
              </Text>
              <Button variant="outline" mt="md">Learn More About Us</Button>
            </div>
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt="Team working together"
              radius="md"
            />
          </SimpleGrid>
        </Container>
      </Box>

      {/* Call to action */}
      <Container size="lg" py={80} ta="center">
        <Title order={2} mb="md">Ready to Get Started?</Title>
        <Text size="lg" mb="xl" maw={600} mx="auto">
          Join thousands of satisfied customers who have transformed their businesses with our solutions.
        </Text>
        <Group justify="center">
          <Button size="lg">Contact Us Today</Button>
          <Button size="lg" variant="outline">View Pricing</Button>
        </Group>
      </Container>

      {/* Footer */}
      <Box bg="dark" c="white" py={40}>
        <Container size="lg">
          <SimpleGrid cols={{ base: 1, sm: 4 }} spacing={30}>
            <div>
              <Title order={4} mb="md">Company</Title>
              <Text component="a" href="#" display="block" mb="xs">About</Text>
              <Text component="a" href="#" display="block" mb="xs">Careers</Text>
              <Text component="a" href="#" display="block" mb="xs">Press</Text>
            </div>
            <div>
              <Title order={4} mb="md">Products</Title>
              <Text component="a" href="#" display="block" mb="xs">Features</Text>
              <Text component="a" href="#" display="block" mb="xs">Pricing</Text>
              <Text component="a" href="#" display="block" mb="xs">Documentation</Text>
            </div>
            <div>
              <Title order={4} mb="md">Resources</Title>
              <Text component="a" href="#" display="block" mb="xs">Blog</Text>
              <Text component="a" href="#" display="block" mb="xs">Help Center</Text>
              <Text component="a" href="#" display="block" mb="xs">Community</Text>
            </div>
            <div>
              <Title order={4} mb="md">Connect</Title>
              <Group>
                <ThemeIcon variant="outline" radius="xl" size="lg">
                  <IconBrandTwitter size={18} />
                </ThemeIcon>
                <ThemeIcon variant="outline" radius="xl" size="lg">
                  <IconBrandGithub size={18} />
                </ThemeIcon>
                <ThemeIcon variant="outline" radius="xl" size="lg">
                  <IconBrandLinkedin size={18} />
                </ThemeIcon>
              </Group>
            </div>
          </SimpleGrid>
          <Divider my={30} />
          <Group justify="space-between">
            <Text size="sm">© 2023 Company, Inc. All rights reserved.</Text>
            <Group gap={15}>
              <Text component="a" href="#" size="sm">Privacy Policy</Text>
              <Text component="a" href="#" size="sm">Terms of Service</Text>
            </Group>
          </Group>
        </Container>
      </Box>
    </>
  );
}

export default Landing;
