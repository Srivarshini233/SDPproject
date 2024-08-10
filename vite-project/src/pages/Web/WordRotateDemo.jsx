import WordRotate from "@/components/magicui/word-rotate";

export function WordRotateDemo() {
  return (
    <WordRotate
      className="text-4xl  h-screen w-screen font-bold text-black dark:text-white"
      words={["Hello folks", "Find the Best toys",""]}
    />
  );
}
