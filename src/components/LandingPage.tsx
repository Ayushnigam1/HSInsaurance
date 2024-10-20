"use client"
import { CalendarIcon } from "@heroicons/react/16/solid";
import { Button, Stack, Typography, Sheet, Container, Card, CardContent, CardActions, Grid } from "@mui/joy";
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
                <Stack paddingY={12} direction={{ lg: 'row' }} gap={2}>
                    <Stack alignContent={'center'} justifyContent='center' gap={1}>
                        <Typography level='h1'>Expert Insurance Consulting for Your Peace of Mind</Typography>
                        <Typography level='body-lg' color='neutral'>
                            Get expert advice on insurance, understand your policy, get answers to your questions, and secure your coverage—all in one place.
                        </Typography>
                        <Stack direction='row' marginTop={2} gap={2} flexWrap='wrap' justifyContent='stretch'>
                            <Button sx={{ width: { xs: '100%', sm: 'unset' } }} startDecorator={<CalendarIcon height={18} />} onClick={onClick} size='lg'>Schedule a free call</Button>
                            <Button sx={{ width: { xs: '100%', sm: 'unset' } }} startDecorator={<FontAwesomeIcon icon={faWhatsapp} height={18} />} onClick={onClick} size='lg' color='success'>Whatsapp Us</Button>
                        </Stack>
                    </Stack>
                    <img alt={'hero image'} src={'https://placehold.co/600x400/png'}></img>
                </Stack>
            </Container>
            <Sheet color="neutral">
                <Container sx={{ paddingY: 8 }}>
                    <Stack maxWidth='md' justifyContent={'center'} alignItems={'center'} gap={2} margin={'auto'}>
                        <Typography level="h3">Welcome to Dhanvantri</Typography>
                        <Typography textAlign={'center'}>
                            At Dhanvanti, we simplify insurance. Whether it’s medical, life, term, or motor insurance, we offer expert advice, answer your questions, and guide you to the right coverage—all in one place.
                        </Typography>
                    </Stack>
                    <Grid container alignItems='stretch'>
                        {
                            insurances.sort((a, b) => a.order - b.order).map((i) => {
                                return (
                                    <Grid xs={12} md={6} justifyContent={'stretch'}>
                                        <CustomCard
                                            key={i.insurance}
                                            title={i.insurance}
                                            text={i.description}
                                            imageUrl='/Images/Healthinsurance.png'
                                            imageAlt='health'
                                        />
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </Container>
            </Sheet>
            <Stack paddingY={7} sx={{ backgroundImage: "url('https://placehold.co/1400x600/png')" }} alignItems={'end'}>
                <Card variant="plain" sx={{
                    padding: '3rem'
                }}>
                    <CardContent component={Stack} gap={2}>
                        <Typography level="h3">Advice you can count on</Typography>
                        <Typography color='neutral'>When you book a call with Ditto, you get access to the best insurance advisors in town.</Typography>
                        <Grid container marginY={3} paddingY={3}>
                            {
                                [1, 2, 3, 4].map((index) =>
                                    <Grid key={index} xs={12} sm={6}>
                                        <Card variant="plain">
                                            <CardContent>
                                                <Typography level="title-lg">Plain card</Typography>
                                                <Typography color='neutral'>Description of the card.</Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                )
                            }
                        </Grid>
                    </CardContent>
                    <CardActions sx={{ flexWrap: 'wrap' }}>
                        <Button sx={{ width: { xs: '100%', sm: 'unset' } }} startDecorator={<CalendarIcon height={18} />} onClick={onClick} size='lg'>Schedule a call</Button>
                        <Button sx={{ width: { xs: '100%', sm: 'unset' } }} size='lg' startDecorator={<FontAwesomeIcon icon={faWhatsapp} onClick={onClick} />} color='success' onClick={onClick}>Whatsapp Us</Button>
                    </CardActions>
                </Card>
            </Stack>
        </>
    );
}

export default LandingPage;