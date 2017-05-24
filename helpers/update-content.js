/* global config cp exec rm */

const shell = require('shelljs/global'); // eslint-disable-line no-unused-vars

const CLONE_URL = process.env.TRAVIS ? 'git@github.com-sonar:MicrosoftEdge/Sonar.git' : 'https://github.com/MicrosoftEdge/Sonar.git'; // eslint-disable-line no-process-env
const SOURCE_DIR = 'src/hexo/source';
const TMP_DIR = require('./mktemp')();

config.fatal = true;

exec(`git clone ${CLONE_URL}  "${TMP_DIR}"`);
rm('-rf', `${SOURCE_DIR}/docs/developer-guide`);
rm('-rf', `${SOURCE_DIR}/docs/user-guide`);
cp('-R', `${TMP_DIR}/docs/developer-guide`, `${SOURCE_DIR}/docs/developer-guide`);
cp('-R', `${TMP_DIR}/docs/user-guide`, `${SOURCE_DIR}/docs/user-guide`);
cp(`${TMP_DIR}/about/`, `${SOURCE_DIR}/about`);

rm('-rf', TMP_DIR);
