import Link from "next/link";
import { RefreshButton } from "./refresh-button";

export default function Page() {
  return (
    <div className="space-y-4 p-6">
      <p className="leading-normal max-w-[65ch]">
        There&apos;s a /route1 page in this app that is an 
        async server component. If you visit /route1 directly
        then the component does not render its suspense boundaries.
      </p>

      <p className="leading-normal max-w-[65ch]">
        However, if you Link to transition to /route1 then the
        suspenses boundaries are both triggered and displayed.
      </p>

      <p className="leading-normal max-w-[65ch]">
        Also, one of the components does not suspend, so I wasn&apos;t
        expecting its boundary to be displayed.
      </p>

      <p className="leading-normal max-w-[65ch]">
        The other component awaits a resolved promise. I also wasn&apos;t
        expecting its boundary to be displayed.
      </p>

      <div>
        <Link prefetch={false} href="/route1" className="text-blue-500">Go to /route1</Link>
      </div>

      <div>
        <RefreshButton />
      </div>
    </div>
  );
}