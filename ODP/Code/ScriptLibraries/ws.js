if (typeof Object.create !== 'function') {
	Object.create = function(o) {
		var F = function() {
		};
		F.prototype = o;
		return new F();
	}
}

var ws;

function initWs() {
	ws = Object.create(Ws);
	ws.init(wsUri);
}

var Ws = {
	self : null,
	websocket : null,

	init : function(uri) {
		self = this;
		websocket = new WebSocket(uri);
		websocket.onopen = this.onOpen;
		websocket.onclose = this.onClose;
		websocket.onmessage = this.onMessage;
		websocket.onerror = this.onError;
	},
/* *** EVENT HANDLERS *** */
	onOpen : function(e) {
		console.log("A websocket connection has been opened.");
		
	},
	onClose : function(e) {
		
	},
	onMessage : function(e) {
		
	},
	onError : function(e) {
		
	},
/* *** METHODS *** */
	send : function(json) {
		websocket.send(json);
	},
	close:function(){
		websocket.close();
	}
};