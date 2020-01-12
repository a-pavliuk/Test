VANTA.NET({
  el: "#wrapper",
  color: 0x9b093b,
  backgroundColor: 0x151416
})


$(function() {


  /* Modal
  ========================== */

  const modalCall = $("[data-modal]");
  const modalClose = $("[data-close]");

  modalCall.on("click", function(event) {
      event.preventDefault();

      let $this = $(this);
      let modalId = $this.data('modal');

      $(modalId).addClass('show');

  });

  modalClose.on("click", function(event) {
      event.preventDefault();

      let $this = $(this);
      let modalParent = $this.parents('.modal');

      modalParent.removeClass('show');

  });

  $(".modal").on("click", function(event) {
     
      $(this).removeClass('show');

  });

  $(".modal__dialog").on("click", function(event) {
     event.stopPropagation();
  });


});

  
  




