const operations = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const contacts = await operations.listContacts();
      console.log(contacts);
      break;
    case "readById":
      const contact = await operations.getContactById(id);
      console.log("readById", contact);
      break;
    case "add":
      await operations.addContact(name, email, phone);
      break;
    // case "replace":
    //   await fs.writeFile(filePath, data);
    //   break;
    //   deafault: console.log("Unknown action");
  }
};

// invokeAction({ action: "list" });

// invokeAction({
//   action: "readById",
//   id: "AeHIrLTr6JkxGE6SN-0Rw",
// });

invokeAction({
  action: "add",
  name: "wolf",
  email: "dsj@js.com",
  phone: "345678899",
});
