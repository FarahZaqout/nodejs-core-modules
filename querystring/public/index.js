const queryParams = { firstName: 35.696233, lastName: 139.570431 };
const queryString = new URLSearchParams(queryParams).toString();

console.log('this is the queryString', queryString);
