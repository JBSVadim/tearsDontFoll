
function User(name,surName,age) {
  this.name = name;
  this.surName = name;
  this.age = age;

  
}

function UserProto () {
 this.getFullName = function () {
  return `${this.name} ${this.surName}`;
};
}

User.prototype = new UserProto();

const u = new User('test', 'keee', 20)
const u2 = new User('mama','aaaaaa', 21)