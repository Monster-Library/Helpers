type ID = string | symbol | number;

interface item {
  _id: ID;
}

const filterOneById = (data: item[] & any[], _id: ID) => {
  const filtered = data.filter(({ _id }) => _id === _id)[0];

  return filtered;
};

export default filterOneById;
