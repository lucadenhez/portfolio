import { getTranslations } from "next-intl/server";
import NavClient from "./NavClient";

export default async function Nav() {
  const navLang = await getTranslations("nav");

  const mobileNavItems = [
    { label: navLang("works"), path: "/works", outside: false },
    { label: navLang("photography"), path: "/photography", outside: false },
    { label: navLang("about"), path: "/about", outside: false },
    {
      label: navLang("resume"),
      path: "https://drive.google.com/file/d/1tZ5W3mghiMNkUL9GS9WbxTJuT27AfmCn/view?usp=sharing",
      outside: true,
    },
  ];

  const desktopNavItems = [
    { label: navLang("works"), path: "/works" },
    { label: navLang("photography"), path: "/photography" },
    { label: navLang("about"), path: "/about" },
  ];

  return (
    <NavClient
      desktopNavItems={desktopNavItems}
      mobileNavItems={mobileNavItems}
    />
  );
}
