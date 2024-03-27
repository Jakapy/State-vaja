import { useEffect, useState } from "react";
import { Textarea } from "./ui/textarea";
import { Slider } from "@/components/ui/slider";

export function TextLengthCounter() {
  // Naredi state `isDark`
  const [text, setText] = useState("");
  const [maxChars, setMaxChars] = useState(100);
  const [isOverLimit, setIsOverLimit] = useState(false);

  useEffect(() => {
    console.log(text);
    if (text.length > maxChars) {
      alert("Predolgo besedilo");
    }
  }, [text]);

  return (
    <>
      <Slider
        value={[maxChars]}
        onValueChange={(new_value) => setMaxChars(new_value[0])}
      ></Slider>
      <Textarea
        value={text}
        onChange={(v) => setText(v.target.value)}
        placeholder="Tukaj vnesi besedilo"
      ></Textarea>
    </>
  );
}
