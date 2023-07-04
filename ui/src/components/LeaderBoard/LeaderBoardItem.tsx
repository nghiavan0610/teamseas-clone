import { Avatar, Badge, Box, Flex, Text } from '@chakra-ui/react';
import { LeaderBoardItemProps } from './LeaderBoard.interface';
import formatDate from '~/utils/formatDate';

const LeaderBoardItem: React.FC<LeaderBoardItemProps> = ({ user }) => {
    return (
        <Flex boxShadow="md" p={3} bg="white" borderRadius="lg" maxWidth="xl" w="100%">
            <Avatar size="lg" />

            <Box flex="1" ml={4}>
                <Flex justifyContent="space-between" h="100%">
                    <Flex flexDirection="column" textAlign="left" justifyContent="center">
                        <Text fontWeight="bold" color="blue.500">
                            {user.team}
                        </Text>
                        <Text fontWeight="bold">{user.username}</Text>
                        <Text fontSize="sm">{user.message}</Text>
                    </Flex>
                    <Flex flexDirection="column" justifyContent="space-around">
                        <div>
                            <Badge
                                colorScheme="blue"
                                borderRadius="full"
                                textTransform="lowercase"
                                py={1}
                                px={3}
                                as="div"
                            >
                                {user.donate.toLocaleString()} pounds
                            </Badge>
                        </div>
                        <Text fontSize="xs">{formatDate(user.createdAt)}</Text>
                    </Flex>
                </Flex>
            </Box>
        </Flex>
    );
};

export default LeaderBoardItem;
