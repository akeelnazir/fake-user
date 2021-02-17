import { name, address, setLocale } from 'faker';

setLocale('en_GB');

const person = {
  firstName: name.firstName(),
  lastName: name.lastName(),
};

const _address = {
  street: address.streetAddress(),
  city: address.city(),
  postcode: address.zipCode()
};

const persona = {
  fullName: `${person.firstName} ${person.lastName}`,
  ...person,
  email: `identity.defra+${person.firstName}.${person.lastName}@gmail.com`,
  address: _address
};

console.log(persona);
