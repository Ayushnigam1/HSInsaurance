import { Link as SocialLink } from "@/interface/LandingPage";

import { Link, Sheet, Stack, Typography,Divider,Box } from "@mui/joy";
import Image from "next/image";


function socialIcon(type: Pick<SocialLink, "type">["type"]) {
  switch (type) {
    case "instagram":
      return <Image src="/Images/instagram.svg" alt="Instagram" width={40} height={40}/>;
    case "facebook":
      return <Image src="/Images/facebook.svg" alt="Facebook" width={40} height={40}/>
    case "linkedin":
      return <Image src="/Images/linkedin.svg" alt="Linkedin" width={40} height={40}/>;
    case "twitter":
      return <Image src="/Images/twitter.svg" alt="Twitter" width={40} height={40}/>;
    case "youtube":
      return <Image src="/Images/youtube.svg" alt="Youtube" width={40} height={40}/>;
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
    <Sheet sx={{justifyContent:"center",alignItems:"center"}}>
         <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} gap={2} sx={{paddingY:"1rem",}}> 
              <Typography level="h3">Contact on:</Typography>
              <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} gap={2}>
             
                <Box
                  height={40}
                >  <Link href={`tel:${phone?.replace(/\+/g, "")}`} target="_blank"><Image src="/Images/phone.svg"  alt="Phone" width={40} height={40}/></Link>
                </Box>
                <Box
                  height={40}
                >   <Link href={`mailto:${email!}`} target="_blank">
                <Image src="/Images/gmail.svg" alt="Gmail" width={45} height={45} />
              </Link>
                </Box>
                 
              </Stack>
            </Stack>
            <Divider sx={{ clipPath: 'inset(0px -100vmax)' }}/>
            <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} gap={2} sx={{paddingY:"1rem",backgroundColor:"#60a5fa"}}> 
              <Typography level="h3" textColor={'white'}> Follow Us :</Typography>
              <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} gap={2}>
              {(links ?? []).map((link, i) => (
                <Box
                  key={i}
                  height={40}
                >
                  {socialIcon(link.type)}
                </Box>
              ))}
              </Stack>
            </Stack>
         
    </Sheet>
  );
}

export default Footer;
