const filterOneBy = (
  data: any[],
  elementName: string,
  element: string | number | symbol | Date
) => {
  const filtered = data.filter((el) => el[elementName] === element)[0];

  return filtered;
};

export default filterOneBy;
