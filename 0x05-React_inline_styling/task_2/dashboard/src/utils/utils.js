export const getFullYear = () => {
  let dateYear = new Date();
  return (dateYear.getFullYear() );
}

export const getFooterCopy = (isIndex) => {
  if (isIndex === true) {
    return "Holberton School";
  } else {
    return "Holberton School main dashboard";
  }
}

export const getLatestNotification = () => {
  return '<strong>Urgent requirement</strong> - complete by EOD';
}
