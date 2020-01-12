# ensure-start


<a href="https://raw.githubusercontent.com/Jaid/ensure-start/master/license.txt"><img src="https://img.shields.io/github/license/Jaid/ensure-start?style=flat-square" alt="License"/></a>  
<a href="https://actions-badge.atrox.dev/Jaid/ensure-start/goto"><img src="https://img.shields.io/endpoint.svg?style=flat-square&url=https%3A%2F%2Factions-badge.atrox.dev%2FJaid%2Fensure-start%2Fbadge" alt="Build status"/></a> <a href="https://github.com/Jaid/ensure-start/commits"><img src="https://img.shields.io/github/commits-since/Jaid/ensure-start/v1.0.6?style=flat-square&logo=github" alt="Commits since v1.0.6"/></a> <a href="https://github.com/Jaid/ensure-start/commits"><img src="https://img.shields.io/github/last-commit/Jaid/ensure-start?style=flat-square&logo=github" alt="Last commit"/></a> <a href="https://github.com/Jaid/ensure-start/issues"><img src="https://img.shields.io/github/issues/Jaid/ensure-start?style=flat-square&logo=github" alt="Issues"/></a>  
<a href="https://npmjs.com/package/ensure-start"><img src="https://img.shields.io/npm/v/ensure-start?style=flat-square&logo=npm&label=latest%20version" alt="Latest version on npm"/></a> <a href="https://github.com/Jaid/ensure-start/network/dependents"><img src="https://img.shields.io/librariesio/dependents/npm/ensure-start?style=flat-square&logo=npm" alt="Dependents"/></a> <a href="https://npmjs.com/package/ensure-start"><img src="https://img.shields.io/npm/dm/ensure-start?style=flat-square&logo=npm" alt="Downloads"/></a>

**Ensures that a string or an array starts with specified value.**















## Installation
<a href="https://npmjs.com/package/ensure-start"><img src="https://img.shields.io/badge/npm-ensure--start-C23039?style=flat-square&logo=npm" alt="ensure-start on npm"/></a>
```bash
npm install --save ensure-start@^1.0.6
```
<a href="https://yarnpkg.com/package/ensure-start"><img src="https://img.shields.io/badge/Yarn-ensure--start-2F8CB7?style=flat-square&logo=yarn&logoColor=white" alt="ensure-start on Yarn"/></a>
```bash
yarn add ensure-start@^1.0.6
```
<a href="https://jsdelivr.com/package/npm/ensure-start/"><img src="https://img.shields.io/badge/jsDelivr-ensure--start-orange?style=flat-square&logo=html5&logoColor=white" alt="ensure-start on jsDelivr"/></a> <a href="https://unpkg.com/browse/ensure-start/"><img src="https://img.shields.io/badge/UNPKG-ensure--start-orange?style=flat-square&logo=html5&logoColor=white" alt="ensure-start on UNPKG"/></a>
```html
<script src="https://cdn.jsdelivr.net/npm/ensure-start@1.0.6/index.js"/>
```


## Try it out



Open a browser's JavaScript console and execute:

```javascript
const scriptElement = document.createElement("script");
scriptElement.setAttribute("type", "text/javascript");
scriptElement.setAttribute("src", "https://cdn.jsdelivr.net/npm/ensure-start@1.0.6/index.js");
document.querySelector("head").appendChild(scriptElement);
```

ensure-start is now stored in the global variable `ensureStart`. The following console expression should return something other than `"undefined"`.

```javascript
typeof ensureStart.default
```






## Development



Setting up:
```bash
git clone git@github.com:Jaid/ensure-start.git
cd ensure-start
npm install
```
Testing:
```bash
npm run test:dev
```
Testing in production environment:
```bash
npm run test
```


## License
```text
MIT License

Copyright © 2020, Jaid <jaid.jsx@gmail.com> (github.com/jaid)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
