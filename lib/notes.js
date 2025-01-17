const fs = require("fs");
const shortUniqueId = require("short-unique-id");
const path = require("path");

function createNewNote(body, notesArr) {
    const uid = new shortUniqueId();
    body.id = uid();
    const note = body;
    notesArr.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../Develop/db/db.json'),
        JSON.stringify({ notes: notesArr }, null, 2)
    );

    return note;
};

function validateNotes(note) {
    if (!note.title || typeof note.title !== 'string') {
        return false;
    }
    if (!note.text || typeof note.text !== 'string') {
        return false;
    }
    return true;
};

module.exports = {
    createNewNote,
    validateNotes
}