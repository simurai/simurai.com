
// Filtering filters - Demo app ---------------------------
// More info: http://simurai.com/blog/2014/07/20/filtering-filters/

var el_app = document.getElementById('app');
var el_photo = document.getElementById('photo');

var currentFilter;
var previousFilter;
var currentPhoto = 1;

FastClick.attach(document.body);


// Vue ---------------------------

var app = new Vue({
    el: '#app',
    data: {
        filters: [
            { filter: 'default',    label: 'Original' },
            { filter: 'f1',         label: 'Eureka' },
            { filter: 'f4',         label: 'London' },
            { filter: 'f5',         label: 'Flip Flop' },
            { filter: 'f9',         label: 'Copper' },
            { filter: 'f12',        label: 'LoFi' },
            { filter: 'f11',        label: 'Night' },
            { filter: 'f3',         label: 'Rocky' },
            { filter: 'f2',         label: 'Karl' },
            { filter: 'f8',         label: 'Gold' },
            { filter: 'f10',        label: 'Silver' },
            { filter: 'f7',         label: 'Butterfly' },
            { filter: 'f6',         label: 'Introvert' }
        ],
        photos: 3
    },
        
    methods: {
        
        onPickPhoto: function () {
            currentPhoto++;
            if(currentPhoto > app.photos) {
                currentPhoto = 1;
            }
            el_app.setAttribute('data-photo', currentPhoto );
        },
        
        onPickFilter: function (newFilter) {
            if(newFilter == currentFilter) {
                if(previousFilter) {
                    newFilter = previousFilter;
                }
            }
            
            if(currentFilter) {
                currentFilter.$el.classList.remove('is-selected');
            }
            
            newFilter.$el.classList.add('is-selected');
            
            previousFilter = currentFilter;
            currentFilter = newFilter;
            
            el_photo.setAttribute('data-filter', newFilter.filter );
        }
                
    }
});
