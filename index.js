const run = require("quake-run");

function formatOpts(options) {
  return Object.keys(options).map(v => `${v.length === 1 ? '-' : '--'}${v}=${options[v]}`).join(' ');
}

module.exports = function git(command, args, options) {
  const str = `git ${command} ${args.join(' ')} ${formatOpts(options)}`;
  const func = run(str);
  func.displayName = "git " + command;
  return func;
}
