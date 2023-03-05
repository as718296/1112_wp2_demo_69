const db = require('./database');

const testDB = async () => {
  try {
    const results = db.query('select * from card_69', [], (error, results) => {
      console.log('result', results.rows);
    });
  } catch (error) {
    console.log(error);
  }
};

testDB();

module.exports = testDB;
