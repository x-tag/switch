(function(){

  xtag.addEvents(document, {
    reset: function(e){
      if (e.target.nodeName == 'FORM') xtag.query(e.target, 'x-switch').forEach(function(node){
        node.checked = false;
      })
    }
  });

  xtag.register('x-switch', {
    mixins: ['input'],
    content: function(){/*
      <label>
        <input type="checkbox" />
        <img class="x-switch-knob" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
      </label>
    */},
    lifecycle: {
      created: function(){
        this.setAttribute('tabindex', this.getAttribute('tabindex') || 0);
      }
    },
    methods: {
      toggle: function(state){
        this.checked = state === undefined ? (this.checked ? false : true) : state;
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
      checked: {
        attribute: { boolean: true, property: 'input' },
        set: function(state){
          this.xtag.input.checked = !!state;
        }
      }
    }
  });

})();
