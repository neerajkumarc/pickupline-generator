"use client"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function Component() {
  const router = useRouter()
  return (
    <div>
          
      <Button className="pink-btn" onClick={()=>{
        router.push('/generate-pickupline')
      }}>
        🤍 Generate one for me 🤍
      </Button>
    </div>
  )
}