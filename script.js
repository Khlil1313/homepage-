const {
  core: { test, expect, run },
  prettify
} = window.jestLite;

/* =================
  FIND ELEMENTS
  These are all the elements we will look for.
   ===================
*/
const getHeader = document.querySelectorAll("header"),
  getH1 = document.querySelectorAll("h1"),
  getSiteHeader = document.querySelectorAll(".c-site-header"),
  getAria = document.querySelectorAll('nav[aria-label="Main Site Links."]'),
  getMain = document.querySelectorAll("main"),
  getFooter = document.querySelectorAll("footer"),
  getSiteFooter = document.querySelectorAll(".c-site-footer"),
  getIFrame = document.querySelectorAll("iframe"),
  getImage = document.querySelectorAll("img"),
  getWords = document.body.innerText;

/* =================
   ASSERTIONS 
   These are the things we check are true about your page.
   Read and update your HTML to discover the requirements.
   The tests will run every time you update your code.
   ===================
*/
test("There is at least one header element", () => {
  expect(getHeader.length).toBeGreaterThanOrEqual(1);
});
test("There is at least one h1", () => {
  expect(getH1.length).toBeGreaterThanOrEqual(1);
});
test("There is only one header element with the class c-site-header", () => {
  expect(getSiteHeader.length).toBe(1);
});
test("There is a nav element with an aria-label of Main Site Links.", () => {
  expect(getAria.length).toBeGreaterThanOrEqual(1);
});
test("There is only one main element", () => {
  expect(getMain.length).toBe(1);
});
test("There is at least one footer element", () => {
  expect(getFooter.length).toBeGreaterThanOrEqual(1);
});
test("There is only one footer element with the class c-site-footer", () => {
  expect(getSiteFooter.length).toBe(1);
});
test("There is embedded video", () => {
  expect(getIFrame.length).toBeGreaterThanOrEqual(1);
});
test("There is at least one image", () => {
  expect(getImage.length).toBeGreaterThanOrEqual(1);
});
test("There are at least 500 words on the page", () => {
  expect(getWords.length).toBeGreaterThanOrEqual(500);
});

const console = document.getElementById("tests");
prettify.toHTML(run(), console);

let element_list = document.getElementById('list');

let element_list2 = document.getElementById('list');
let new_li = document.createElement('li');
new_li.innerText = 'Code your future';
new_li.setAttribute("href", 'https://codeyourfuture.io/');

element_list2.appendChild(new_li);
let new_li2 = document.createElement('li');
new_li2.innerText = 'BBC Sports';
new_li2.setAttribute("href", 'https://www.bbc.co.uk/sport');

element_list2.appendChild(new_li2);
let new_li3 = document.createElement('li');
new_li3.innerText = 'Netflix';
new_li3.setAttribute("href", 'https://www.netflix.com/gb/');

element_list2.appendChild(new_li3);
var names;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}

function randomInt(n) {
  // Return a random number from in [0, n[
  return Math.floor(Math.random()*n);
}

function randomMember(arr) {
  // Return a random member of the array
  return arr[randomInt(arr.length)]
}


names = [];


document.getElementById('add_name').addEventListener('click', (event) => {
  names.push(getNumberOrString(document.getElementById('name').value));
  let element_list = document.getElementById('list');
  let new_li = document.createElement('li');
  new_li.innerText = getNumberOrString(document.getElementById('name').value);

  element_list.appendChild(new_li);

});

document.getElementById('select_fc').addEventListener('click', (event) => {
  let element_list2 = document.getElementById('list');
  element_list2.innerText = randomMember(names);

});

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}



document.getElementById('send').addEventListener('click', (event) => {
  let element_user_comment = document.getElementById('user_comment');
  let new_input = document.createElement('input');
  new_input.innerText = getNumberOrString(document.getElementById('name').value);

  element_user_comment.appendChild(new_input);
  let element_cm_area = document.getElementById('cm_area');
  element_cm_area.innerText = getNumberOrString(document.getElementById('cm_area').value);

});
