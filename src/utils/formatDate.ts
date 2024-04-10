
export const formatDateSimple = (date: string , locale: string) : string=>{
  const DATE = new Date(date);

  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    timeZone: 'UTC',
  };

  const formattedDate = new Intl.DateTimeFormat(locale, options).format(DATE);
  return formattedDate
}


export const formatDateDetailed = (date: string , locale: string) : string=>{
  const DATE = new Date(date);

  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };

  const formattedDate = new Intl.DateTimeFormat(locale, options).format(DATE);
  const timeString = DATE.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  console.log({formattedDate});
  return `${formattedDate}  ${timeString}`
}


export const formatDateDDMMYYYY = (date: string ) : string=>{
  const DATE = new Date(date);

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };

  const formattedDate = DATE.toLocaleDateString("en-US", options)
  return formattedDate
}

export const formatDateTime = (date: string ) : string=>{
  const DATE = new Date(date);
  const timeString = DATE.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  return timeString
}