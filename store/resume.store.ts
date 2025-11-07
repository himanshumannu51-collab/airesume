import { create } from 'zustand';

export type ResumeData = {
  name: string;
  email: string;
  phone: string;
  summary: string;
  experience: string[];
  education: string[];
  skills: string[];
  template: string;
};

type ResumeStore = {
  data: ResumeData;
  update: (data: Partial<ResumeData>) => void;
  setTemplate: (template: string) => void;
};

export const useResumeStore = create<ResumeStore>((set) => ({
  data: {
    name: '',
    email: '',
    phone: '',
    summary: '',
    experience: [],
    education: [],
    skills: [],
    template: 'modern',
  },
  update: (newData) => set((state) => ({ data: { ...state.data, ...newData } })),
  setTemplate: (template) => set((state) => ({ data: { ...state.data, template } })),
}));
