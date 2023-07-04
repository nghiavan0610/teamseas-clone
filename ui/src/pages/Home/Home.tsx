import { Box, Text, VStack, Grid, Heading, Link } from '@chakra-ui/react';
import { useQuery, useSubscription } from 'urql';
import { Counter, DonationWizard, LeaderBoard, Logo } from '~/components';
import config from '~/config';

const totalDonationQuery = `query Query { totalDonation }`;
const totalUpdatedQuery = `subscription Subscription { totalUpdated {totalDonation} }`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleSubscription = (_previous: any, newTotal: any) => {
    return newTotal?.totalUpdated?.totalDonation;
};

const Home = () => {
    const [res] = useSubscription({ query: totalUpdatedQuery }, handleSubscription);
    const [{ data, fetching, error }] = useQuery({ query: totalDonationQuery });

    if (fetching) return <p>Loading...</p>;
    if (error) return <p>Oh no... {error.message}</p>;

    return (
        <Box textAlign="center" fontSize="xl">
            <Grid minH="100vh" p={3} bg="gray.50">
                <VStack spacing={8}>
                    <Link href={config.routes.home}>
                        <Logo h="32" pointerEvents="none" />
                    </Link>
                    <Heading as="h1" size="xl">
                        JOIN THE MOVEMENT!
                    </Heading>
                    <Text>
                        The team is growing everyday and scoring wins for the planet.
                        <br /> Remove trash with us and track our progress!
                    </Text>
                    <Heading as="h2" size="4xl">
                        <Counter from={0} to={res.data || data.totalDonation} />
                    </Heading>
                    <DonationWizard />
                    <LeaderBoard />
                </VStack>
            </Grid>
        </Box>
    );
};
export default Home;
