import { useState } from 'react';
import {
    Container,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    FormErrorMessage,
    Button,
    useToast,
} from '@chakra-ui/react';
import { sendContactForm } from '../../lib/api';

const initValues = {
    name: '',
    email: '',
    phone: '',
    date: '',
    message: '',
};
const initState = { values: initValues };

const ContactForm = () => {
    const [state, setState] = useState(initState);
    const [touched, setTouched] = useState({});
    const toast = useToast();

    const { values, isLoading, error } = state;
    const handleChange = ({ target }) =>
        setState((prev) => ({
            ...prev,
            values: {
                ...prev.values,
                [target.name]: target.value,
            },
        }));

    const onBlur = ({ target }) => setTouched((prev) => ({ ...prev, [target.name]: true }));

    const onSubmit = async () => {
        setState((prev) => ({
            ...prev,
            isLoading: true,
        }));

        try {
            await sendContactForm(values);
            setTouched({});
            setState(initState);
            toast({
                title: 'Спасибо! Ваше сообщение оправлено',
                status: 'success',
                duration: 2000,
                position: 'top',
            });
        } catch (error) {
            setState((prev) => ({
                ...prev,
                isLoading: false,
                error: error.message,
            }));
        }
    };

    return (
        <section className=''>
            <Container maxW={'450px'} mt={12}>
                <Heading>Записаться на массаж</Heading>
                <span className='mb-4'>
                    Чтобы записаться на массаж позвоните по номеру телефона. Или напишите нам,
                    удобным для вас способом. Укажите дату и любые пожелания и мы свяжемся с вами в
                    ближайшее время!
                </span>
                {error && (
                    <Text color='red.300' my={4} fontSize='xl'>
                        {error}
                    </Text>
                )}
                <FormControl isRequired isInvalid={touched.name && !values.name} mb={5}>
                    <FormLabel>Имя</FormLabel>
                    <Input
                        type='text'
                        errorBorderColor='red.300'
                        name='name'
                        value={values.name}
                        onChange={handleChange}
                        onBlur={onBlur}
                    />
                    <FormErrorMessage>Необходимо ваше имя</FormErrorMessage>
                </FormControl>
                <FormControl isRequired isInvalid={touched.email && !values.email} mb={5}>
                    <FormLabel>Email</FormLabel>
                    <Input
                        type='email'
                        name='email'
                        errorBorderColor='red.300'
                        value={values.email}
                        onChange={handleChange}
                        onBlur={onBlur}
                    />
                    <FormErrorMessage>Необходим ваш электронный адрес</FormErrorMessage>
                </FormControl>
                <FormControl isRequired isInvalid={touched.phone && !values.phone} mb={5}>
                    <FormLabel>Телефон</FormLabel>
                    <Input
                        type='phone'
                        name='phone'
                        errorBorderColor='red.300'
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={onBlur}
                    />
                    <FormErrorMessage>Необходим ваш номер телефона</FormErrorMessage>
                </FormControl>
                <FormControl mb={5}>
                    <FormLabel>День посещения</FormLabel>
                    <Input type='date' name='date' value={values.date} onChange={handleChange} />
                </FormControl>
                <FormControl mb={5}>
                    <FormLabel>Пожелания</FormLabel>
                    <Textarea
                        type='text'
                        name='message'
                        rows={5}
                        cols={28}
                        value={values.message}
                        onChange={handleChange}
                    />
                </FormControl>
                <Button
                    variant={'outline'}
                    colorScheme='blue'
                    isLoading={isLoading}
                    disabled={!values.name || !values.email || !values.phone}
                    onClick={onSubmit}>
                    Отправить
                </Button>
            </Container>
        </section>
    );
};

export default ContactForm;
