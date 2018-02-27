SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});


$(document).ready(function()   {

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

 SC.stream('/tracks/35483362', function(sound) {
  $('#start2').click(function(e) {
    e.preventDefault();
    sound.start();
  });
  $('#stopp2').click(function(e) {
    e.preventDefault();
    sound.stop();
  });
});

 SC.stream('/tracks/47114027', function(sound) {
  $('#start3').click(function(e) {
    e.preventDefault();
    sound.start();
  });
  $('#stop3').click(function(e) {
    e.preventDefault();
    sound.stop();
  });
});

SC.stream('/tracks/177238124', function(sound) {
 $('#start4').click(function(e) {
   e.preventDefault();
   sound.start();
 });
 $('#stop4').click(function(e) {
   e.preventDefault();
   sound.stop();
 });
});

SC.stream('/tracks/232631197', function(sound) {
 $('#start5').click(function(e) {
   e.preventDefault();
   sound.start();
 });
 $('#stop5').click(function(e) {
   e.preventDefault();
   sound.stop();
 });
});

SC.stream('/tracks/31949889', function(sound) {
 $('#start6').click(function(e) {
   e.preventDefault();
   sound.start();
 });
 $('#stop6').click(function(e) {
   e.preventDefault();
   sound.stop();
 });
});

SC.stream('/tracks/267845557', function(sound) {
 $('#start7').click(function(e) {
   e.preventDefault();
   sound.start();
 });
 $('#stop7').click(function(e) {
   e.preventDefault();
   sound.stop();
 });
});

SC.stream('/tracks/318053145', function(sound) {
 $('#start8').click(function(e) {
   e.preventDefault();
   sound.start();
 });
 $('#stop8').click(function(e) {
   e.preventDefault();
   sound.stop();
 });
});

});
