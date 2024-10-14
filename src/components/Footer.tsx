import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/16/solid";
import { Container, Sheet, Stack, Typography } from "@mui/joy";

function Footer() {
    return <Sheet>
        <Container>
            <Stack paddingY={4} direction='row' gap={2} justifyContent='space-between'>
                <Stack gap={1}>
                    <Typography level='h4'>Dhanvantri</Typography>
                    <Typography color="neutral">Trusted guidance for all your insurance needs—Dhanvanti is here to help you make informed decisions</Typography>
                    <Stack>
                        <Typography level='body-sm' startDecorator={<EnvelopeIcon height={18}/>}>dhavantri@gmail.com</Typography>
                        <Typography level='body-sm' startDecorator={<PhoneIcon height={18}/>}>+91 1234567890</Typography>
                    </Stack>
                </Stack>
                <Stack component={'ul'} gap={1}>
                    <Typography level='title-md'>Insurance</Typography>
                    <Typography component={'li'} level='body-sm' color="neutral">Health Insurance</Typography>
                    <Typography component={'li'} level='body-sm' color="neutral">Health Insurance</Typography>
                    <Typography component={'li'} level='body-sm' color="neutral">Health Insurance</Typography>
                </Stack>
                <Stack component={'ul'} gap={1}>
                    <Typography level='title-md'>Insurance</Typography>
                    <Typography component={'li'} level='body-sm' color="neutral">Health Insurance</Typography>
                    <Typography component={'li'} level='body-sm' color="neutral">Health Insurance</Typography>
                    <Typography component={'li'} level='body-sm' color="neutral">Health Insurance</Typography>
                </Stack>
                <Stack component={'ul'} gap={1}>
                    <Typography level='title-md'>Insurance</Typography>
                    <Typography component={'li'} level='body-sm' color="neutral">Health Insurance</Typography>
                    <Typography component={'li'} level='body-sm' color="neutral">Health Insurance</Typography>
                    <Typography component={'li'} level='body-sm' color="neutral">Health Insurance</Typography>
                </Stack>
            </Stack>
        </Container>
    </Sheet>
}

export default Footer;