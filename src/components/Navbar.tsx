"use client";
import {
  Button,
  Container,
  Dropdown,
  Link,
  List,
  ListDivider,
  ListItem,
  ListItemButton,
  ListItemContent,
  Menu,
  MenuButton,
  MenuItem,
  Sheet,
  Stack,
  Typography,
  useTheme,
} from "@mui/joy";
import { usePathname, useRouter } from "next/navigation";
import NavLink from "next/link";
import { routes } from "../routes";
import Image from "next/image";
import { ArrowDownIcon, BuildingLibraryIcon, ChevronDownIcon, PhoneIcon } from "@heroicons/react/16/solid";

function NavBar() {
  const navigate = useRouter();
  const pathname = usePathname();
  const theme = useTheme()
  return (
    <Sheet
      sx={{
        position: 'sticky',
        top: 0,
        height: "64px",
        zIndex:10,
        background: (theme) => theme.palette.background.body,
        boxShadow: (theme) => theme.shadow.md
      }}
    >
      <Stack direction='row' maxWidth='lg' margin='auto' height={'64px'} alignItems='center' paddingX={2}>
        <BuildingLibraryIcon height={26} />
        <List sx={{
          display: "flex", flexDirection: "row",
          justifyContent: "flex-end",
        }}>
          {routes.map((item, index) => {
            const NavItemLink = item.type === 'route' ? NavLink : Link;
            return (
              <ListItem key={index}>
                <Dropdown>
                  <MenuButton sx={{ border: 0 }} endDecorator={<ChevronDownIcon height={18} />}>{item.title}</MenuButton>
                  <Menu sx={{ border: 0, boxShadow: (theme) => theme.shadow.xl, padding: 2 }}>
                    {item.subLinks.map(link =>
                      <MenuItem sx={{ borderRadius: (theme) => theme.radius.sm }}>{link.title}</MenuItem>
                    )}
                  </Menu>
                </Dropdown>
              </ListItem>
            );
          })}
          <ListItem>
            <Button startDecorator={<PhoneIcon height={18} />}>Contact Us</Button>
          </ListItem>
        </List>
      </Stack>
    </Sheet>
  );
}

export default NavBar;