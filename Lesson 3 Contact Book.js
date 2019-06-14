var contacts = ["Matt Smith", "Sam Davis", "Ashley Jones"];

function findContact(index) {return contacts[index];};

function updateLastContact(newName) {contacts[contacts.length - 1] = newName;};

function addContact(name) {contacts.push(name);};


console.log(findContact(2));
updateLastContact("Patty Davis");
addContact("Mark Jones");
console.log(contacts);