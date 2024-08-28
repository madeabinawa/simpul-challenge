import { differenceInDays } from "date-fns";

export const tasksDeadline = (deadlineDate: string) => {

  const d = typeof deadlineDate === "string" ? new Date(deadlineDate) : deadlineDate;

  const valid = d instanceof Date && !isNaN(d.getTime());

  if (!valid) { return "" }

  const diff = differenceInDays(d, new Date())

  if (diff === 0) {
    return "Tomorrow"
  }

  return `${diff} Days Left`
}