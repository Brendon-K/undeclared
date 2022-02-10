const url1 = 'https://raw.githubusercontent.com/ProjectSakura/OTA/10/changelog/changelog_beryllium.txt'
const response = await fetch(url1);
const data = await response.text();
console.log(data);