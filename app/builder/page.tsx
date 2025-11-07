import ResumeEditor from "@/components/builder/ResumeEditor";
import ResumePreview from "@/components/builder/ResumePreview";
import ATSScanner from "@/components/builder/ATSScanner";
import TemplateSwitcher from "@/components/builder/TemplateSwitcher";
import ExportMenu from "@/components/builder/ExportMenu";
import ProgressBar from "@/components/builder/ProgressBar";

export default function Builder() {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Build Your Resume</h1>
        <TemplateSwitcher />
      </div>

      <ProgressBar />

      <div className="grid md:grid-cols-2 gap-6">
        <ResumeEditor />
        <div className="space-y-6">
          <ResumePreview />
          <ATSScanner />
          <ExportMenu />
        </div>
      </div>
    </div>
  );
}
