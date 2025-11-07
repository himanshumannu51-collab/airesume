'use client';
import { useResumeStore } from "@/store/resume.store";
import { templates } from "@/lib/templates";

export default function ResumePreview() {
  const { data } = useResumeStore();
  const Template = templates[data.template] || templates.modern;

  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-[var(--border)]">
      <div className="max-w-2xl mx-auto">
        <Template data={data} />
      </div>
    </div>
  );
}
