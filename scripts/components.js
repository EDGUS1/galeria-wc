class ImagenElement extends HTMLElement {
  constructor() {
    super();
    this.url =
      'https://images.unsplash.com/photo-1646112918482-2763d6e12320?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60';
    this.text = '';
  }

  connectedCallback() {
    let imagen = document.createElement('img');
    let texto = document.createElement('span');
    imagen.src = this.url;
    texto.textContent = this.text;
    this.appendChild(imagen);
    this.appendChild(texto);
  }

  attributeChangedCallback(nombre, oldValue, newValue) {
    if (nombre === 'url') {
      this.url = newValue;
    }
  }

  static get observedAttributes() {
    return ['url'];
  }
}

window.customElements.define('imagen-element', ImagenElement);
