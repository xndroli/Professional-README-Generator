// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'no license') {
    return `
      ![badge](https://img.shields.io/badge/license-${license}-blue)
    `;
  } else {
      return ' ';
  };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'no license') {
    return `
      [${license}](https://choosealicense.com/licenses/${license})
    `;
  } else {
      return ' ';
  };
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'no license') {
    return `
      ## [License](#table-of-contents)
      The application is covered under the following license:
      ${renderLicenseLink(license)}
    `;
  } else {
    return ' ';
  };
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## License:
  ${renderLicenseBadge(data.license)}
  
  ## Table of Contents 

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseSection(data.license)}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## [Description](#table-of-contents)
  ${data.description}

  ## [Installation](#table-of-contents)
  ${data.installation}

  ## [Usage](#table-of-contents)
  ${data.usage}

  ## [License](#table-of-contents)
  ${renderLicenseSection(data.license)}}

  ## [Contribution](#table-of-contents)
  ${data.contribution}

  ## [Testing](#table-of-contents)
  ${data.testing}

  ## [Questions](#table-of-contents)
  - Github: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email} 
`;
}

module.exports = generateMarkdown;