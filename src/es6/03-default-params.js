// * Before:
function newUser (name, age, country) {
    var name = name || 'Oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
}

newUser();
newUser('Ricardo', '23', 'CO');

// * After:
function newAdmin (name = 'Pedro', age = 14, country = 'PE') {
    console.log(name, age, country);
}

newAdmin();
newAdmin('Maria', '44', 'CL');


//nullish coalescing operator "??"
function Users(name,age,country) {
    console.log(name??"user",age??0,country??"default");
}

Users();
Users("marco",25,"nicaragua");