import { CERTIFICATIONS_DATA } from "@/constants/constants";
import { Award } from "lucide-react";

export default function Certifications() {
  return (
    <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {CERTIFICATIONS_DATA.map((cert, index) => (
        <div key={index} className="flex items-start space-x-3">
          <Award className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
          <p className="text-slate-700 dark:text-gray-300">{cert}</p>
        </div>
      ))}
    </div>
  );
}
