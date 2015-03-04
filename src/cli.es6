import 'core-js/shim'
import path from 'path'
import fs from 'fs'
import scaffold from 'sane-scaffold'
import bower from 'bower'
import spinneret from './server'

export function start(args, options) {
  var cwd = process.cwd()
  var dirname = path.resolve(cwd, path.dirname(args[0]));
  var project = path.basename(args[0]);
  if (!fs.existsSync(dirname)) {
    cli.fatal('Parent directory ' + dirname + ' does not exist.');
  }
  scaffold
    .start(dirname)
    .directory(project, function(dir) {
      dir.file('index.html', 'Intro to Spinneret');
    });
  process.chdir(path.join(dirname, project));
  bower.commands
    .install(['Polymer/polymer#0.8-preview'], { save: true })
    .on('end', function() { process.chdir(cwd); });
}

export function server(args, options) {
  console.log('Starting server...');
  spinneret(process.cwd(), parseInt(args[0]));
}

// TODO: Compute these automatically.
export const COMMAND_NAMES = ['start', 'server'];
