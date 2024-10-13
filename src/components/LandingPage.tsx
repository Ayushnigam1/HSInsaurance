import { CalendarIcon } from "@heroicons/react/16/solid";
import { Button, Stack, Typography,Box, Container } from "@mui/joy";
import CustomCard from "./CustomCard";
import { data } from "@/data";
import { DataProps } from "@/interface/Datainterface";

function LandingPage() {
    return (
        <>
        <Container>
    <Stack paddingY={12} direction='row'>
        <Box alignContent={'center'} justifyContent='center'>
            <Typography level='h1'>Expert Insurance Consulting for Your Peace of Mind</Typography>
            <Typography level='body-lg' color='neutral'>
                Dhanvantri: Get expert advice on insurance, understand your policy, get answers to your questions, and secure your coverage—all in one place.
            </Typography>
            <Stack direction='row' marginTop={2} gap={2}>
                <Button startDecorator={<CalendarIcon height={18}/>} size='lg'>Schedule a call</Button>
                <Button size='lg' color='success'>Whatsapp</Button>
            </Stack>
        </Box>
        <Box>
            <img alt={'hero image'} src={'https://placehold.co/600x400/png'}></img>
        </Box>
    </Stack>
    </Container>
    <Stack paddingY={8} direction='column' sx={{backgroundColor:'#f5f5f5de'}}>
        <Container>
        <Box justifyContent={'center'} paddingX={12} >
            <Container>
<Typography textAlign={'center'} fontStyle={'captilize'} lineHeight={2} textTransform={'uppercase'} letterSpacing={'2px'} fontSize={"13px"}>Welcome to the Ditto Universe</Typography>
<Typography textAlign={'center'} level="h3" lineHeight={2}>What we do</Typography>
<Typography textAlign={'center'} lineHeight={2} >
We help you choose the best policy for your needs. We help you buy the policy. And we help you with claims if you ever have to use the policy. Basically, we do everything.
</Typography>
</Container>
        </Box>
        <Box display={'grid'} gridTemplateColumns={'1fr 1fr'} >
{
    data.map((dat)=>{
        return (
            <CustomCard title={dat.title} text={dat.text} imageUrl={dat.imageUrl} imageAlt={dat.imageAlt} />
        )
    })
}
        </Box>
        </Container>
    </Stack>
    </>
 
    )
}

export default LandingPage;