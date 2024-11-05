"use client";
import { Button, Stack, Typography } from "@mui/joy";
import { CalendarIcon, PhoneIcon } from "@heroicons/react/16/solid";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useConv from "@/hooks/useConv";
const Buttons = () => {
  const { onClick } = useConv();
  return (
    <Stack
      direction="row"
      marginTop={2}
      gap={1}
      alignItems="center"
      justifyContent="space-between"
    >
      <Typography level="h4">
        Get Expert Advice <br /> from the comfort of your home
      </Typography>
      <Button
        sx={{ width: { xs: "100%", sm: "unset" } }}
        startDecorator={<PhoneIcon height={18} />}
        onClick={onClick}
        size="lg"
      >
        Call Us!
      </Button>
    </Stack>
  );
};

export default Buttons;
