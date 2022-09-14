import { Center, Text } from '@mantine/core';

import type { NextPage } from 'next';
const Home: NextPage = () => (
  <Center className="h-screen flex flex-col space-y-6">
    <Text
      className="font-bold text-8xl text-center"
      variant="gradient"
      component="h1"
      gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
    >
      The Mantine Next.js Tailwind Starter
    </Text>
    <Text className="text-xl text-center" component="h2">
      This starter template is a great starting point for your next Mantine project. With help of
      TailwindCSS and Next.js you can build a beautiful website in no time.
    </Text>
  </Center>
);

export default Home;
