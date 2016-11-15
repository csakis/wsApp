function onBeforeMessage(msg){	
}

function onMessage(socketMessage){
}

function onError(error){
}

function onOpen(user){
	print(user.getUserId() + " has logged in.");
}

function onClose(user){
	print(user.getUserId() + " has left.");
}