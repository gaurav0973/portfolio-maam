import { ACHIEVEMENTS_DATA } from "@/constants/constants";
import { Trophy } from "lucide-react";

export default function Achievements() {
  return (
    <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {ACHIEVEMENTS_DATA.map((achievement, index) => (
        <div key={index} className="flex items-start space-x-3">
          <Trophy className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
          <p className="text-slate-700 dark:text-gray-300">{achievement}</p>
        </div>
      ))}
    </div>
  );
}
