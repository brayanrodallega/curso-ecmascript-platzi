//* enahced object literals

function newUser(user, age, country, uId) {
  return {
    user,
    age,
    country,
    uId,
  };
}

console.log(newUser("Brayan", 20, "CO", 1));