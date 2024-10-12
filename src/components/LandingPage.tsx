import { CalendarIcon } from "@heroicons/react/16/solid";
import { Button, Stack, Typography } from "@mui/joy";

function LandingPage() {
    return <Stack paddingY={12} direction='row'>
        <Stack justifyContent='center'>
            <Typography level='h1'>Expert Insurance Consulting for Your Peace of Mind</Typography>
            <Typography level='body-lg' color='neutral'>
                Dhanvantri: Get expert advice on insurance, understand your policy, get answers to your questions, and secure your coverage—all in one place.
            </Typography>
            <Stack direction='row' marginTop={2} gap={2}>
                <Button startDecorator={<CalendarIcon height={18}/>} size='lg'>Schedule a call</Button>
                <Button size='lg' color='success'>Whatsapp</Button>
            </Stack>
        </Stack>
        <Stack>
            <img alt={'hero image'} src={'https://placehold.co/600x400/png'}></img>
        </Stack>
    </Stack>
}

export default LandingPage;