const fs = require('fs-extra');
const PATHS = require('./../config/paths');

fs.emptyDirSync(PATHS.build);
