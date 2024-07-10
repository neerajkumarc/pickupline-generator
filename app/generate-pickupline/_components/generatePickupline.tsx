"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { generatePickupLine } from "../action"
import { addPickupLine } from "../../pickuplines/actions";
import { useRouter } from "next/navigation";
export default function GeneratePickupLine() {
  const [style, setStyle] = useState("funny");
  const [crushDescription, setCrushDescription] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const router = useRouter()
  const handleGenerate = async () => {
    setIsGenerating(true)
    const result = await generatePickupLine(style, crushDescription)
    await addPickupLine(result)
    setIsGenerating(false)
    router.push('/pickuplines')
  }

  return (
    <div className="mt-7 max-w-xl w-full space-y-3">
      <p className="text-left font-medium text-2xl text-[#A5455C]">
        Tell us about your crush
      </p>
      <textarea
        className="text-[#FF2157] text-lg w-full rounded-md border-gray-300 border-2 shadow-sm focus:border-black focus:ring-black p-4"
        placeholder={"Describe the lovely person you want to impress.."}
        onChange={(e) => {
          setCrushDescription(e.target.value);
        }}
      />
      <div className="mb-5  space-y-3">
        <p className="text-left font-medium text-2xl text-[#A5455C]">
          Style
        </p>

        <Select
          defaultValue={"funny"}
          onValueChange={(value) => {
            setStyle(value);
          }}
        >
          <SelectTrigger className="w-full text-lg text-[#FF2157]">
            <SelectValue placeholder="Funny" />
          </SelectTrigger>
          <SelectContent className="text-[#FF2157]">
            <SelectItem value="funny">Funny</SelectItem>
            <SelectItem value="playful">Playful</SelectItem>
            <SelectItem value="flirty">Flirty</SelectItem>
            <SelectItem value="romantic">Romantic</SelectItem>
            <SelectItem value="confident">Confident</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button
        className="w-full pink-btn"
        disabled={isGenerating}
        onClick={() => handleGenerate()}
      >
        {isGenerating ? "Generating..." : "🤍 Generate for me 🤍"}
      </Button>
    </div>
  );
}