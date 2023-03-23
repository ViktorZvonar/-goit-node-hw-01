const operations = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const contacts = await operations.listContacts();
      console.log(contacts);
      break;
    case "getById":
      const contact = await operations.getContactById(id);
      console.log("getById", contact);
      break;
    case "remove":
      const removedContact = await operations.removeContact(id);
      console.log(removedContact);
      break;
    case "add":
      await operations.addContact(name, email, phone);
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

// invokeAction({ action: "list" });

// invokeAction({
//   action: "getById",
//   id: "AeHIrLTr6JkxGE6SN-0Rw",
// });

// invokeAction({
//   action: "add",
//   name: "rtedsaudjd!!!!f",
//   email: "QQQewazQdsj@js.com",
//   phone: "3drtts22222222tttttrr234445678899",
// });

// invokeAction({
//   action: "update",
//   id: "aawzPRY_aiYNl-wJXl6wn",
//   name: "OOOOOOOOOO",
//   email: "dsj@confdhrs.com",
//   phone: "345678899",
// });

invokeAction({
  action: "remove",
  id: "aawzPRY_aiYNl-wJXl6wn",
});
