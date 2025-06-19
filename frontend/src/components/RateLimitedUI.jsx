import { ZapIcon } from "lucide-react";

function RateLimitedUI() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="bg-primary/10 border-primary/30 rounded-lg border shadow-md">
        <div className="flex flex-col items-center p-6 md:flex-row">
          <div className="bg-primary/20 mb-4 flex-shrink-0 rounded-full p-4 md:mr-6 md:mb-0">
            <ZapIcon className="text-primary size-10" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="mb-2 text-xl font-bold">Rate Limit Reached</h3>
            <p className="text-base-content mb-1">
              You've made too many requests in a short period. Please wait a
              moment.
            </p>
            <p className="text-base-content/70 text-sm">
              Try again in a few seconds for the best experience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RateLimitedUI;
