"use client"
import useConv from "@/hooks/useConv"
import {  Modal, ModalClose, ModalDialog, Stack, Typography } from "@mui/joy"

const WhatsappModal = () => {
    const { open, onClose } = useConv()
    return <Modal open={open} onClose={onClose} >
        <ModalDialog sx={{ padding: 0, overflow: 'hidden' }}>
            <ModalClose />
            <Stack gap={1} direction='row'>
                <img alt={'hero image'} src={'https://placehold.co/200x500/png'}></img>
                <Stack padding={3} minWidth='400px'>
                    <Typography level='h4'>Connect With Us</Typography>
                </Stack>
            </Stack>
        </ModalDialog>
    </Modal>
}

export default WhatsappModal