const filterOneById = (data, _id) => {
    const filtered = data.filter(({ _id }) => _id === _id)[0];
    return filtered;
};
export default filterOneById;
