import { format } from "date-fns";

export const dateFormat = (date: string) => {
  const d = typeof date === "string" ? new Date(date) : date;

  const valid = d instanceof Date && !isNaN(d.getTime());

  if (!valid) return "-";

  return format(d, 'dd/MM/yyyy');
}