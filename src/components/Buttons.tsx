"use client";
import { Button, Stack } from "@mui/joy";
import { CalendarIcon } from "@heroicons/react/16/solid";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useConv from "@/hooks/useConv";
const Buttons = () => {
  const { onClick } = useConv();
  return (
    <Stack
      direction="row"
      marginTop={2}
      gap={2}
      flexWrap="wrap"
      justifyContent="center"
    >
      <Button
        sx={{ width: { xs: "100%", sm: "unset" } }}
        startDecorator={<CalendarIcon height={18} />}
        onClick={onClick}
        size="lg"
      >
        Schedule a free call
      </Button>
      <Button
        sx={{ width: { xs: "100%", sm: "unset" } }}
        startDecorator={<FontAwesomeIcon icon={faWhatsapp} height={18} />}
        onClick={onClick}
        size="lg"
        color="success"
      >
        Whatsapp Us
      </Button>
    </Stack>
  );
};

export default Buttons;
