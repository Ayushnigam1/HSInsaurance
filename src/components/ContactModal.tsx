"use client"
import useConv from "@/hooks/useConv"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { PhoneIcon } from "@heroicons/react/16/solid"
import { Box, Card, CardContent, Modal, ModalClose, ModalDialog, Sheet, Stack, Typography, useTheme } from "@mui/joy"
import useMediaQuery from '@mui/material/useMediaQuery'
const ContactModal = () => {
    const { open, onClose } = useConv()
    const theme = useTheme()
    const isMobile = useMediaQuery('(max-width:600px)'); 
    const whatsappNumber = '7879881902'; 
    const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\+/g, '')}`;
    const phoneLink = `tel:${whatsappNumber.replace(/\+/g, '')}`;
    return <Modal open={open} onClose={onClose}>
        <ModalDialog sx={{ padding: 0, overflow: 'hidden', border: 0, width: {xs: "100%", sm: "unset"} }} >
            <Sheet invertedColors variant='solid' sx={{ height: 300, position: 'absolute', left: 0, right: 0, background: theme.palette.primary[600] }}>
                <Stack padding={3}>
                    <Typography level='h2'>Connect With Us</Typography>
                    <Typography level='body-md'>Feel free to contact and get best advice</Typography>
                </Stack>
            </Sheet>
            <ModalClose variant='solid' color='primary' />
            <Stack sx={{ padding: 3 }} gap={1} maxWidth='md' width={"md"}>
                <Box height={200}></Box>
                <Stack direction={{ md: 'row' }} gap={3}>
                    <Card sx={{ boxShadow: 'sm', flex: 1 }} variant='plain'>
                        <CardContent sx={{ alignItems: 'self-start', gap: 1 }}>
                            <PhoneIcon color={theme.palette.primary[500]} height={22} />
                            <Typography level='title-md'>Call Us</Typography>
                            <Typography level='body-sm' color='neutral'>Need assistance? We're just one call away. Reach out to us now!</Typography>
                            <Box height={50}>
                            {isMobile ? (
                        <a href={phoneLink} style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold' }}>
                            Click to Call us
                        </a>
                    ) : (
                        <img 
                            src={`https://api.qrserver.com/v1/create-qr-code/?size=70x70&data=${phoneLink}`}
                            alt="QR Code"
                        />
                    )}
                            </Box>
                        </CardContent>
                    </Card>
                    <Card sx={{ boxShadow: 'sm', flex: 1 }} variant='plain'>
                        <CardContent sx={{ alignItems: 'self-start', gap: 1 }}>
                            <FontAwesomeIcon icon={faWhatsapp} color="green" size="xl" />
                            <Typography level='title-md'>
                                Whatsapp</Typography>
                            <Typography level='body-sm' color='neutral'> Got a question? Chat with us on WhatsApp for instant assistance!</Typography>
                            <Box height={70}>
                            { isMobile?   (<a href={whatsappLink} style={{ textDecoration: 'none', color: 'green', fontWeight: 'bold' }}>
                            Click to Message us
                        </a>):
                         (<img 
                            src={`https://api.qrserver.com/v1/create-qr-code/?size=70x70&data=${whatsappLink}`}
                            alt="QR Code"
                        /> )}
                        </Box>
                        </CardContent>
                    </Card>
                </Stack>
            </Stack>
        </ModalDialog>
    </Modal>
}

export default ContactModal