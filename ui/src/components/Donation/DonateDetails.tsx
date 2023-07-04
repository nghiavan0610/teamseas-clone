import { VStack, Button, Heading } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import { InputField } from '../Form/InputField';
import { TextareaField } from '../Form/textAreaField';

interface Props {
    next: (values: object) => void;
    previous: () => void;
}

const detailsSchema = yup.object().shape({
    username: yup.string().required('Please enter a display name'),
    email: yup.string().email('Please enter a valid email').required('Please enter an email'),
    mobile: yup.string().nullable(),
    team: yup.string().nullable(),
    message: yup.string().nullable(),
});

const DonateDetails: React.FC<Props> = ({ next, previous }) => {
    const submit = (values: object) => {
        next(values);
    };

    return (
        <Formik
            initialValues={{
                username: '',
                email: '',
                mobile: '',
                team: '',
                message: '',
            }}
            onSubmit={submit}
            validationSchema={detailsSchema}
        >
            {(formikProps) => (
                <Form>
                    <VStack spacing={4} align="stretch">
                        <Heading as="h1" size="lg">
                            Details
                        </Heading>
                        <InputField label="Display Name" name="username" placeholder="Display Name" />

                        <InputField label="Email Address" name="email" placeholder="Email" />

                        <InputField label="Mobile Phone" name="mobile" placeholder="Mobile Phone" />

                        <InputField label="Team" name="team" placeholder="Team name" />

                        <TextareaField label="Message" name="message" placeholder="My #TeamSeas message is..." />

                        <hr />

                        <VStack spacing={2}>
                            <Button w="100%" colorScheme="orange" size="lg" borderRadius="full" type="submit">
                                Submit
                            </Button>
                            <Button
                                w="100%"
                                size="lg"
                                borderRadius="full"
                                variant="ghost"
                                fontSize="sm"
                                color="gray.700"
                                onClick={previous}
                            >
                                Previous
                            </Button>
                        </VStack>
                    </VStack>
                </Form>
            )}
        </Formik>
    );
};

export default DonateDetails;
