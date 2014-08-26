
// Filtering filters - Demo app ---------------------------
// More info: http://simurai.com/blog/2014/07/20/filtering-filters/

var el_app = document.getElementById('app');
var el_photo = document.getElementById('photo');

var currentFilter;
var currentSelection = 0;
var currentPhoto = 1;

FastClick.attach(document.body);


// Vue ---------------------------

var app = new Vue({
    el: '#app',
    data: {
        filters: [
            { filter: 'default',    label: 'Original'   },
            { filter: 'f1',         label: 'Eureka'     },
            { filter: 'f4',         label: 'London'     },
            { filter: 'f5',         label: 'Flip Flop'  },
            { filter: 'f9',         label: 'Copper'     },
            { filter: 'f12',        label: 'LoFi'       },
            { filter: 'f11',        label: 'Night'      },
            { filter: 'f3',         label: 'Rocky'      },
            { filter: 'f2',         label: 'Karl'       },
            { filter: 'f8',         label: 'Gold'       },
            { filter: 'f10',        label: 'Silver'     },
            { filter: 'f7',         label: 'Butterfly'  },
            { filter: 'f6',         label: 'Introvert'  }
        ],
        selection: [],
        photos: 3
    },
        
    methods: {
        
        setFilter: function (index) {
            el_photo.setAttribute('data-filter', app.filters[index].filter );
        },

        onPickFilter: function (newFilter, index) {            
            
            if( newFilter.$el.classList.contains('is-selected') ) {
                var _i = app.selection.indexOf(index);
                app.selection.splice(_i, 1);
                newFilter.$el.classList.remove('is-selected');
            } else {
                
                
                if(newFilter == currentFilter) {
                    newFilter.$el.classList.add('is-selected');
                    app.selection.push(index);
                }
                
                currentFilter = newFilter;
                this.setFilter(index);
            }
        },
        
        onSelection: function () {
            if(currentSelection >= app.selection.length) {
                currentSelection = 0;
            }
            this.setFilter( app.selection[currentSelection] );
            currentSelection++;
        },
        
        onSnap: function () {
            currentPhoto++;
            if(currentPhoto > app.photos) {
                currentPhoto = 1;
            }
            el_app.setAttribute('data-photo', currentPhoto );
        }
                
    }
});
