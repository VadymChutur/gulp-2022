//main module
import gulp from 'gulp';

//import path
import { path } from './gulp/config/path.js';

//import plugins
import { plugins } from './gulp/config/plugins.js';

//global const
global.app = {
  path: path,
  gulp: gulp,
  plugins: plugins,
};

//import task
import { copy } from './gulp/tasks/copy.js';
import { reset } from './gulp/tasks/reset.js';
import { html } from './gulp/tasks/html.js';

//watching recive in files
function watcher() {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
}

const mainTasks = gulp.parallel(copy, html);

//build scenarios in progres task
const dev = gulp.series(reset, mainTasks, watcher);

//implementation default scenary
gulp.task('default', dev);
