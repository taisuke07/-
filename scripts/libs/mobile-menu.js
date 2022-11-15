class MobileMenu {
  constructor() {
    this.DOM = {};
    this.DOM.btn = document.querySelector(".mobile-menu__btn");
    this.DOM.cover = document.querySelector(".mobile-menu__cover");
    this.DOM.container = document.querySelector("#global-container");

    this.DOM.menu__un = document.querySelector("#mobile-menu__un");
    this.DOM.menu__deux = document.querySelector("#mobile-menu__deux");
    this.DOM.menu__troi = document.querySelector("#mobile-menu__troi");
    this.DOM.menu__quat = document.querySelector("#mobile-menu__quat");
    this.DOM.menu__cinq = document.querySelector("#mobile-menu__cinq");
    this.DOM.menu__six = document.querySelector("#mobile-menu__six");
    this.DOM.menu__sept = document.querySelector("#mobile-menu__sept");
    this.DOM.menu__huit = document.querySelector("#mobile-menu__huit");

    this.eventType = this._getEventType();
    this._addEvent();

  }

  _getEventType() {
    // const isTouchCapable =
    //   "ontouchstart" in window ||
    //   (window.DocumentTouch && document instanceof window.DocumentTouch) ||
    //   navigator.maxTouchPoints > 0 ||
    //   window.navigator.msMaxTouchPoints > 0;

    // return isTouchCapable ? "touchstart" : "click";
    // return "click";
    
    // const isTouchCapable = false;
    // return isTouchCapable ? "touchstart" : "click";
    const isTouchCapable = "ontouchstart" in window ||
    (window.DocumentTouch && document instanceof DocumentTouch);

    return isTouchCapable ? "touchstart" : "click";
    

  }

  _toggle() {
    this.DOM.container.classList.toggle("menu-open");
  }

  _addEvent() {
    this.DOM.btn.addEventListener(this.eventType, this._toggle.bind(this));
    this.DOM.cover.addEventListener(this.eventType, this._toggle.bind(this));

    this.DOM.menu__un.addEventListener(this.eventType, this._toggle.bind(this));
    this.DOM.menu__deux.addEventListener(this.eventType, this._toggle.bind(this));
    this.DOM.menu__troi.addEventListener(this.eventType, this._toggle.bind(this));
    this.DOM.menu__quat.addEventListener(this.eventType, this._toggle.bind(this));
    this.DOM.menu__cinq.addEventListener(this.eventType, this._toggle.bind(this));
    this.DOM.menu__six.addEventListener(this.eventType, this._toggle.bind(this));
    this.DOM.menu__sept.addEventListener(this.eventType, this._toggle.bind(this));
    this.DOM.menu__huit.addEventListener(this.eventType, this._toggle.bind(this));
    
  }

}

