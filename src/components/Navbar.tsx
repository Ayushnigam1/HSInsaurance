"use client";
import {
  Link,
  List,
  ListDivider,
  ListItem,
  ListItemButton,
  ListItemContent,
  Sheet,
  Typography,
  useTheme,
} from "@mui/joy";
import { usePathname, useRouter } from "next/navigation";
import NavLink from "next/link";
import { routes } from "../routes";
import Image from "next/image";

function NavBar() {
  const navigate = useRouter();
  const pathname = usePathname();
  const theme = useTheme()
  return (
    <Sheet
    variant="plain"
      sx={{
        display: { xs: 'none', sm: 'flex' },
        position: "fixed",
        top:0,
        height: "64px",
        width:"-webkit-fill-available",
        zIndex: theme.zIndex.modal-1,
        padding:"0 64px"

      }}
    >
        <List sx={{display:"inline-block"}}>
        <ListItem
          sx={{
            display:"inline-block"
            
          }}
          
        >
          <ListItemButton onClick={() => navigate.push("/")}>
            <ListItemContent sx={{ alignItems: "center", display: "flex", textAlign:"center"}}>
            <Typography>HS</Typography>
            </ListItemContent>
          </ListItemButton>
        </ListItem>
        </List>
      <List sx={{display:"flex", flexDirection:"row",
                      justifyContent:"flex-end",}}>
        {routes.map((item,index) => {
          const NavItemLink = item.type === 'route' ? NavLink : Link;
          return (
            <>
            <ListItem sx={{ "--ListItem-paddingY": "1rem" }} key={index}>
              <ListItemButton
                selected={pathname.includes(item.route)}
              >
                <NavItemLink style={{ textDecoration: 'none' }} target={item.type === 'link' ? '_blank' : undefined} href={item.route}>
                  <ListItemContent
                    sx={(theme) => ({
                      
                      textDecoration: 'none',
                      
                      ...theme.typography["body-sm"],
                      
                      fontWeight:"600",
                     
                      
                     })}
                    
                  >
                    {item.title}
                  </ListItemContent>
                </NavItemLink>
              </ListItemButton>
            </ListItem>
            {index<3 && <ListDivider inset="gutter" orientation="vertical" />}
            </>
          );
        })}
      </List>
    </Sheet>
  );
}

export default NavBar;