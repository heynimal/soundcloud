SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});


$(document).ready(function() {

  SC.stream('/tracks/10791358', function(sound) {
  $('#start1').click(function(e) {
    e.preventDefault();
    sound.start();
  });
  $('#stop1').click(function(e) {
    e.preventDefault();
    sound.stop();
  });
});

 SC.stream('/tracks/36170652', function(sound) {
  $('#start2').click(function(e) {
    e.preventDefault();
    sound.start();
  });
  $('#stopp2').click(function(e) {
    e.preventDefault();
    sound.stop();
  });
});

 SC.stream('/tracks/280936134', function(sound) {
  $('#start3').click(function(e) {
    e.preventDefault();
    sound.start();
  });
  $('#stop3').click(function(e) {
    e.preventDefault();
    sound.stop();
  });
});

  });
