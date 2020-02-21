const db = require("../../../data/db-config.js");

module.exports = {
    find,
    add
};

function find() {
    return db('projects');
}

function add(project) {
    return db('projects').insert(project, 'id');
}
