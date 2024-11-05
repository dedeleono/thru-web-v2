// "use client";

// import * as React from "react";
// import { useTranslation } from "react-i18next";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Button } from "@/components/ui/button";
// import { Icons } from "@/components/shared/icons";

// export function LanguageSwitcher() {
//   const { t, i18n } = useTranslation();

//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button variant="ghost" size="sm" className="size-8 px-0">
//           <Icons.languages className="size-4" />
//           <span className="sr-only">{t("common.language.switch")}</span>
//         </Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent align="end">
//         <DropdownMenuItem onClick={() => i18n.changeLanguage("en")}>
//           <span className="mr-2">🇺🇸</span>
//           <span>{t("common.language.en")}</span>
//         </DropdownMenuItem>
//         <DropdownMenuItem onClick={() => i18n.changeLanguage("es")}>
//           <span className="mr-2">🇪🇸</span>
//           <span>{t("common.language.es")}</span>
//         </DropdownMenuItem>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// }
