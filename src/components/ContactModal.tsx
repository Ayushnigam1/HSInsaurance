"use client";
import useConv from "@/hooks/useConv";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PhoneIcon } from "@heroicons/react/16/solid";
import {
  Box,
  Button,
  Card,
  CardContent,
  Link,
  Modal,
  ModalClose,
  ModalDialog,
  Sheet,
  Stack,
  Typography,
  useTheme,
} from "@mui/joy";

interface ContactProps {
  phone?: string;
}
const ContactModal = (props: ContactProps) => {
  const { open, onClose } = useConv();
  const { phone = "" } = props
  const theme = useTheme();
  const whatsappLink = `https://wa.me/${phone.replace(/\+/g, "")}`;
  const phoneLink = `tel:${phone.replace(/\+/g, "")}`;

  return (
    <Modal open={open} onClose={onClose}>
      <ModalDialog
        sx={{
          padding: 0,
          overflow: "hidden",
          border: 0,
          width: { xs: "100%", sm: "unset" },
        }}
      >
        <Sheet
          invertedColors
          variant="solid"
          sx={{
            height: 300,
            position: "absolute",
            left: 0,
            right: 0,
            background: theme.palette.primary[600],
          }}
        >
          <Stack padding={3}>
            <Typography level="h2">Connect With Us</Typography>
            <Typography level="body-md">
              Feel free to contact and get best advice
            </Typography>
          </Stack>
        </Sheet>
        <ModalClose variant="solid" color="primary" />
        <Stack sx={{ padding: 3 }} gap={1} maxWidth="md" width={"md"}>
          <Box height={200}></Box>
          <Stack direction={{ md: "row" }} gap={3}>
            <Card sx={{ boxShadow: "sm", flex: 1 }} variant="plain">
              <CardContent sx={{ gap: 1 }}>
                <PhoneIcon
                  style={{ alignSelf: "flex-start" }}
                  color={theme.palette.primary[500]}
                  height={22}
                />
                <Typography level="title-md">Call Us</Typography>
                <Typography
                  level="body-sm"
                  color="neutral"
                >{`Need assistance? We're just one call away. Reach out to us now!`}</Typography>
                <Stack
                  gap={2}
                  direction="row"
                  justifyContent="space-between"
                  alignItems="end"
                >
                  <Link overlay href={phoneLink}>
                    <Button>Click here to call us</Button>
                  </Link>
                  <img
                    height={70}
                    width={70}
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=70x70&data=${phoneLink}`}
                    alt="QR Code"
                  />
                </Stack>
              </CardContent>
            </Card>
            <Card sx={{ boxShadow: "sm", flex: 1 }} variant="plain">
              <CardContent sx={{ gap: 1 }}>
                <FontAwesomeIcon
                  style={{ alignSelf: "flex-start" }}
                  icon={faWhatsapp}
                  color="green"
                  size="xl"
                />
                <Typography level="title-md">Whatsapp</Typography>
                <Typography level="body-sm" color="neutral">
                  {" "}
                  Got a question? Chat with us on WhatsApp for instant
                  assistance!
                </Typography>
                <Stack
                  gap={2}
                  direction="row"
                  justifyContent="space-between"
                  alignItems="end"
                >
                  <Link overlay href={whatsappLink} underline="none">
                    <Button color="success">Click to Message us</Button>
                  </Link>
                  <img
                    height={70}
                    width={70}
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=70x70&data=${whatsappLink}`}
                    alt="QR Code"
                  />
                </Stack>
              </CardContent>
            </Card>
          </Stack>
        </Stack>
      </ModalDialog>
    </Modal>
  );
};

export default ContactModal;
