@softwarepilgrim/ng-starter-shell-cli
=====================================

CLI with schematics for creating an Angular application shell

### Usage
Install Angular CLI with  

```bash
npm install @angular/cli -g
```

Install with npm

```bash
npm install @softwarepilgrim/ng-starter-shell-cli
```

Create project with cli

```bash
npx ng-starter-shell-cli new [projectname]
```

Built using
[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)

## Ideas
- ~~Creating this as an npm package might be helpful someday, see https://docs.npmjs.com/cli/v8/using-npm/developers~~
- ~~Building a CLI in JS with OClif, see https://dev.to/fedekau/building-awesome-clis-with-javascript-and-oclif-291o~~
- Securing Angular with OpenID Connect and OAuth2: https://app.pluralsight.com/library/courses/openid-and-oauth2-securing-angular-apps
- https://plugins.miniorange.com/twitter-single-sign-on-wordpress-sso-oauth-openid-connect
- https://developer.twitter.com/en/docs/authentication/oauth-2-0/authorization-code
- ~~Using schematics seems wise https://www.digitalocean.com/community/tutorials/angular-angular-cli-schematics~~
- ~~Authoring my own is going to surely be needed https://angular.io/guide/schematics~~ 
- ~~https://angular.io/guide/schematics-authoring~~
- ~~https://blog.angular.io/schematics-an-introduction-dc1dfbc2a2b2~~
- Learning from the .Net Prism project about modular app design https://prismlibrary.com/docs/modules.html
- Also the idea of a catalog for modules that decides what modules to load - https://prismlibrary.com/docs/modules.html#module-catalog
- Considering what to make a library vs within the main app - https://angular.io/guide/creating-libraries
- Will need to experiment with library packaging - https://github.com/ng-packagr/ng-packagr/blob/main/README.md

## TODO
- Identify and implement Prism concepts like (Prism module) catalog
- Identify and implement Regions like top, bottom, status bar, left, right, middle, overlay/dialog, toast/notification/native
- Consider the role of IFrame vs WebView vs a component e.g. a WebView component vs a region
- Identify and implement containers like tabbed container for modules/components
- Package as a separate library or as part of schematics or both
