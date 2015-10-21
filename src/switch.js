(function(){

  xtag.register('x-switch', {
    content: function(){/*
      <label>
        <input type="checkbox" />
        <img class="x-switch-knob" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
      </label>
    */},
    lifecycle: {
      created: function(){
        this.setAttribute('tabindex', this.getAttribute('tabindex') || 0);
    		this.xtag.input = this.querySelector('input');
    		this.xtag.input.name = this.name;
      }
    },
    methods: {
      toggle: function(state){
        this.checked = state == undefined ? (this.checked ? false : true) : state;
      }
    },
    events:{
      change: function(e){
        this.checked = e.target.checked;
      },
      'keydown:preventable:keypass(32)': function(){
        if (!this.disabled) this.checked = !this.checked;
      }
    },
    accessors: {
	    name: {
        attribute: { property: 'input' }
      },
      disabled: {
        attribute: { boolean: true, property: 'input' }
      },
      checked: {
        attribute: { boolean: true, property: 'input' },
        set: function(state){
          this.xtag.input.checked = !!state;
        }
      }
    }
  });

})();
