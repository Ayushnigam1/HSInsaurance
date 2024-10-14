"use client"
import { CalendarIcon } from "@heroicons/react/16/solid";
import { Button, Stack, Typography, Box, Sheet, Container, Card, CardContent, CardActions } from "@mui/joy";
import CustomCard from "./CustomCard";
import Insurance from "@/interface/Insurances";
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useConv from "@/hooks/useConv";

function LandingPage(props: { insurances: Insurance[] }) {
    const { insurances } = props
    const { onClick } = useConv()
    return (
        <>
            <Container>
                <Stack paddingY={12} direction='row'>
                    <Box alignContent={'center'} justifyContent='center'>
                        <Typography level='h1'>Expert Insurance Consulting for Your Peace of Mind</Typography>
                        <Typography level='body-lg' color='neutral'>
                            Get expert advice on insurance, understand your policy, get answers to your questions, and secure your coverage—all in one place.
                        </Typography>
                        <Stack direction='row' marginTop={2} gap={2}>
                            <Button startDecorator={<CalendarIcon height={18} />} onClick={onClick} size='lg'>Schedule a free call</Button>
                            <Button startDecorator={<FontAwesomeIcon icon={faWhatsapp} onClick={onClick} height={18} />} size='lg' color='success'>Whatsapp</Button>
                        </Stack>
                    </Box>
                    <Box>
                        <img alt={'hero image'} src={'https://placehold.co/600x400/png'}></img>
                    </Box>
                </Stack>
            </Container>
            <Sheet color="neutral">
                <Container sx={{ paddingY: 8 }}>
                    <Stack maxWidth='md' justifyContent={'center'} alignItems={'center'} paddingX={12} gap={2} margin={'auto'}>
                        <Typography level="h3">Welcome to Dhanvantri</Typography>
                        <Typography textAlign={'center'}>
                            At Dhanvanti, we simplify insurance. Whether it’s medical, life, term, or motor insurance, we offer expert advice, answer your questions, and guide you to the right coverage—all in one place.
                        </Typography>
                    </Stack>
                    <Box display={'grid'} gridTemplateColumns={'1fr 1fr'} >
                        {
                            insurances.sort((a, b) => a.order - b.order).map((i) => {
                                return (
                                    <CustomCard
                                        key={i.insurance}
                                        title={i.insurance}
                                        text={i.description}
                                        imageUrl='/Images/Healthinsurance.png'
                                        imageAlt='health'
                                    />
                                )
                            })
                        }
                    </Box>
                </Container>
            </Sheet>
            <Stack paddingY={7} sx={{ backgroundImage: "url('https://placehold.co/1400x600/png')" }} alignItems={'end'}>
                <Card variant="plain" sx={{
                    padding: '3rem'
                }}>
                    <CardContent component={Stack} gap={2}>
                        <Typography level="h3">Advice you can count on</Typography>
                        <Typography color='neutral'>When you book a call with Ditto, you get access to the best insurance advisors in town.</Typography>
                        <Box display={'grid'} gridTemplateColumns={'1fr 1fr'} marginY={3} paddingY={3}>
                            <Card variant="plain">
                                <CardContent>
                                    <Typography level="title-lg">Plain card</Typography>
                                    <Typography color='neutral'>Description of the card.</Typography>
                                </CardContent>
                            </Card>
                            <Card variant="plain">
                                <CardContent>
                                    <Typography level="title-lg">Plain card</Typography>
                                    <Typography color='neutral'>Description of the card.</Typography>
                                </CardContent>
                            </Card>
                            <Card variant="plain">
                                <CardContent>
                                    <Typography level="title-lg">Plain card</Typography>
                                    <Typography color='neutral'>Description of the card.</Typography>
                                </CardContent>
                            </Card>
                            <Card variant="plain">
                                <CardContent>
                                    <Typography level="title-lg">Plain card</Typography>
                                    <Typography sx={{ color: "#51636F" }} fontSize={'14px'} letterSpacing={'-.28px'}>Description of the card.</Typography>
                                </CardContent>
                            </Card>
                        </Box>
                    </CardContent>
                    <CardActions>
                        <Button startDecorator={<CalendarIcon height={18} />} onClick={onClick} size='lg'>Schedule a call</Button>
                        <Button size='lg' startDecorator={<FontAwesomeIcon icon={faWhatsapp} />} color='success' onClick={onClick}>Whatsapp</Button>
                    </CardActions>
                </Card>
            </Stack>
        </>
    );
}

export default LandingPage;