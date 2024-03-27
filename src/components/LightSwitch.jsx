import { useEffect, useState } from "react";
import { Switch } from "./ui/switch";

export function LightSwitch() {
  // Naredi state `isDark`
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement; // najde <html> značko
    root.classList.remove("light", "dark"); // odstrani prejšnji class
    root.classList.add(isDark ? "dark" : "light");
  }, [isDark]);

  return <Switch checked={isDark} onCheckedChange={setIsDark}></Switch>;
}

// Uporabi useEffect za dodajanje ali odstranjevanje classa `dark` na `document.documentElement` glede na vrednost `isDark`

// Prikazi Switch komponento in ji posreduj `isDark` in `setIsDark` kot props
