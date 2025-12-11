import { SKILLS_DATA } from "@/constants/constants";

export default function Skills() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-wrap gap-2">
        {SKILLS_DATA.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-slate-100 dark:bg-gray-800 text-slate-700 dark:text-gray-300 rounded-full text-sm border border-slate-200 dark:border-gray-700"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
