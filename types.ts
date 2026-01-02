export enum AppView {
  DASHBOARD = 'DASHBOARD',
  CONVERTER = 'CONVERTER',
  SUMMARIZER = 'SUMMARIZER',
  GPA_CALCULATOR = 'GPA_CALCULATOR',
  CHECKLIST = 'CHECKLIST',
  AUDIO_TRANSCRIBER = 'AUDIO_TRANSCRIBER',
  VIDEO_TRANSCRIBER = 'VIDEO_TRANSCRIBER'
}

export interface TodoItem {
  id: string;
  text: string;
  completed: boolean;
}

export interface GpaSubject {
  id: string;
  name: string;
  credit: number;
  grade: number;
}

export enum GradeValue {
  A = 4.0,
  B_PLUS = 3.5,
  B = 3.0,
  C_PLUS = 2.5,
  C = 2.0,
  D_PLUS = 1.5,
  D = 1.0,
  F = 0.0
}
