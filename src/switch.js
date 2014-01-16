(function(){

  var template = xtag.createFragment('<label>' +
    '<input type="checkbox" />' +
    '<div class="x-switch-slider x-switch-icons">' +
      '<div class="x-switch-knob-wrap">' +
        '<img class="x-switch-knob" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />' + 
      '</div>' +
    '</div>' +
  '</label>');

  xtag.register('x-switch', {
    lifecycle: {
      created: function(){
        this.setAttribute('tabindex', this.getAttribute('tabindex') || 0);
        this.appendChild(template.cloneNode(true));
		this.input = this.querySelector('input');
		this.input.name = this.name;
      }
    },
    methods: {
      toggle: function(state){
        this.checked = typeof state == 'undefined' ? (this.checked ? false : true) : state;
      }
    },
    events:{
      'keydown:preventable:keypass(32)': function(){
        if (!this.disabled) this.checked = !this.checked;
      }
    },
    accessors: {
	  name: {
        attribute: { selector: 'input' }
      },
      disabled: {
        attribute: { boolean: true, selector: 'input' }
      },
      checked: {
        attribute: { boolean: true, selector: 'input' },
        set: function(state){
          this.input.checked = !!state;
        }
      }
    }
  });

})();