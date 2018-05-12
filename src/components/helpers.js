const sessionData = {
	data: null,
	method: window.sessionStorage,

	init: function() {
		this.storage_key = 'picklebox';
		
		var data = this.method.getItem(this.storage_key);
		this.data = (data) ? JSON.parse(data) : {};
		
		this.storage_ready = true;
	},
 	set: function(key, val, callback){
 		if(!this.storage_ready){ this.init(); }
 		this.data[key] = val;

		this.method.setItem(this.storage_key, JSON.stringify(this.data));

		if(typeof callback === "function"){ callback(key, val); }		
	},
	get: function(key, defaultVal){
		if(!this.storage_ready){ this.init(); }

		defaultVal = (defaultVal) ? defaultVal : false;

		var val;

		if(this.data.hasOwnProperty(key)){
			val =  this.data[key];
		} else {
			val = defaultVal;
		}

		val = (val) ? val : defaultVal;

		return val;		
	},
	getAll: function(){
		if(!this.storage_ready){ this.init(); }
		return this.data;
	}
};

const localData = Object.assign({}, sessionData);
localData.method = window.localStorage;

const formatting = {
	days: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],

	date: function(date) {
		if(!(date instanceof Date)){
			date = new Date(date);
		}	

		var month = date.getMonth() + 1;
		var dateNum = date.getDate();
		var dayNum = date.getDay();	

		return this.days[dayNum] + ' ' +  month + '/' + dateNum +'/' + date.getFullYear();
	},
	time: function(time){
				if(!(time instanceof Date)){
					time = new Date(time);
				}				
				var ampm = 'am';
				var hours = time.getHours();

				if (hours > 12) {
				    hours -= 12;
				    ampm = 'pm';
				} else if (hours === 0 || hours === 12) {
					ampm = 'pm';
				   	hours = 12;
				}
				var mins = ('0' + time.getMinutes()).slice(-2);

				return hours  + ':' + mins + ampm;	
	}
}




export {
	sessionData,
	localData,
	formatting
};