import Link from "next/link";
import { RefreshButton } from "./refresh-button";

export default function Page() {
  return (
    <div className="space-y-4">
      <div>
        <Link href="/route1">Go to /route1</Link>
      </div>

      <div>
        <RefreshButton />
      </div>
    </div>
  );
}