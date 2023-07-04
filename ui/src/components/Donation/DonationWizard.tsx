import { Box } from '@chakra-ui/react';
import { useState } from 'react';
import CountSelection from './CountSelection';
import DonateDetails from './DonateDetails';
import { useMutation } from 'urql';

const Donate = `
mutation Mutation($donateInput: DonateInput!) {
    donate(donateInput: $donateInput) {
      id
      donate
      createdAt
    }
  }
`;

const DonationWizard: React.FC = () => {
    const [step, setStep] = useState(0);
    const [donateDetails, setDonateDetails] = useState({
        donate: 20,
    });
    const [donateResult, donate] = useMutation(Donate);
    const [showConfirmation, setShowConfirmation] = useState(false);

    const next = (values: object = {}) => {
        const mergedDetails = { ...donateDetails, ...values };

        if (step === pages.length - 1) {
            submitDonate(mergedDetails);
        } else {
            setStep(step + 1);
            setDonateDetails(mergedDetails);
        }
    };

    const previous = () => {
        setStep(step - 1);
    };

    const submitDonate = async (values: object) => {
        await donate({ donateInput: values });
        setShowConfirmation(true);
    };

    const pages = [
        <CountSelection next={next} initialDonate={donateDetails.donate} />,
        <DonateDetails next={next} previous={previous} />,
    ];

    return (
        <Box boxShadow="xl" p={8} bg="white" borderRadius="xl" w="sm">
            {showConfirmation ? (
                <div>Thank you for your donation of ${donateResult?.data.donate?.donate}!!</div>
            ) : (
                pages[step]
            )}
        </Box>
    );
};

export default DonationWizard;
