const dbConnection = require("./mongoConnection");

/* This will allow you to have one reference to each collection per app */
/* Feel free to copy and paste this this */
const getCollectionFn = collection => {
  let _col = undefined;

  return async () => {
    if (!_col) {
      const db = await dbConnection();
      _col = await db.collection(collection);
    }

    return _col;
  };
};

/* Now, you can list your collections here: */
module.exports = {
  patient: getCollectionFn("patient"),
  doctor: getCollectionFn("doctor"),
  room: getCollectionFn("room"),
  medicine: getCollectionFn("medicine"),
  prescription: getCollectionFn("prescription"),
  reservation: getCollectionFn("reservation")
};
