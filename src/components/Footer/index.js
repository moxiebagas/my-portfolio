import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Bio } from '../../data/constants';
import { 
  FooterContainer, 
  FooterWrapper, 
  Logo, 
  Nav, 
  NavLink, 
  SocialMediaIcons, 
  SocialMediaIcon, 
  Copyright
} from './FooterStyle.js';

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        {/* <Logo>Muqsi Bagas Eka Putra</Logo> */}
        <SocialMediaIcons>
          <SocialMediaIcon href={ Bio.facebook } target="display"><FacebookIcon /></SocialMediaIcon>
          <SocialMediaIcon href={ Bio.twitter } target="display"><TwitterIcon /></SocialMediaIcon>
          <SocialMediaIcon href={ Bio.linkedin } target="display"><LinkedInIcon /></SocialMediaIcon>
          <SocialMediaIcon href={ Bio.instagram } target="display"><InstagramIcon /></SocialMediaIcon>
        </SocialMediaIcons>
        <Copyright>
          &copy; 2024 M0x1e. All rights reserved.
        </Copyright>

      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;