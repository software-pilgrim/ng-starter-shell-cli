import {Command, Flags} from '@oclif/core'
import {exec} from 'child_process';

export default class New extends Command {
  static description = 'Create a new ng project'

  static examples = [
    `$ oex new projectname
 (./src/commands/new/index.ts)
`,
  ]

  static flags = {
    
  }

  static args = [{name: 'projectname', description: 'Name of project to create', required: true}];

  projectFolder: string = './';
  coreModuleFolder: string = 'src/app/core/';

  async run(): Promise<void> {
    const {args, flags} = await this.parse(New);

    this.log(`new ${args.projectname} (./src/commands/new/index.ts)`);

    this.projectFolder = `./${args.projectname}/`;
    this.coreModuleFolder = this.projectFolder + this.coreModuleFolder;

    return this.
        npxexec(`npx ng new ${args.projectname} --defaults --style scss --routing true`, '.')
            .then(result => this.npxexec(`npx ng add @angular/material --defaults --skip-confirmation --force --interactive false`, this.projectFolder))
            .then(result => this.npxexec(`npx ng generate module core`, this.projectFolder))
            .then(result => this.npxexec(`npx ng generate @angular/material:navigation nav --defaults --force --interactive false`, this.projectFolder))
            .then(result => this.npxexec(`npx ng generate @angular/material:dashboard dashboard --defaults --force --interactive false`, this.projectFolder))
            .then(result => this.npxexec(`npm install oidc-client --save`, this.projectFolder))
            .then(result => this.npxexec(`npx ng generate service core/auth`, this.projectFolder))
            .then(result => this.npxexec(`npm install @softwarepilgrim/ng-starter-shell --save-dev`, this.projectFolder))
            .then(result => this.npxexec(`npx ng generate @softwarepilgrim/ng-starter-shell:starter-shell`, this.projectFolder));
  }

  async npxexec(commandline: string, folder: string): Promise<void> { 
    return new Promise((resolve, reject) => {
        this.log(`${commandline}`);
        let check = exec(`${commandline}`, { 'cwd': folder });
        check.on('exit', (exitcode) => {
            if(exitcode === 0) {
                this.log(`Successful - ${commandline}`);
                resolve();
            } else {
                this.log(`Error doing - ${commandline}`);
                reject(exitcode);
            }
        });
    });
  }
}
