$(function() {

	var audio = $("audio")[0];

	$('#btn-play-pause').on('click', function() {
		//Play/pause the track
		if (audio.paused == false) {
			audio.pause();
			$(this).children('i').removeClass('fa-pause');
			$(this).children('i').addClass('fa-play');
		} else {
			audio.play();
			$(this).children('i').removeClass('fa-play');
			$(this).children('i').addClass('fa-pause');
		}
	});

	$('#btn-stop').on('click', function() {
		//Stop the track
		audio.pause();
		audio.currentTime = 0;
		$('#btn-play-pause').children('i').removeClass('fa-pause');
		$('#btn-play-pause').children('i').addClass('fa-play');
	});

	$('#btn-mute').on('click', function() {
		//Mutes/unmutes the sound
		if(audio.volume != 0) {
			audio.volume = 0;
			$(this).children('i').removeClass('fa-volume-off');
			$(this).children('i').addClass('fa-volume-up');
		} else {
			audio.volume = 1;
			$(this).children('i').removeClass('fa-volume-up');
			$(this).children('i').addClass('fa-volume-off');
		}
	});

	function updateProgress() {
		//Updates the progress bar
		var progress = document.getElementById("progress");
		var value = 0;
		if (audio.currentTime > 0) {
			value = Math.floor((100 / audio.duration) * audio.currentTime);
		}
		progress.style.width = value + "%";
	}

	//Progress Bar event listener
	audio.addEventListener("timeupdate", updateProgress, false);

});
