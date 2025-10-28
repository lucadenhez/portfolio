"use client";

import { useState, useEffect } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function NavClient({ desktopNavItems, mobileNavItems }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);
    window.addEventListener("resize", updateWidth);
    updateWidth();
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return width > 768 ? (
    <DesktopNav items={desktopNavItems} />
  ) : (
    <MobileNav items={mobileNavItems} />
  );
}
