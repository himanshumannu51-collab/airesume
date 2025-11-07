'use client';
import { exportPDF } from "@/lib/export/pdf";
import { exportDOCX } from "@/lib/export/docx";

export default function ExportMenu() {
  return (
    <div className="flex gap-3">
      <button onClick={exportPDF} className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
        Download PDF
      </button>
      <button onClick={exportDOCX} className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
        Download DOCX
      </button>
    </div>
  );
}
