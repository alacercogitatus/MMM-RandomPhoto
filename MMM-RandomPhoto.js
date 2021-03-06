/* global Module */

/* Magic Mirror
 * Module: MMM-RandomPhoto
 *
 * By Diego Vieira <diego@protos.inf.br>
 * And Alacer Cogitatus
 * ICS Licensed.
 */

Module.register("MMM-RandomPhoto",{
	defaults: {
		opacity: 0.3,
		animationSpeed: 500,
		updateInterval: 60,
		//url: 'https://unsplash.it/1920/1080/?random'
		grayscale: false,
		random: true,
		blur: false,
		show_info: false,
		info_position: "top_bar",
		height: 1080,
		width: 1920
	},

	start: function() {
		this.load();
	},

	load: function() {
		var self = this;
		let components = [], name = "MMM-RandomPhoto";
		["random", "blur", "grayscale"].forEach(function(x, index){
			console.log("module=MMM-RandomPhoto x=" + x + " config=" + self.config[x]);
			if (self.config[x]){
				components.push(x);
			}
		});
		console.log("module=MMM-RandomPhoto configuration=" + JSON.stringify(self.config));
		console.log("module=MMM-RandomPhoto components=" + components.join(":"));
		var url = "https://unsplash.it/" + self.config.width + "/" + self.config.height + "/" + (components.length > 0 ? '?' : '') +components.join("&");
		url = url + (url.indexOf('?') > -1 ? '&' : '?') + (new Date().getTime());
		console.log("module=MMM-RandomPhoto url=" + url);
		var img = $('<img />').attr('src', url);
		img.on('load', function() {
				$('#mmm-photos-placeholder1').attr('src', url).animate({
					opacity: self.config.opacity
				}, self.config.animationSpeed, function() {
					$(this).attr('id', 'mmm-photos-placeholder2');
				});
				console.log("module=MMM-RandomPhoto src=" + $('#mmm-photos-placeholder1').attr('src'), name);
				$('#mmm-photos-placeholder2').animate({
					opacity: 0
				}, self.config.animationSpeed, function() {
					$(this).attr('id', 'mmm-photos-placeholder1');
				});
		});

		setTimeout(function() {
			self.load();
		}, (self.config.updateInterval * 1000));
		
	},

	getDom: function() {
		var wrapper = document.createElement("div");
		wrapper.innerHTML = '<img id="mmm-photos-placeholder1" style="opacity: 0; position: absolute" /><img id="mmm-photos-placeholder2" style="opacity: 0; position: absolute" />';
		return wrapper;
	},
	getScripts: function() {
    return [
			this.file('node_modules/jquery/dist/jquery.min.js')
    ]
	}
});
