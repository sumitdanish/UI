// $('.form').find('input, textarea').on('keyup blur focus', function (e) {
//
//   var $this = $(this),
//       label = $this.prev('label');
//
// 	  if (e.type === 'keyup') {
// 			if ($this.val() === '') {
//           label.removeClass('active highlight');
//         } else {
//           label.addClass('active highlight');
//         }
//     } else if (e.type === 'blur') {
//     	if( $this.val() === '' ) {
//     		label.removeClass('active highlight');
// 			} else {
// 		    label.removeClass('highlight');
// 			}
//     } else if (e.type === 'focus') {
//
//       if( $this.val() === '' ) {
//     		label.removeClass('highlight');
// 			}
//       else if( $this.val() !== '' ) {
// 		    label.addClass('highlight');
// 			}
//     }
//
// });
//
// $('.tab a').on('click', function (e) {
//
//   e.preventDefault();
//
//   $(this).parent().addClass('active');
//   $(this).parent().siblings().removeClass('active');
//
//   target = $(this).attr('href');
// 
//   $('.tab-content > div').not(target).hide();
//
//   $(target).fadeIn(600);
//
// });

var promises = [];
function makePromise(i, video) {
  promises[i] = new $.Deferred();
  // This event tells us video can be played all the way through, without stopping or buffering
  video.oncanplaythrough = function() {
    // Resolve the promise
    promises[i].resolve();
  }
}
// Pause all videos and create the promise array
$('video').each(function(index){
  this.pause();
  makePromise(index, this);
})

// Wait for all promises to resolve then start playing
$.when.apply(null, promises).done(function () {
  $('video').each(function(){
    this.play();
  });
});
