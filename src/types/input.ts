export interface Props {
  label: string;
  addonBefore: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
