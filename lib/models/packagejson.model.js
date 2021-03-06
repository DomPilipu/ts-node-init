"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackageJsonModel = void 0;
class PackageJsonModel {
    constructor(answers, gitUrl) {
        this.name = answers.packageName;
        this.version = answers.version;
        this.description = answers.description;
        this.main = 'lib/' + answers.entryPoint + '.js';
        this.author = answers.author;
        this.license = answers.license;
        this.scripts = {
            dev: 'tsc --watch',
            start: 'node ' + this.main,
        };
        this.devDependencies = {
            '@types/node': '^14.14.5',
            typescript: '^4.0.5',
        };
        if (gitUrl) {
            this.repository = {
                type: 'git',
                url: 'git+' + gitUrl,
            };
            this.bugs = {
                url: gitUrl.substring(0, gitUrl.length - 4) + '/issues',
            };
            this.homepage = gitUrl.substring(0, gitUrl.length - 4) + '#readme';
        }
    }
}
exports.PackageJsonModel = PackageJsonModel;
//# sourceMappingURL=packagejson.model.js.map