import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface FileUploadFormProps {
  setText: (text: string) => void;
  onCheck: () => void;
}

export default function FileUploadForm({ onCheck }: FileUploadFormProps) {
  async function handleUploadFile(_formData: FormData) {
    // const file = await formData.get("file");
    onCheck();
  }

  const handleFileChange = (_event: React.ChangeEvent<HTMLInputElement>) => {
    // const file = event.target.files?.[0];
  };

  return (
    <form className="flex justify-between" method="POST" action={handleUploadFile} encType="multipart/form-data">
      <Input
        className="w-[50%] mb-3"
        id="file"
        type="file"
        placeholder="File"
        onChange={handleFileChange}
        accept=".txt, .docx, .doc, .pdf, .odt"
      />
      <Button type="submit">Check</Button>
    </form>
  );
}
