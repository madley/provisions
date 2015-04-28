
//add accordion drop-down .active class

$('#accordion')
  .on('show.bs.collapse', function(e) {

    $(e.target).parent().addClass('active');
})
  .on('hide.bs.collapse', function(e) {

    $(e.target).parent().removeClass('active');
  });
