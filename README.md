# Vue Monorepo Template

**A Vue 3 based monorepository setup. Designed with the common startup in mind.**

This setup uses the foll0wing stack:

 - [TailwindCSS](https://tailwindcss.com/)
 - [Storybook](https://storybook.js.org/)
 - [Babel](https://babeljs.io/)
 - [Yalc](https://github.com/wclr/yalc)
 - [Yarn Workspaces](https://classic.yarnpkg.com/en/docs/workspaces/)
 - [Jest](https://jestjs.io/)
 - [Cypress](https://www.cypress.io/)

To use the template, type 

    git clone https://github.com/carlodevil/monorepo-template.git

and run the following commands.

`npm install` 
or
`yarn install`

You have to install Yalc globally to link your 'ui' package to your apps:

    npm i yalc -g
## Usage

### Adding a component

Run `yarn component` to add a new component to the library. Also generates a package.json should component be shared outside of library.

*Prompts:*
`name:` 
Your new component name. For example, `HelloWorld`. Please use **CamelCase** as path is generated from the name value.

`type:` 
The component category/path. Categories should be **lowercase** and **only seperated by a forwardslash**. For example, `buttons/big` will create the component in the directory `lib/buttons/big/hello-world`. Can take one or multiple subcategories, e.g. `logo` or `sidebar/logo`.

`description:` 
The component description. Added to `package.json` for identification during possible outside usage.

### Component Removal

No script yet for component removal. To remove a component, delete its folders in `lib`, and remove its export from `src/index.js`. PRs welcome.

### Refrest Yalc dependencies

After editing components in the UI package, you will have to push your changes to apps that has it listed as a dependency. 

To do this, run:

    yarn refresh
This will push all changes to the apps.
