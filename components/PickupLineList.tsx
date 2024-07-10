"use client"
import { deletePickupLine } from "@/app/pickuplines/actions";
import { Pickupline } from "@/types/custom";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { MdDeleteOutline } from "react-icons/md";
import { RiFileCopy2Line } from "react-icons/ri";
import { toast } from "sonner"

interface PickupLineListProps {
  pickuplines: Pickupline[];
}

const PickupLineList: React.FC<PickupLineListProps> = ({ pickuplines }) => {
  const router = useRouter()
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-[#A5455C] text-lg mb-4">{pickuplines.length==0?"No pickup lines available, Generate one by clicking below.":"Copy the below pick up lines"}</h2>
      <ul className="space-y-4">
        {pickuplines.map((line, index) => (
          <li key={line.id} className="border-2 border-[#FF2157] max-w-xl rounded-lg p-6 ">
            <div className="flex justify-between"><p className="text-left text-2xl text-[#B5002C] font-medium">Pickup line {index + 1}</p>
            <p className="text-[#FF2157]"><button onClick={() => {navigator.clipboard.writeText(line.pickupline as string)
              toast("Copied ✅!")
            }}><RiFileCopy2Line /></button></p>
            </div>
            <p className="leading-relaxed text-[#FF2157] text-lg text-left">{line.pickupline}</p>
            <p className="text-right text-[#FF2157]"><button onClick={async () => {await deletePickupLine(line.id)
              toast("Deleted ✅!")
            }}><MdDeleteOutline /></button></p>
          </li>
        ))}
      </ul>
      <Button className="pink-btn m-4" onClick={() => router.push("/generate-pickupline")}>🤍 Regenerate pickup line 🤍</Button>
    </div>
  );
};

export default PickupLineList;