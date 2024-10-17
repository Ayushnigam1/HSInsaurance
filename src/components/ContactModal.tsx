"use client"
import useConv from "@/hooks/useConv"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { PhoneIcon } from "@heroicons/react/16/solid"
import { Box, Card, CardContent, Modal, ModalClose, ModalDialog, Sheet, Stack, Typography, useTheme } from "@mui/joy"

const ContactModal = () => {
    const { open, onClose } = useConv()
    const theme = useTheme()
    return <Modal open={open} onClose={onClose}>
        <ModalDialog sx={{ padding: 0, overflow: 'hidden', border: 0 }} >
            <Sheet invertedColors variant='solid' sx={{ height: 300, position: 'absolute', left: 0, right: 0, background: theme.palette.primary[600]}}>
                <Stack padding={3}>
                    <Typography level='h2'>Connect With Us</Typography>
                    <Typography level='body-md'>Feel free to contact and get best advice</Typography>
                </Stack>
            </Sheet>
            <ModalClose variant='solid' color='primary' />
            <Stack sx={{ padding: 3 }} gap={1} width='600px'>
                <Box height={200}></Box>
                <Stack direction='row' gap={3}>
                    <Card sx={{ boxShadow: 'sm', flex: 1 }} variant='plain'>
                        <CardContent sx={{ alignItems: 'self-start', gap: 1 }}>
                            <PhoneIcon color={theme.palette.primary[500]} height={22} />
                            <Typography level='title-md'>Call Us</Typography>
                            <Typography level='body-sm' color='neutral'>Some Description</Typography>
                            <Box height={50}></Box>
                        </CardContent>
                    </Card>
                    <Card sx={{ boxShadow: 'sm', flex: 1 }} variant='plain'>
                        <CardContent sx={{ alignItems: 'self-start', gap: 1 }}>
                            <FontAwesomeIcon icon={faWhatsapp} color="green" size="xl" />
                            <Typography level='title-md'>
                                Whatsapp</Typography>
                            <Typography level='body-sm' color='neutral'>Some Description</Typography>
                            <Box height={50}></Box>
                        </CardContent>
                    </Card>
                </Stack>
            </Stack>
        </ModalDialog>
    </Modal>
}

export default ContactModal