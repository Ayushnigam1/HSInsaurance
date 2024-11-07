"use client";
import { useMotionValue, useMotionValueEvent, useScroll } from "framer-motion";
import { Sheet, useTheme } from "@mui/joy";
import { PropsWithChildren, useState } from "react";

function AppBar(props: PropsWithChildren) {
  const { scrollY} = useScroll();
  const [isTop, setIsTop] = useState(true)
  const theme = useTheme()

  useMotionValueEvent(scrollY, "change", (y) => {
    if (y <= 0) {
        setIsTop(true)
    } else {
        setIsTop(false)
    }
  })

  return (
    <Sheet
      sx={{
        position: "sticky",
        top: 0,
        zIndex: (theme) => theme.zIndex.popup,
        height: "64px",
        background: (theme) => theme.palette.background.body,
        boxShadow: isTop ? 'none': theme.shadow.md,
      }}
    >
      {props.children}
    </Sheet>
  );
}

export default AppBar;
