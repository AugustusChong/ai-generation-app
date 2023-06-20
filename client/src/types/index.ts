export type Form = {
  name: string;
  prompt: string;
  photo: string;
};

export interface IPostData {
  name: string;
  photo: string;
  prompt: string;
  __v: number;
  _id: string;
}

export type CardProps = {
  _id: string;
  name: string;
  prompt: string;
  photo: string;
};

export type FormFieldProps = {
  labelName?: string;
  type?: string;
  name?: string;
  placeholder?: string;
  value?: string;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isSurpriseMe?: boolean;
  handleSurpriseMe?: () => void;
};

export type RenderCardsProps = {
  data: IPostData[];
  title: string;
};
