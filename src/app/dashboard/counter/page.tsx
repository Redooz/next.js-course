import { CartCounter } from "@/shooping-cart";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shooping cart",
  description: "Counter page",
}

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <span>Products in cart:</span>
      <CartCounter />
    </div>
  );
}
