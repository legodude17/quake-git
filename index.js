const run = require("quake-run");

function formatOpts(options) {
  if (options == null) return '';
  return Object.keys(options).map(v => `${v.length === 1 ? '-' : '--'}${v}=${options[v]}`).join(' ');
}

module.exports = function git(command, args, options) {
  if (!Array.isArray(args)) {
    if (typeof args !== "string") {
      options = args;
      args = [];
    } else {
      args = [args];
    }
  }
  const str = `git ${command} ${args.join(' ')} ${formatOpts(options)}`;
  const func = run(str);
  func.displayName = "git " + command;
  return func;
}
