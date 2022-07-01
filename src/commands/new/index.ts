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

  workspaceFolder: string = './';

  async run(): Promise<void> {
    const {args, flags} = await this.parse(New);

    this.log(`new ${args.projectname} (./src/commands/new/index.ts)`);

    this.workspaceFolder = `./${args.projectname}/`;

    return this.
        npxexec(`npx ng new ${args.projectname} --create-application false`, '.')
            .then(result => this.npxexec(`npx ng generate application ${args.projectname} --defaults --style scss --routing true`, this.workspaceFolder))
            .then(result => this.npxexec(`npm install @softwarepilgrim/ng-starter-shell --save-dev`, this.workspaceFolder))
            .then(result => this.npxexec(`npx ng generate @softwarepilgrim/ng-starter-shell:starter-shell`, this.workspaceFolder))
            .then(result => this.npxexec(`npx ng add @angular/material --defaults --skip-confirmation --force --interactive false`, this.workspaceFolder))
            .then(result => this.npxexec(`npx ng generate module core`, this.workspaceFolder))
            .then(result => this.npxexec(`npx ng generate @angular/material:navigation nav --defaults --force --interactive false`, this.workspaceFolder))
            .then(result => this.npxexec(`npx ng generate @angular/material:dashboard dashboard --defaults --force --interactive false`, this.workspaceFolder))
            .then(result => this.npxexec(`npm install oidc-client --save`, this.workspaceFolder))
            .then(result => this.npxexec(`npx ng generate service core/auth`, this.workspaceFolder))
            .then(result => this.npxexec(`npx ng generate module shell`, this.workspaceFolder))
            .then(result => this.npxexec(`npx ng generate component shell`, this.workspaceFolder));

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
