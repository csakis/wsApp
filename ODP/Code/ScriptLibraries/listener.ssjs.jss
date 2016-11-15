function saveShape (shapeClass) {
	var db = session.getDatabase("","wsapp.nsf"); 
	var shapeView = db.getView("shapes");
	var shapeDoc = shapeView.getFirstDocument();
	shapeDoc.replaceItemValue("Form","shape"); 
	shapeDoc.replaceItemValue("bgColor", shapeClass.get("bgColor"));
	shapeDoc.replaceItemValue("border", shapeClass.get('border'));
	shapeDoc.replaceItemValue("borderRadius", shapeClass.get('borderRadius'));
	shapeDoc.replaceItemValue("width", shapeClass.get('divWidth'));
	shapeDoc.replaceItemValue("height", shapeClass.get('divHeight'));
	shapeDoc.save();
}

function onMessage(msg){
	var application = msg.getData().get("application");
	
	if (application != "wsApp") {
			print("Message does not come from wsApp " + application);
			return false;
	}
	
	var msgType = msg.getData().get("type");
	if (msgType == "shape") { 
		saveShape(msg.getData().get("shape"));
	}
}