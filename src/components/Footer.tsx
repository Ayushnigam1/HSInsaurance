import { Link as SocialLink } from "@/interface/LandingPage";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/16/solid";
import { Container, Link, Sheet, Stack, Typography } from "@mui/joy";

function socialIcon(type: Pick<SocialLink, "type">["type"]) {
  switch (type) {
    case "instagram":
      return <FontAwesomeIcon height={18} icon={faInstagram} />;
    case "facebook":
      return <FontAwesomeIcon height={18} icon={faFacebook} />;
    case "linkedin":
      return <FontAwesomeIcon height={18} icon={faLinkedin} />;
    case "twitter":
      return <FontAwesomeIcon height={18} icon={faTwitter} />;
    case "youtube":
      return <FontAwesomeIcon height={18} icon={faYoutube} />;
    default:
      return null;
  }
}

interface FooterProps {
  phone?: string;
  email?: string;
  links?: SocialLink[];
}
function Footer(props: FooterProps) {
  const { phone, email, links = [] } = props;
  return (
    <Sheet>
      <Container>
        <Stack
          paddingY={4}
          direction="row"
          gap={2}
          justifyContent="space-between"
        >
          <Stack gap={1}>
            <Typography level="h4">HS Insurance</Typography>
            <Typography color="neutral">
              Trusted guidance for all your insurance needs—HS Insurance is here
              to help you make informed decisions
            </Typography>
            <Stack gap={0.5}>
              {email && (
                <Typography
                  level="body-sm"
                  startDecorator={<EnvelopeIcon height={18} />}
                >
                  {email}
                </Typography>
              )}
              {phone && (
                <Typography
                  level="body-sm"
                  startDecorator={<PhoneIcon height={18} />}
                >
                  {phone}
                </Typography>
              )}
              {(links ?? []).map((link, i) => (
                <Link
                  startDecorator={socialIcon(link.type)}
                  level="body-sm"
                  underline="none"
                  color='neutral'
                  key={i}
                  href={link.link}
                >
                  {link.title}
                </Link>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Sheet>
  );
}

export default Footer;
