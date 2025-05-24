"use client";

import { Tag, TagInput } from "emblor";
import { FormEventHandler, SetStateAction, useEffect, useRef, useState } from "react";
import { BAD_WORDS, STRICT_BAD_WORDS } from "./constants";
import FileUploadForm from "./FileTextUpload";
import { useToast } from "@/hooks/use-toast";
import { getBadWordsInLocalStorage } from "./utils";

export default function BadWordsDetector() {
  const { toast } = useToast();
  const [text, setText] = useState<string>("");
  const contentRef = useRef<HTMLDivElement>(null);
  const [words, setWords] = useState<Tag[]>([]);
  const [activeTagIndex, setActiveTagIndex] = useState<number | null>(null);

  useEffect(() => {
    // Convert all words to lowercase, remove duplicates, and then return the array
    const setOfBadWords = [...new Set(getBadWordsInLocalStorage(BAD_WORDS).map((word) => word.toLowerCase()))].map(
      (word) => ({
        id: word,
        text: word,
      })
    );

    setWords(setOfBadWords);
  }, []);

  const handleContentChange: FormEventHandler<HTMLDivElement> | undefined = (e) => {
    const inputText = e.currentTarget.innerHTML;
    setText(inputText);
  };

  const handleSetInputTag = (newTags: SetStateAction<Tag[]>) => {
    const updatedTags: Tag[] = typeof newTags === "function" ? newTags(words) : newTags;

    localStorage.setItem("badWords", JSON.stringify(updatedTags.map((t) => t.text)));
    setWords(newTags);
  };

  const handleCheckBadWords = () => {
    const badWordRegex = new RegExp(`\\b(${words.map((e) => e.text).join("|")})\\b`, "gi");
    const strictRegex = new RegExp(`(${STRICT_BAD_WORDS.join("|")})`, "gi");

    const containBadWords = badWordRegex.test(text);
    const containStrictBadWords = strictRegex.test(text);

    // Step 1: highlight whole-word bad words
    let markedText = text.replace(badWordRegex, "<mark>$&</mark>");

    // Step 2: highlight strict bad words in unmarked areas
    const parts = markedText.split(/(<mark>.*?<\/mark>)/);
    markedText = parts
      .map((part) => {
        if (part.startsWith("<mark>")) return part;
        return part.replace(strictRegex, (match) => `<mark>${match}</mark>`);
      })
      .join("");

    // Show toast and inject HTML
    if (contentRef.current && (containBadWords || containStrictBadWords)) {
      contentRef.current.innerHTML = markedText;
      toast({
        variant: "destructive",
        title: "Hư hỏng",
        description: containStrictBadWords ? "Có từ nhạy cảm nghiêm trọng!" : "Có vài từ hư hỏng!",
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
            setTags={handleSetInputTag}
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
