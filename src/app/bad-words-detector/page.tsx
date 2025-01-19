"use client";

import { Textarea } from "@/components/ui/textarea";
import { ChangeEventHandler, useState } from "react";

const badWords: string[] = ["dead"];

export default function BadWordsDetector() {
  const [text, setText] = useState("");
  const [warning, setWarning] = useState(false);

  // Check if text contains any bad words
  const handleChange: ChangeEventHandler<HTMLTextAreaElement> | undefined = (e) => {
    const inputText = e.target.value;
    setText(inputText);

    const containsBadWord = badWords.some((word) => inputText.toLowerCase().includes(word));
    setWarning(containsBadWord);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-700 mb-4">Bad Words Detector</h1>
        <Textarea
          className="w-full p-4 border border-gray-300 rounded-md"
          placeholder="Type something..."
          value={text}
          onChange={handleChange}
          rows={10}
        />
        {warning && <p className="text-red-500 mt-4 font-semibold">Warning: Your text contains bad words!</p>}
      </div>
    </div>
  );
}
