import { TAGS } from "../contants";

export const generateTag = () => {
  const randomTag = TAGS[Math.floor(Math.random() * TAGS.length)]

  return randomTag
}