import { Suspense } from "react";
import Callback from "@/components/Callback/Index";

export const dynamic = "force-dynamic";

export default function TerminalPage() {
  return (
    <Suspense fallback={<div className="p-6">Loading callback..</div>}>
      <Callback />
    </Suspense>
  );
}