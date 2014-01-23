'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
	$('#submitBtn').click(updatePicture);
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$(this).text("Button Boss");
		$('.jumbotron p').toggleClass('bossClass');
	});
	$("a.thumbnail").click(projectClick);
}
function projectClick(e) {
	console.log("project clicked");
	e.preventDefault();
	$(this).css("background-color", "#7fff00");
	var containingProject = $(this).closest(".project");
	var description = $(containingProject).find('.project-description');
	if (description.length == 0) {
		$(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
	} else {
		description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
	};
}
function updatePicture(e) {
	var projectID = $('#project').val();
    $(projectID).animate({
    	width: $('#width').val()
    });

    var newText = $('#description').val();
    $(projectID + " .project-description").text(newText);
}