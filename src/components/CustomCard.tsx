"use client";
import useConv from "@/hooks/useConv";
import { DataProps } from "@/interface/Datainterface";
import { urlFor } from "@/sanity/lib/image";
import { PhoneIcon } from "@heroicons/react/16/solid";
import { Button, Card, CardActions, CardContent, Typography } from "@mui/joy";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Image from "next/image";

function CustomCard(data: DataProps) {
  const { onClick } = useConv();
  return (
    <Card
      variant="plain"
      sx={{
        height: "100%",
        boxShadow: "md",
        padding: 4,
        zIndex: 1,
      }}
    >
      <Typography level="h2" paddingY={3}>
        <Image src={data.imageUrl ? urlFor(data.imageUrl as SanityImageSource).url()
                      : ""} alt={data.imageAlt} width={70} height={70} />
      </Typography>
      <CardContent>
        <Typography level="h3" lineHeight={2}>
          {data.title}
        </Typography>
        <Typography
          level="body-md"
          lineHeight={1.5}
          sx={{ color: "#51636F" }}
          textAlign="justify"
        >
          {data.text}
        </Typography>
      </CardContent>
      <CardActions sx={{ flexWrap: "wrap" }}>
        <Button
          sx={{ width: { xs: "100%", sm: "unset" } }}
          startDecorator={<PhoneIcon height={18} />}
          onClick={onClick}
          size="lg"
        >
          Contact Us Today!
        </Button>
        {/* <Button sx={{ width: { xs: '100%', sm: 'unset' } }} size='lg' onClick={onClick} startDecorator={<FontAwesomeIcon icon={faWhatsapp} />} color='success'>Whatsapp Us</Button> */}
      </CardActions>
    </Card>
  );
}
export default CustomCard;
