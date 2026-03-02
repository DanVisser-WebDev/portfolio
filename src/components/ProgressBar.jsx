import { useState, useEffect } from "react";

const ProgressBar = ({ percentage = 0, ...props }) => {
  const [progress, setProgress] = useState(percentage);

  // Update if parent changes percentage
  useEffect(() => {
    setProgress(Math.min(100, Math.max(0, percentage)));
  }, [percentage]);

  return (
    <div className="w-full max-w-md space-y-3" {...props}>
      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-2xl h-6 overflow-hidden">
        <div
          className="h-full bg-brand-green transition-all duration-500 ease-in-out flex items-center justify-center text-white text-sm font-semibold"
          style={{ width: `${progress}%` }}>
          {progress}%
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
