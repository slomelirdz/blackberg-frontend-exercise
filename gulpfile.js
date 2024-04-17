/* gulpfile.js */

const uswds = require("@uswds/compile");

/**
 * USWDS version
 */

uswds.settings.version = 3;

/**
 * Path settings
 */

uswds.paths.dist.css = "./assets/css";
uswds.paths.dist.theme = "./sass";

/**
 * Exports
 */

exports.default = uswds.watch;
exports.init = uswds.init;
exports.compile = uswds.compile;
exports.watch = uswds.watch;