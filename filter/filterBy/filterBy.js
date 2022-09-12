const filterBy = (data, elementName, element) => {
    const filtered = data.filter((el) => el[elementName] === element);
    return filtered;
};
export default filterBy;
