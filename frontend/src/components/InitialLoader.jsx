import { Loader2 } from "lucide-react";

const InitialLoader = ({ progress = 0, redirectMode = false }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="flex flex-col items-center space-y-4">
        <Loader2 className="w-16 h-16 text-enipp-purple1 animate-spin" />
        {redirectMode ? (
          <div className="text-gray-400 text-lg font-[Quicksand] font-semibold">
            Redirecting to login...
          </div>
        ) : (
          <>
            <div className="text-gray-400 text-sm">Loading assets... {Math.round(progress)}%</div>
            <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-enipp-purple1 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default InitialLoader;