import { addDays, formatISO } from "date-fns";

export const dateGenerator = (prevDays?: number) => {
  const now = new Date();

  if (prevDays) {
    const prev = addDays(now, prevDays);

    return formatISO(prev);
  }

  return formatISO(now);
}

