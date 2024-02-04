// alert(window.innerHeight)
// alert(navigator.platform)

// document.body.style.backgroundColor = 'red';

// setTimeout(() => document.body.style.backgroundColor = 'yellow', 500)

// for (let i = 0; i < document.body.childNodes.length; i++) {
//     console.log(document.body.childNodes[i])
// }

// let elems = document.body.children;
// for (let elem of elems) {
//     console.log(elem)
// }

// console.log(document.body.firstElementChild.nextElementSibling)
// console.log(document.body.lastElementChild.previousElementSibling)
// console.log(document.body.lastElementChild.parentElement)

//
// let elem = document.getElementById('num')
// elem.previousElementSibling.style.color = 'red'
// console.log(elem)

//
// let elems = document.querySelectorAll('.item')
// for (let elem of elems) {
//     console.log(elem)
// }
// let elem2 = document.querySelector('.list')
// elem2.firstElementChild.style.color = 'blue'
// console.log(elem2.firstElementChild)

//
// let elem = document.querySelector('.list')
// let item = elem.querySelector('#num')
// console.log(item)

//
// let elem = document.getElementById('num')
// console.log(elem.closest('.item'))
// let elem = document.getElementsByName('list')
// console.log(elem)

// let elem = document.getElementById('num');
// elem.style.color = 'red';
// elem.innerHTML = '<h1>Numbers</h1>';
// console.log(elem.innerHTML);

// let item = document.querySelector('.item4');
// // item.outerHTML = '<h4>New Text</h4>';
// // console.log(item)
//
// // console.log(document.body.firstChild.data)
// // item.innerHTML = document.body.firstChild.data;
//
// item.textContent = '<h2>New Text</h2>';

// let elem = document.querySelector('p')
// elem.remove();
// setTimeout(() => elem.hidden = false, 1500);

// let elem = document.querySelector('.alert');
// setTimeout(() => elem.hidden = false, 1000);

// let newElem = document.createElement('li');
// newElem.innerHTML = '<strong>Hello</strong> Good Night World!'
// document.querySelector('ul').append(newElem);
// console.log(newElem)

// document.querySelector('ul').insertAdjacentHTML('afterbegin',
//     `
//     <div class="alert">
//         <strong>Good Night,</strong> World!
//     </div>
//     `
// )

// let item = document.querySelector('ul').cloneNode(true);
// console.log(item);
// item.style.background = 'yellow';
// document.querySelector('h1').after(item)
// let elem = document.querySelector('p').nextElementSibling
// elem.style.cssText = `
//     padding: 15px;
//     border: 1px solid #d6e9c6;
//     border-radius: 4px;
//     color: #3c763d;
//     background-color: #dff0d8;`
// let elem2 = document.querySelector('.alert')
// console.log(elem2.className)
// // setInterval(() => {
// //     elem2.classList.toggle('new');
// //     elem2.innerHTML = '<strong>Hello!</strong> World'
// //     }, 2000)
// // elem2.classList.remove('alert')
// let size = getComputedStyle(elem2, '::before').fontSize
// console.log(parseInt(size))
// size = parseInt(size)
// elem2.style.marginTop = size*10 + 'px';

// let link = document.querySelector('.link')
// let input = document.querySelector('.input')
//
// console.log(link.href)
// input.value = 'Vasya'
// console.log(input.value)
// console.dir(input)

// let elem = document.querySelector('input')
// elem.classList.add('.alert')
// elem.setAttribute('class', 'alert')
// elem.setAttribute('placeholder', 'Age')
// elem.setAttribute('name', 'Vasya')
// document.querySelector('.alert').before(elem)
// console.log(elem.getAttribute('name'))
// elem.removeAttribute('placeholder')
// console.log(elem)
// console.log(elem.hasAttribute('placeholder'))
