"use client";
import {
  Button,
  Dropdown,
  List,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  Sheet,
  Stack,
} from "@mui/joy";
import { defineQuery } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { BuildingLibraryIcon, ChevronDownIcon, PhoneIcon } from "@heroicons/react/16/solid";
import Insurance from "@/interface/Insurances";
import { useEffect, useState } from "react";
import useConv from "@/hooks/useConv";

const getPlans = async () => {
  const PLANS_QUERY = defineQuery(`*[_type == "Insurance"]{
  insurance,
  order,
  "plans": *[_type == "Plan" && references(^._id)]{
    plan
  }
}`)
  const plans: Insurance[] = await client.fetch(PLANS_QUERY, {}, { next: { revalidate: 60 } })
  return plans;
}

function NavBar() {
  const [plans, setPlans] = useState<Insurance[]>([])
  const { onClick } = useConv()

  useEffect(() => {
    getPlans().then((plans) => setPlans(plans))
  }, [])

  return (
    <Sheet
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: (theme) => theme.zIndex.modal,
        height: "64px",
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
          {plans.sort((a, b) => a.order - b.order).map((item, index) => {
            return (
              <ListItem key={index}>
                <Dropdown>
                  <MenuButton sx={{ border: 0 }} endDecorator={<ChevronDownIcon height={18} />}>{item.insurance}</MenuButton>
                  <Menu sx={{ border: 0, boxShadow: (theme) => theme.shadow.xl, padding: 2 }}>
                    {item.plans?.map(plan =>
                      <MenuItem key={plan.plan} sx={{ borderRadius: (theme) => theme.radius.sm }}>{plan.plan}</MenuItem>
                    )}
                  </Menu>
                </Dropdown>
              </ListItem>
            );
          })}
          <ListItem>
            <Button startDecorator={<PhoneIcon height={18} />} onClick={onClick}>Contact Us</Button>
          </ListItem>
        </List>
      </Stack>
    </Sheet>
  );
}

export default NavBar;