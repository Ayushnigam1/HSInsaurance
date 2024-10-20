"use client"
import useConv from "@/hooks/useConv"
import { DataProps } from "@/interface/Datainterface"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { CalendarIcon } from "@heroicons/react/16/solid"
import { Button, Card, CardActions, CardContent, Typography } from "@mui/joy"
import Image from "next/image"


function CustomCard(data: DataProps) {
  const { onClick } = useConv()
  return (
    <>
      <Card
        variant="solid"
        sx={{
          boxShadow: 'md',
          maxWidth: '100%',
          padding: "30px",
          bgcolor: "white",
          margin: "20px",
          overflow: "hidden",
          zIndex: 1,

        }}
      >
        <div>
          <Typography level="h2" paddingY={3}>
            <Image src={data.imageUrl} alt={data.imageAlt} width={70} height={70} />
          </Typography>
        </div>
        <CardContent>
          <Typography level="h3" lineHeight={2}>{data.title}</Typography>
          <Typography level="body-md" lineHeight={1.5} sx={{ color: "#51636F" }} textAlign='justify'>
            {data.text}
          </Typography>
        </CardContent>
        <CardActions sx={{flexWrap: 'wrap'}}>
          <Button sx={{ width: { xs: '100%', sm: 'unset' } }} startDecorator={<CalendarIcon height={18} />} onClick={onClick} size='lg'>Schedule a call</Button>
          <Button sx={{ width: { xs: '100%', sm: 'unset' } }} size='lg' onClick={onClick} startDecorator={<FontAwesomeIcon icon={faWhatsapp} />} color='success'>Whatsapp Us</Button>
        </CardActions>
      </Card>
    </>
  )
}
export default CustomCard