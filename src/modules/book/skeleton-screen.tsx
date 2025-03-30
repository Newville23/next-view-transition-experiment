import Container from "@/shared/components/container";

/**
 * Using a `loading.tsx` file with a skeleton UI may interfere with the expected behavior of the View Transition API.
 *
 * ## Why?
 * - A loading skeleton may introduce an additional render step, disrupting the transition.
 *
 * ## Considerations:
 * - The usage of `suspense` or a placeholder that preserves layout consistency, check BookCover component.
 */
export default function SkeletonScreen() {
  return (
    <div className="py-10">
      <Container>
        <div className="flex justify-center">
          <div className="h-80 w-60 bg-green-400/10 animate-pulse rounded-r-lg"></div>
          <div className="flex-3 ml-4 animate-pulse">
            <div className="h-8 rounded bg-green-400/10"></div>
            <div className="grid grid-cols-3 gap-4 py-4">
              <div className="col-span-2 h-4 rounded bg-green-400/10 "></div>
              <div className="col-span-1 h-4 rounded bg-green-400/10"></div>
            </div>
            <div className="h-4 rounded my-4 bg-green-400/10"></div>
            <div className="h-4 rounded my-4 bg-green-400/10"></div>
            <div className="h-4 rounded my-4 bg-green-400/10"></div>
          </div>
        </div>
      </Container>
    </div>
  );
}
