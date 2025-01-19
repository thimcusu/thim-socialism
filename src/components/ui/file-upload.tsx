/**
 * v0 by Vercel.
 * @see https://v0.dev/t/aDFucFbMyb8
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Input } from "@/components/ui/input";

export interface FileUploadProps extends React.InputHTMLAttributes<HTMLInputElement> {
  fileDescription?: string;
}

export default function FileUpload(props: FileUploadProps) {
  const { ...inputProps } = props;
  return <Input id="file" type="file" placeholder="File" {...inputProps} />;
}
