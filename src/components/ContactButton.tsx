"use client"
import useConv from "@/hooks/useConv";
import { PhoneIcon } from "@heroicons/react/16/solid";
import { ListItem, Button } from "@mui/joy";

export default function ContactButton() {
  const { onClick } = useConv()
    return <ListItem>
        <Button startDecorator={<PhoneIcon height={18} />} onClick={onClick}>Contact Us</Button>
    </ListItem>
}