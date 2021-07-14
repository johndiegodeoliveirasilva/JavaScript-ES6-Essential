const user = {
  name: 'Guillerme',
  lastName: 'Cabrini da Silva'
};


function getUserWithFullName(user) {
  return {
    ...user,
    fullname: `${user.name} ${user.lastName}`
  }
}

const userWithFullName = getUserWithFullName(user)
console.log(userWithFullName);