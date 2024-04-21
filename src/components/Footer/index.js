import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Bio } from '../../data/constants';
import { 
  FooterContainer, 
  FooterWrapper, 
  SocialMediaIcons, 
  SocialMediaIcon, 
  Copyright
} from './FooterStyle.js';

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <SocialMediaIcons>
          <SocialMediaIcon href={ Bio.linkedin } target="display"><LinkedInIcon /></SocialMediaIcon>
          <SocialMediaIcon href={ Bio.github } target="display"><GitHubIcon /></SocialMediaIcon>
          <SocialMediaIcon href={ Bio.instagram } target="display"><InstagramIcon /></SocialMediaIcon>
          <SocialMediaIcon href={ Bio.twitter } target="display"><TwitterIcon /></SocialMediaIcon>
          <SocialMediaIcon href={ Bio.facebook } target="display"><FacebookIcon /></SocialMediaIcon>
        </SocialMediaIcons>
        <Copyright>
          &copy; 2024 M0x1e. All rights reserved.
        </Copyright>

      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;