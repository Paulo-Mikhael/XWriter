const styledSection: string[] = [
  "w-full",
  "h-screen",
  "flex",
  "items-center",
  "justify-center",
  "flex-col",
  "gap-5"
]
const inputContainer: string[] = [
  "flex",
  "flex-col",
  "gap-2"
]
const styledInput: string[] = [
  "px-3",
  "py-2",
  "text-stone-400",
  "border-2",
  "border-b-4",
  "border-b-gray-300",
  "outline-none",
  "rounded-md",
  "focus:border-blue-500",
  "w-96"
]

export const sectionStyles = styledSection.join(" ");
export const inputContainerStyles = inputContainer.join(" ");
export const inputStyles = styledInput.join(" ");