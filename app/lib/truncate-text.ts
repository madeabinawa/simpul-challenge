export const truncateText = (text: string, limit: number = 75) => {
  if (text.length > limit) {
    return text.substring(0, limit) + " ..."
  }

  return text
}
