function loadStart() {
	console.log("Started Loading...");
	start = new Date().getTime();
	//only add progress bar if added yet.
	if (jQuery('loading-bar').length == 0) {
		jQuery("body").add("<!--Loading Bar--><div id=\"loading-bar\"><dt></dt><dd></dd></div>");
	}
    if (jQuery("#progress").length === 0) {
        jQuery("body").append(jQuery("<div><dt/><dd/></div>").attr("id", "progress"));
        jQuery("#progress").width((30 + Math.random() * 30) + "%");
    }
};

function loadFinish() {
    //End loading animation
    jQuery("#progress").width("101%").delay(200).fadeOut(400, function() {
        jQuery(this).remove();
    });
    end = new Date().getTime();
    time = end - start;
    console.log("Loading Complete. " + time + "ms");
};