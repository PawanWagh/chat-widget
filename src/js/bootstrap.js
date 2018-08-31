window.onload = function() {
    if (window.jQuery) {  
        // jQuery is loaded  
        //alert("Yeah!");
    } else {
        // jQuery is not loaded
        //alert("Doesn't Work");
        var script = document.createElement('script');
        script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js';
        script.type = 'text/javascript';
        document.getElementsByTagName('head')[0].appendChild(script);
    }

    var bootstrap_enabled = (typeof $().modal == 'function');

    if (bootstrap_enabled) {
    	//nothing
    } else {
    	var link = document.createElement('link');
    	link.href = "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css";
    	link.rel = "stylesheet"
    	document.getElementsByTagName('head')[0].appendChild(link);
    }
}