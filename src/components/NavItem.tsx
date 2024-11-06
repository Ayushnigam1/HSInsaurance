"use client"
import Insurance from "@/interface/Insurances";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { ListItem, Dropdown, MenuButton, Menu, MenuItem } from "@mui/joy";
import NavLink from "next/link";

function NavItem({ item }: { item: Insurance }) {
    return (
        <ListItem sx={{padding: 0}}>
            <Dropdown>
                <MenuButton sx={{ border: 0 }} endDecorator={<ChevronDownIcon height={18} />}>{item.insurance}</MenuButton>
                <Menu sx={{ border: 0, boxShadow: (theme) => theme.shadow.xl, padding: 2 }}>
                    {item.plans?.map(plan =>
                        <NavLink key={plan.plan} style={{ textDecoration: "none", color: "black" }} href={`/${item.insurance?.replace(/\s+/g, '_')}/${plan.plan?.replace(/\s+/g, '_')}`}>
                            <MenuItem sx={{ borderRadius: (theme) => theme.radius.sm }}>
                                {plan.plan}
                            </MenuItem>
                        </NavLink>
                    )}
                </Menu>
            </Dropdown>
        </ListItem>
    )
}

export default NavItem