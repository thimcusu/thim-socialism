export const getBadWordsInLocalStorage = (fixedBadWords: string[]): string[] => {
  const raw = localStorage.getItem("badWords");

  const badWords = typeof raw === "string" ? JSON.parse(raw) : null;
  if (badWords && Array.isArray(badWords)) {
    return badWords;
  }

  localStorage.setItem("badWords", JSON.stringify(fixedBadWords));

  return fixedBadWords;
};
