onst {Pool} = require("pg");

const pool = new Pool();
module.exports = {
    query: (text, params) => pool.query(text, params)
};
Footer
© 2022 GitHub, Inc.
