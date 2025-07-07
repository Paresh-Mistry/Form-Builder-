export type FieldType =
  | 'text'
  | 'textarea'
  | 'dropdown'
  | 'radio'
  | 'boolean'
  | 'upload'
  | 'image';

export interface Field {
  id: string;
  label: string;
  type: FieldType;
  required?: boolean;
  options?: string; // comma-separated options for dropdown or radio
  isEditing: boolean
  helpText: string
}

export interface Section {
  id: string;
  title: string;
  fields: Field[];
}
