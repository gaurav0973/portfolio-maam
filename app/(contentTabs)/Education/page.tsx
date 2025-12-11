import { EDUCATION_DATA } from "@/constants/constants";

export default function Education() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {EDUCATION_DATA.map((edu, index) => (
        <div key={index} className="flex items-start space-x-4">
          <div className="mt-1.5 shrink-0">
            <span className="inline-block h-3 w-3 rounded-full bg-blue-500"></span>
          </div>
          <div className="grow">
            <h3 className="font-semibold text-slate-800 dark:text-gray-200">
              {edu.degree}
            </h3>
            <p className="text-sm text-slate-500 dark:text-gray-400">
              {edu.institution} • {edu.year}
            </p>
            <p className="mt-2 text-slate-600 dark:text-gray-400">
              {edu.details}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
