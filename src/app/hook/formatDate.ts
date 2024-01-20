export const formatDate = (date: Date | undefined) => {
  const format = new Intl.DateTimeFormat("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);

  return format;
};
