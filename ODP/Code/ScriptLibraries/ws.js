if (typeof Object.create !== 'function') {
	Object.create = function(o) {
		var F = function() {
		};
		F.prototype = o;
		return new F();
	}
}

function createMsgHeader() {
	// create the constant part of websocket messages
	var msg = {};
	msg.from = currentUser; //a global var of @UserName()
	msg.to = "/wsApp.nsf/*";
	msg.data = {};
	msg.data.application = "wsApp";
	return msg
}

function createShapeMsg(shape) {
	var msg = createMsgHeader();
	msg.text = ""; // there's no chat msg
	msg.data.type = "shape";
	msg.data.shape = shape;
	return msg;
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
	send : 	function(msg) {
		if (websocket.readyState === 1) {
			websocket.send(JSON.stringify(msg));
		}
		else {
			console.log("No websocket connection");
		}
	},
	close:function(){
		websocket.close();
	}
};