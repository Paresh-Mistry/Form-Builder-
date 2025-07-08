export type FieldType =
  | 'text'
  | 'textarea'
  | 'email'
  | 'url'
  | 'password'
  | 'dropdown'
  | 'radio'
  | 'boolean'
  | 'rating'
  | 'button'
  | 'date'
  | 'time'
  | 'upload'
  | 'image'
  | 'currency';


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
