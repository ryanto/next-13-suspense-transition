import { Suspense } from "react";

export default async function Home() {
  return (
    <div className="space-y-4">
      <Suspense fallback={<p>Suspends on transitions, but not initial load.</p>}>
        <NonSuspendingServerComponent />
      </Suspense>

      <Suspense fallback={<p>Suspends on transitions, but not initial load.</p>}>
        <AwaitResolvedPromise />
      </Suspense>
    </div>
  )
}

async function NonSuspendingServerComponent() {
  return <div>This component doesnt suspend.</div>
}

async function AwaitResolvedPromise() {
  await Promise.resolve();

  return <div>This component awaits a resolved promise.</div>
}