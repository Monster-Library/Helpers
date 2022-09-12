const filterOneBy = (data, elementName, element) => {
    const filtered = data.filter((el) => el[elementName] === element)[0];
    return filtered;
};
export default filterOneBy;
