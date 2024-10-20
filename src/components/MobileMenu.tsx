"use client"
import { routes } from "@/routes";
import { Accordion, AccordionDetails, AccordionGroup, AccordionSummary, Container, Drawer, IconButton, Link, List, ListItem, ListItemButton, ListItemContent, ModalClose, Sheet, Stack, Typography, useTheme } from "@mui/joy";
import NavLink from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Bars2Icon, BuildingLibraryIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import Insurance from "@/interface/Insurances";
import ContactButton from "./ContactButton";

interface MobileMenuProps {
	plans: Insurance[]
}
function MobileMenu(props: MobileMenuProps) {
	const { plans } = props
	const theme = useTheme()
	const [open, setOpen] = useState(false)
	return (
		<>
			<Stack direction='row' gap={1} sx={{ display: { lg: 'none' } }} alignContent='center'>
				<ContactButton />
				<Stack height={64} direction='row' alignItems='center' >
					<IconButton
						onClick={() => setOpen(o => !o)}
						color='neutral'
					>
						<Bars2Icon height={18} />
					</IconButton>
				</Stack>
			</Stack>
			<Drawer slotProps={{ content: { sx: { bgcolor: 'transparent', boxShadow: 'none', p: 1, height: '100vh' } } }} open={open} anchor='top' onClose={() => setOpen(o => !o)}>
				<Sheet sx={{ border: 1, borderRadius: 'sm', borderColor: theme.palette.divider, boxShadow: theme.shadow['sm'] }}>
					<List>
						<ListItem sx={{ marginBottom: 2 }}>
							<ListItemContent sx={{ justifyContent: 'space-between', alignItems: 'center', display: "flex" }}>
								<NavLink href={'/'} onClick={() => setOpen(o => !o)}>
									<BuildingLibraryIcon height={24} />
								</NavLink>
								<ModalClose />
							</ListItemContent>
						</ListItem>
						{plans.map((insurance) => {
							return (
								<ListItem key={insurance.insurance}>
									<AccordionGroup>
										<Accordion>
											<AccordionSummary>
												<Typography textTransform='uppercase' color="neutral" level="body-sm">
													{insurance.insurance}
												</Typography>
											</AccordionSummary>
											<AccordionDetails>
												{insurance.plans?.map((plan) =>
													<NavLink key={plan.plan} style={{ textDecoration: "none", color: "black" }} href={`${insurance.insurance?.replace(/\s+/g, '_')}#${plan.plan?.replace(/\s+/g, '_')}`}>
														<ListItemButton
															onClick={() => setOpen(o => !o)}
														>
															<ListItemContent
																sx={(theme) => ({
																	textDecoration: 'none',
																	...theme.typography['body-md'],
																	fontFamily: (theme) => theme.fontFamily.display,
																	lineHeight: 2
																})}
															>
																{plan.plan}
															</ListItemContent>
														</ListItemButton>
													</NavLink>
												)}
											</AccordionDetails>
										</Accordion>
									</AccordionGroup>
								</ListItem>
							);
						})}
					</List>
				</Sheet>

			</Drawer>
		</>
	)
}

export default MobileMenu;