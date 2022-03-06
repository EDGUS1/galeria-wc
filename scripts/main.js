const contenedor = document.querySelector('#gallery');
let tipoGaleria = 'gallery1';
let urls = [
  'https://images.unsplash.com/photo-1645661319387-3e61ec8205b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1646112918482-2763d6e12320?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1646152159606-2b5aca677290?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1646143612209-a06a538b8c7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1646006304108-50b55c79631a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1638913974023-cef988e81629?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1646145752399-98b6c2f2af0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1646130705727-7682a50aadb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1637746583204-e7abbcffb68e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1646086347324-8fef219aebcc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1645930916050-523c86d40078?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
];

function agregarElemento() {
  const url = document.querySelector('#input_url').value;
  if (url != '') {
    urls.push(url);
    document.querySelector('#input_url').value = '';
    contenedor.innerHTML = '';
    loagPage();
  }
}

function cambiarTam() {
  if (contenedor.className.includes('gallery2')) {
    let classCol = 'col-4';
    if (window.innerWidth < 600) {
      classCol = 'col-1';
    } else if (window.innerWidth < 768) {
      classCol = 'col-2';
    } else if (window.innerWidth < 992) {
      classCol = 'col-3';
    }
    contenedor.classList.remove('col-1', 'col-2', 'col-3', 'col-4');
    contenedor.classList.add(classCol);
  }
}

function init() {
  document
    .querySelector('#btn_url')
    .addEventListener('click', e => agregarElemento());

  const radios = document.querySelectorAll('#radio-group');
  radios.forEach(element => {
    element.addEventListener('click', function (event) {
      if (event.target.matches("input[type='radio']")) {
        // loagPage();
        tipoGaleria = event.target.value;
        console.log(document.querySelectorAll('imagen-element')[0]);
        contenedor.classList.remove(
          'gallery1',
          'gallery2',
          'col-1',
          'col-2',
          'col-3',
          'col-4',
          'gallery3',
          'empty'
        );
        contenedor.classList.add(event.target.value);
        if (event.target.value == 'gallery2') {
          let numberOfCols = 4;
          let classCol = 'col-4';
          if (window.innerWidth < 600) {
            numberOfCols = 1;
            classCol = 'col-1';
          } else if (window.innerWidth < 768) {
            numberOfCols = 2;
            classCol = 'col-2';
          } else if (window.innerWidth < 992) {
            numberOfCols = 3;
            classCol = 'col-3';
          }
          contenedor.classList.add(classCol);
          masonryLayout(
            document.getElementById('gallery'),
            document.querySelectorAll('imagen-element'),
            numberOfCols
          );
        } else if (event.target.value == 'gallery3') {
          generateMasonryGrid(4, document.querySelectorAll('imagen-element'));
        } else if (
          event.target.value == 'gallery1' ||
          event.target.value == 'empty'
        ) {
          contenedor.innerHTML = '';
          loagPage();
        }
      }
    });
  });

  document.querySelector('.go-top').addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}

const agregarElem2 = (longitud, cols, columnsEle) => {
  for (let m = 0; m < Math.ceil(longitud / cols); m++) {
    for (let n = 0; n < cols; n++) {
      const newElem = document.createElement('imagen-element');
      newElem.url = urls[Math.ceil(Math.random() * 100) % urls.length];
      columnsEle[n].appendChild(newElem);
    }
  }
};
const masonryLayout = (containerElement, itemsEle, cols) => {
  containerElement.innerHTML = '';
  containerElement.classList.add('gallery2', `col-${cols}`);
  let columnsEle = [];

  for (let i = 1; i <= cols; i++) {
    let column = document.createElement('div');
    column.classList.add('masonry-col', `c-${i}`);
    containerElement.appendChild(column);
    columnsEle.push(column);
  }

  agregarElem2(itemsEle.length, cols, columnsEle);
};

function loagPage() {
  for (let i = 0; i < 20; i++) {
    const newElem = document.createElement('imagen-element');
    newElem.url = urls[i % urls.length];
    contenedor.appendChild(newElem);
  }
}
function generateMasonryGrid(columns, posts) {
  contenedor.innerHTML = '';

  let columnWrappers = {};

  for (let i = 0; i < columns; i++) {
    columnWrappers[`column${i}`] = [];
  }

  for (let i = 0; i < posts.length; i++) {
    const column = i % columns;
    columnWrappers[`column${column}`].push(posts[i]);
  }

  for (let i = 0; i < columns; i++) {
    let columnPosts = columnWrappers[`column${i}`];
    let div = document.createElement('div');
    div.classList.add('column');

    columnPosts.forEach(post => {
      const newElem = document.createElement('imagen-element');
      newElem.url = urls[Math.ceil(Math.random() * 100) % urls.length];

      div.appendChild(newElem);
    });
    contenedor.appendChild(div);
  }
}

window.onresize = cambiarTam;
let waitChange = true;

window.addEventListener('scroll', () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  if (waitChange && clientHeight + scrollTop >= scrollHeight - 500) {
    waitChange = false;
    if (tipoGaleria == 'gallery1') loagPage();
  }
  setTimeout(() => {
    waitChange = true;
  }, 2500);

  if (document.documentElement.scrollTop > 100) {
    document.querySelector('.go-top').classList.add('show');
  } else {
    document.querySelector('.go-top').classList.remove('show');
  }
});

init();
loagPage();
