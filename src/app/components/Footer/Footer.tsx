import TwitterIcon from '../../../../public/twitter.svg';
import EmailIcon from '../../../../public/email.svg';
import TelegramIcon from '../../../../public/telegram.svg';
import { Button } from '../components.styles';
import { FooterContainer, SocialIcons, FooterLinks, SubscribeSection, Input } from './Footer.styles';

const Footer = () => {
    return (
        <FooterContainer>
            <SocialIcons>
                <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
                    <TwitterIcon />
                </a>
                <a href="https://t.me/yourprofile" target="_blank" rel="noopener noreferrer">
                    <TelegramIcon />
                </a>
                <a href="mailto:your@email.com">
                    <EmailIcon />
                </a>
            </SocialIcons>
            <FooterLinks>
                <a href="/faq">FAQ</a>
                <a href="/contact">Contact Us</a>
            </FooterLinks>
            <SubscribeSection>
                <Input type="email" placeholder="Your email" />
                <Button>Subscribe</Button>
            </SubscribeSection>
        </FooterContainer>
    );
};

export default Footer;
