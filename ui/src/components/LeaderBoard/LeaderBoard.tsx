import { Box, Heading, Radio, RadioGroup, Stack, VStack } from '@chakra-ui/react';
import LeaderBoardItem from './LeaderBoardItem';
import { useState } from 'react';
import { useQuery } from 'urql';
import { LeaderBoardProps } from './LeaderBoard.interface';

const UsersQuery = `
query Query($orderByInput: OrderByParams) {
    users(orderByInput: $orderByInput) {
      id
      username
      email
      donate
      mobile
      message
      anonymous
      team
      createdAt
      updatedAt
    }
  }`;

const LeaderBoard: React.FC = () => {
    const [field, setField] = useState('createdAt');

    const [{ data, fetching, error }] = useQuery<LeaderBoardProps>({
        query: UsersQuery,
        variables: {
            orderByInput: {
                field,
                direction: 'desc',
            },
        },
    });

    if (fetching || !data) return <p>Loading...</p>;
    if (error) return <p>Something went wrong...</p>;

    return (
        <Box w="100%">
            <VStack spacing={4}>
                <Heading as="h1" size="2xl">
                    Leaderboard
                </Heading>

                <RadioGroup onChange={setField} value={field}>
                    <Stack direction="row">
                        <Radio value="createdAt">Most Recent</Radio>
                        <Radio value="donate">Most Pounds</Radio>
                    </Stack>
                </RadioGroup>

                {data.users.map((user) => (
                    <LeaderBoardItem key={user.id} user={user} />
                ))}
            </VStack>
        </Box>
    );
};

export default LeaderBoard;
