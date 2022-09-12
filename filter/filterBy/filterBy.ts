const filterBy = (
  data: any[],
  elementName: string,
  element: string | number | symbol | Date
) => {
  const filtered = data.filter((el) => el[elementName] === element);

  return filtered;
};

export default filterBy;
