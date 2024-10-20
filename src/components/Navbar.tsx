import {
  List,

  Stack,
} from "@mui/joy";
import { BuildingLibraryIcon } from "@heroicons/react/16/solid";
import NavLink from 'next/link';
import { getInsurances } from "@/util/getInsurances";
import NavItem from "./NavItem";
import ContactButton from "./ContactButton";
import AppBar from "./AppBar";
import MobileMenu from "./MobileMenu";

async function NavBar() {
  const plans = await getInsurances();
  const sortedPlans = plans.sort((a, b) => a.order - b.order)

  return (
    <AppBar>
      <Stack direction='row' maxWidth='lg' margin='auto' height={'64px'} alignItems='center' justifyContent='space-between' paddingX={2}>
        <NavLink style={{ textDecoration: "none", color: "black" }} href={'/'}><BuildingLibraryIcon height={26} /></NavLink>
        <List sx={{
          display: { lg: "flex", xs: 'none' }, flexDirection: "row",
          justifyContent: "flex-end",
        }}>
          {sortedPlans.map((item, index) => {
            return (
              <NavItem item={item} key={index} />
            );
          })}
          <ContactButton />
        </List>
        <MobileMenu plans={sortedPlans}/>
      </Stack>
    </AppBar>
  );
}

export default NavBar;