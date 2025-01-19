import React from "react";
import * as XLSX from "xlsx";

type ExcelReaderInputProps = {
  setWords: (words: string[]) => void;
};

export default function ExcelReader(_props: ExcelReaderInputProps) {
  const handleFileUpload: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e: ProgressEvent<FileReader>) => {
      const binaryStr = e.target?.result;
      const workbook = XLSX.read(binaryStr, { type: "binary" });

      // Get the first sheet name
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];

      // Convert the sheet to JSON
      const sheetData = XLSX.utils.sheet_to_json(sheet);
      console.log(sheetData);
      // setWords(sheetData);
    };

    reader.readAsBinaryString(file);
  };

  return (
    <input
      type="file"
      accept=".xlsx, .xls"
      onChange={handleFileUpload}
      className="mb-4 p-2 border border-gray-300 rounded-md"
    />
  );
}
