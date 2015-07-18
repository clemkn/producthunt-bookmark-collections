'use strict';

var collectionStorageService = function() {
  var lsName = 'collections';
  var data = localStorage.getItem(lsName) ? JSON.parse(localStorage.getItem(lsName)) : [];

  return {

		get: function() {
			return data;
		},

		add: function(item) {
			this.remove(item.url);
			data.push(item);
			this.save();
		},

		remove: function(url) {
			var idx = null;
			for(var i=0; i<data.length; i++) {
				if(data[i].url === url) {
					idx = i;
					break;
				}
			}

			if(idx !== null) {
				data.splice(idx, 1);
				this.save();
			}
		},

        fav: function(item){
            for(var i=0; i<data.length; i++) {
                if(data[i].url === item.url) {
                    return true;
                }
            }
            return false;
        },

		save: function() {
			localStorage.setItem(lsName, JSON.stringify(data));
		}

  };
};
