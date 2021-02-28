import {Solution} from './solution';

document.write('<br/>Comparing 1.0.4 and 1.0.8<br/>');
document.write(Solution('1.0.4', '1.0.8'));

document.write('<br/>Comparing 1.3 and 1.2.9.9.9.9<br/>');
document.write(Solution('1.3', '1.2.9.9.9.9'));
document.write('<br/>Comparing 1.10 and 1.1.2<br/>');
document.write(Solution('1.10', '1.1.2'));
document.write('<br/>Feel free to add more lines<br/>');
console.log('webpack starter running');