#!/usr/bin/env node

import chalk from 'chalk';
import boxen from 'boxen';
import figlet from 'figlet';
import gradient from 'gradient-string';

// Gradient‑styled name using figlet
const name = gradient.pastel(
    figlet.textSync('Sohail Akhtar', {
        font: 'Small',
        horizontalLayout: 'default',
        verticalLayout: 'default',
    })
);

// Define data to display
const data = {
    name,
    work: chalk.white('Full Stack Developer'),
    twitter: chalk.gray('https://x.com/') + chalk.cyan('sohail786akh'),
    github: chalk.gray('https://github.com/') + chalk.green('sohail78692'),
    linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('sohail-akhtar-49229032a'),
    web: chalk.cyan('https://my-portfolio-nu-eight-jjpfirbrku.vercel.app\n'),
    npx: chalk.red('npx') + ' ' + chalk.white('hello-sohail'),
    labelWork: chalk.white.bold('       Work:'),
    labelTwitter: chalk.white.bold('    Twitter:'),
    labelGitHub: chalk.white.bold('     GitHub:'),
    labelLinkedIn: chalk.white.bold('   LinkedIn:'),
    labelWeb: chalk.white.bold('        Web:'),
    labelCard: chalk.white.bold('       Card:'),
};

// Build the output string
const output = `
${data.name}
${data.labelWork}  ${data.work}
${data.labelTwitter}  ${data.twitter}
${data.labelGitHub}  ${data.github}
${data.labelLinkedIn}  ${data.linkedin}
${data.labelWeb}  ${data.web}
${data.labelCard}  ${data.npx}
`;

// Boxen options for styling the final box
const options = {
    padding: 1,
    margin: 1,
    borderStyle: 'round',
    borderColor: 'cyan',
    title: 'Full Stack Developer',
    titleAlignment: 'center'
};

console.log(boxen(output, options));
