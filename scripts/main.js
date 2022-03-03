const contenedor = document.querySelector('#gallery');

let urls = [
  'https://images.unsplash.com/photo-1646112918482-2763d6e12320?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1646152159606-2b5aca677290?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1646145752399-98b6c2f2af0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1646143612209-a06a538b8c7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1646006304108-50b55c79631a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1638913974023-cef988e81629?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1646130705727-7682a50aadb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
];

function agregarElemento() {
  const url = document.querySelector('#input_url').value;
  if (url != '') {
    urls.push(url);
    document.querySelector('#input_url').value = '';
    loagPage();
  }
}

function cambiarTam() {
  if (contenedor.className.includes('gallery2')) {
    console.log('cambiarTam');
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
        loagPage();
        contenedor.classList.remove(
          'gallery1',
          'gallery2',
          'col-1',
          'col-2',
          'col-3',
          'col-4',
          'gallery3'
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
        }
      }
    });
  });
}

const masonryLayout = (containerElement, itemsEle, cols) => {
  containerElement.classList.add('gallery2', `col-${cols}`);
  let columnsEle = [];
  for (let i = 1; i <= cols; i++) {
    let column = document.createElement('div');
    column.classList.add('masonry-col', `c-${i}`);
    containerElement.appendChild(column);
    columnsEle.push(column);
  }
  for (let m = 0; m < Math.ceil(itemsEle.length / cols); m++) {
    for (let n = 0; n < cols; n++) {
      if (itemsEle[m * cols + n] != undefined)
        columnsEle[n].appendChild(itemsEle[m * cols + n]);
    }
  }
};

function loagPage() {
  let contenido = '';
  for (let i = 0; i < 20; i++) {
    contenido += `<imagen-element url="${
      urls[i % urls.length]
    }"></imagen-element>`;
  }
  contenedor.innerHTML = contenido;
}

init();
loagPage();
window.onresize = cambiarTam;
