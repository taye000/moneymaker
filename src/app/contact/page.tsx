import React from 'react';
import { Container, Content, Title, Input, TextArea, Button } from '../styled';

const ContactUs: React.FC = () => {
    return (
        <Container>
            <Content>
                <Title>Contact Us</Title>
                <p>
                    Have questions or need support? Fill out the form below, and our team will get back to you as soon as possible.
                </p>
                <form>
                    <Input type="text" placeholder="Your Name" />
                    <Input type="email" placeholder="Your Email" />
                    <TextArea rows={6} placeholder="Your Message" />
                    <Button type="submit">Send Message</Button>
                </form>
            </Content>
        </Container>
    );
};

export default ContactUs;
