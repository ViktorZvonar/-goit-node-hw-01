const argv = require("yargs").argv;

const operations = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const contacts = await operations.listContacts();
      console.table(contacts);
      break;
    case "get":
      const contact = await operations.getContactById(id);
      console.log("getById", contact);
      break;
    case "remove":
      const removedContact = await operations.removeContact(id);
      console.log(removedContact);
      break;
    case "add":
      const newContact = await operations.addContact(name, email, phone);
      console.log(newContact);
      break;
    case "update":
      const updatedContact = await operations.updateContact(id, {
        name,
        email,
        phone,
      });
      console.log(updatedContact);
      break;
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(argv);
