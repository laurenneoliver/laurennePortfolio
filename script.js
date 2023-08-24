let websites = ['https://laurenneoliver.github.io/Tsunami-Coffee-Website/','https://laurenneoliver.github.io/Colmar-Academy-Website/']
let webTag = document.querySelector('iframe');
let leftArrow = document.getElementById('left-arrow');
let rightArrow = document.getElementById('right-arrow');
let i = 0;

function next() {
    if (i >= websites.length - 1) {
        return false;
    }
    i++;
    webTag.setAttribute('src', websites[i]);
}
function previous() {
    if (i <= 0) {
        return false;
    }
    i--;
    webTag.setAttribute('src', websites[i]);
}

rightArrow.onclick = next;
leftArrow.onclick = previous;

let leftArrowProgram = document.getElementById('left-arrow-program');
let rightArrowPorgram = document.getElementById('right-arrow-program');

let programs = ['https://gist.github.com/laurenneoliver/fad062ae77940c38ee82322f0abc63af.js','https://gist.github.com/laurenneoliver/ec55ffa1919e4b5aa92e329dd89a9578.js']

let programTag = document.getElementById('program-data');

function nextProgram() {
    if (i >= programs.length - 1) {
        return false;
    }
    i++;
    programTag.setAttribute('src', programs[i]);
}
function previousProgram() {
    if (i <= 0) {
        return false;
    }
    i--;
    programTag.setAttribute('src', programs[i]);
} 

rightArrowPorgram.onclick = nextProgram;
leftArrowProgram.onclick = previousProgram;