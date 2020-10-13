const HID = require("@ledgerhq/hw-transport-node-hid").default

const observer = {
  next(...args) {
    console.log(args);
  },
}

HID.listen(observer)
