import { DataProps } from "@/interface/Datainterface"
import { CalendarIcon } from "@heroicons/react/16/solid"
import { Box, Button, Card, CardActions, CardContent, Typography } from "@mui/joy"
import { Hidden } from "@mui/material"
import Image from "next/image"


function CustomCard(data:DataProps){
return (
    <>
    <Card
      variant="solid"
      sx={{
        boxShadow: 'lg',
        maxWidth: '100%',
        padding:"30px",
       bgcolor:"white",
        margin:"20px",
        overflow:"hidden",
        zIndex:1

      }}
      
    >
      <div>
        <Typography level="h2" paddingY={3}>
        <Image src={data.imageUrl} alt={data.imageAlt} width={70} height={70}  />
        </Typography>
      </div>
      <CardContent>
        <Typography level="h3" lineHeight={2}>{data.title}</Typography>
        <Typography level="body-md" lineHeight={1.5} sx={{color:"#51636F"}}>
      {data.text}
        </Typography>
      </CardContent>
      <CardActions>
      <Button startDecorator={<CalendarIcon height={18}/>} size='lg'>Schedule a call</Button>
    <Button size='lg' color='success'>Whatsapp</Button>
      </CardActions>
    </Card>
    </>
)
}
export default CustomCard