#!/usr/bin/env node
const prompt = require('prompt');
const fs = require('fs');
const properties = [
    {
        name: 'name',
        validator: /^[a-zA-Z]+$/,
        warning: 'Component name must be only CamelCase letters'
    },
    {
        name: 'type',
        validator: /^[a-z\/]+$/,
        warning: 'Component type/path must be only undercase letters and slashes'
    },
    {
        name: 'description'
    }
];

function kebabize(input) {
    return input.replace(/[A-Z]+(?![a-z])|[A-Z]/g, ($, ofs) => (ofs ? "-" : "") + $.toLowerCase())
}

prompt.start();
prompt.get(properties, function (err, result) {
    if (err) { return onErr(err); }
    const name = result.name;
    const path = result.type;
    const description = result.description;
    const kname = kebabize(result.name);
    if (fs.existsSync("../li/".concat(path, "/", kname, "/package.json"))) {
        console.log('Component already exists')
    } else {
        let package = '{\n' +
            '  "name": "' + kname + '",\n' +
            '  "version": "1.0.0",\n' +
            '  "description": "' + description + '",\n' +
            '  "main": "index.js",\n' +
            '  "author": "CG de Villiers",\n' +
            '  "license": "MIT"\n' +
            '}';
        let component = '<template>\n' +
            '  <div>\n' +
            '      <!-- Component Here -->\n' +
            '      <slot/>\n' +
            '  </div>\n' +
            '</template>\n' +
            '\n' +
            '<script>\n' +
            'export default {\n' +
            '\n' +
            '}\n' +
            '</script>\n' +
            '\n' +
            '<style>\n' +
            '\n' +
            '</style>';
        let story = 'import ' + name + " from './" + name + ".vue'\n" +
            '\n' +
            'export default {\n' +
            "    title: '" + path + '/' + name + "',\n" +
            '    component: ' + name + ',\n' +
            '}\n' +
            '\n' +
            'export const Primary = () => ({\n' +
            '    components: { ' + name + ' },\n' +
            "    template: '<" + name + ">Primary Test</" + name + ">',\n" +
            '  });\n' +
            '  export const Secondary = () => ({\n' +
            '    components: { ' + name + ' },\n' +
            "    template: '<" + name + ">Secondary Test</" + name + ">',\n" +
            '  });';
        let index = 'import ' + name + ' from "./' + name + '.vue";\n' +
            'module.exports = ' + name + ';';
        writeFiles(package, component, story, index, kname, name, path);
    }
});

function onErr(err) {
    console.log(err);
    return 1;
}

function writeFiles(package, component, story, index, kname, name, path) {
    // Create directory
    fs.mkdirSync("./lib/".concat(path, "/", kname, "/src"), { recursive: true }, (err) => {
        if (err) throw err;
      });
     // write a new file named package.json
     fs.writeFile("./lib/".concat(path, "/", kname, "/package.json"), package, (err) => {
         // throws an error, you could also catch it here
         if (err) throw err;
         // success case, the file was saved
         console.log('Package.json created');
     });
     // write a new vue component
     fs.writeFile("./lib/".concat(path, "/", kname,'/src/',name, ".vue"), component, (err) => {
         // throws an error, you could also catch it here
         if (err) throw err;
         // success case, the file was saved
         console.log(name + '.vue created');
     });
      fs.writeFile("./lib/".concat(path, "/", kname,'/src/',name, ".stories.js"), story, (err) => {
         // throws an error, you could also catch it here
          if (err) throw err;
        // success case, the file was saved
          console.log(name + '.stories.js created');
      });
      fs.writeFile("./lib/".concat(path, "/", kname,'/src/index.js',), index, (err) => {
         // throws an error, you could also catch it here
          if (err) throw err;
         // success case, the file was saved
          console.log('index.js created');
      });
      fs.appendFileSync('./src/index.js', 
        "\nexport { default as "+ name +" } from '../lib/"+ path +"/"+ kname +"/src/"+ name +".vue';"
      );
    }





