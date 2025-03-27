"use client";

import { Tag, TagInput } from "emblor";
import { FormEventHandler, useRef, useState } from "react";
import { BAD_WORDS } from "./constants";
import FileUploadForm from "./FileTextUpload";
import { useToast } from "@/hooks/use-toast";

export default function BadWordsDetector() {
  const { toast } = useToast();
  const [text, setText] = useState<string>("");
  const contentRef = useRef<HTMLDivElement>(null);

  // Convert all words to lowercase, remove duplicates, and then return the array
  const setOfBadWords = [...new Set(BAD_WORDS.map((word) => word.toLowerCase()))].map((word) => ({
    id: word,
    text: word,
  }));

  const [words, setWords] = useState<Tag[]>(setOfBadWords);
  const [activeTagIndex, setActiveTagIndex] = useState<number | null>(null);

  const handleContentChange: FormEventHandler<HTMLDivElement> | undefined = (e) => {
    const inputText = e.currentTarget.innerHTML;
    setText(inputText);
  };

  const handleCheckBadWords = () => {
    // Create a case-insensitive regex from the BAD_WORDS list
    const regex = new RegExp(`\\b(${words.map((e) => e.text).join("|")})`, "gi");
    // const containBadWords = words.some((word) => text.includes(word.text));
    const containBadWords = regex.test(text);

    // Check if there are any bad words in the text

    // Replace matched bad words with a highlighted span
    const highlightedText = text.replace(regex, "<mark>$&</mark>");

    if (contentRef.current && containBadWords) {
      contentRef.current.innerHTML = highlightedText;
      toast({
        variant: "destructive",
        title: "Hư hỏng",
        description: "Có vài từ hư hỏng!",
        duration: 5000,
      });
    } else {
      toast({
        variant: "default",
        title: "Giỏi quá",
        description: "Em bé dạo này ngoan và ít chửi bậy!",
        duration: 5000,
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-16 py-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full min-w-full">
        <h1 className="text-3xl font-bold text-gray-700 my-4">Bad Words Detector</h1>
        <FileUploadForm setText={(input) => setText(input)} onCheck={handleCheckBadWords} />
        <div
          ref={contentRef}
          className="container__mirror w-full min-h-[200px] p-2 text-sm font-normal border border-gray-300 rounded-md resize-y overflow-auto whitespace-pre-wrap"
          contentEditable
          onInput={handleContentChange}
        />
        <div>
          <TagInput
            placeholder="Enter the word"
            tags={words}
            setTags={(tags) => {
              setWords(tags);
            }}
            styleClasses={{
              input: "w-full sm:max-w-[350px]",
            }}
            inlineTags
            activeTagIndex={activeTagIndex}
            setActiveTagIndex={setActiveTagIndex}
          />
        </div>
      </div>
    </div>
  );
}
