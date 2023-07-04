import {
    Button,
    Text,
    Heading,
    NumberInput,
    NumberInputField,
    SimpleGrid,
    VStack,
    useRadioGroup,
} from '@chakra-ui/react';

import RadioCard from './RadioCard';
import { useState } from 'react';

interface Props {
    initialDonate: number;
    next: (values: object) => void;
}

const options = [5, 20, 50, 100];

const CountSelection: React.FC<Props> = ({ next, initialDonate }) => {
    const [pounds, setPounds] = useState(initialDonate);
    const [cusAmount, setCusAmount] = useState('' + (options.includes(pounds) ? '' : pounds));

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'pounds',
        // lastest chakra just allowed string values
        value: pounds,
        onChange: (nextValue) => {
            setCusAmount('');
            setPounds(parseInt(nextValue));
        },
    });

    const group = getRootProps();

    const nextStep = () => {
        next({ donate: pounds });
    };

    return (
        <VStack spacing={4} align="stretch">
            <Heading as="h1" size="lg">
                JOIN #TEAMSEAS
            </Heading>
            <Text fontSize="md" fontWeight="bold">
                Every $1 is one less pound of trash in the ocean
            </Text>
            <SimpleGrid mt={5} columns={2} spacing={2} {...group}>
                {options.map((value) => {
                    const radio = getRadioProps({ value });
                    return (
                        <RadioCard key={value} {...radio}>
                            {value} pounds
                        </RadioCard>
                    );
                })}
            </SimpleGrid>

            <NumberInput
                onFocus={() => setPounds(0)}
                onChange={(value) => {
                    setPounds(parseInt(value));
                    setCusAmount(value);
                }}
                value={cusAmount}
            >
                <NumberInputField placeholder="Other amount" />
            </NumberInput>

            <hr />

            <Button width="100%" colorScheme="orange" size="lg" borderRadius="full" onClick={nextStep}>
                Next
            </Button>
        </VStack>
    );
};

export default CountSelection;
