const q = require('quake-task');
const quake = q.create("update");
const git = require('.');

quake.add("add", git("add", '.'));
quake.add("commit", ["add"], git("commit", {message: "test"}));

quake.start("commit");
