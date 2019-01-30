$(document).ready(function () {
  $('#submit-burger').on('click', function (event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $('#type-burger').val().trim(),
      devoured: false
    }

    console.log("burger", newBurger);


    //LOOK AT SEQUELIZE 01 ACTIVITY AUTHOR.JS 
    // A function for creating an burger. Calls get burgers upon completion
    function upsertBurger(burgerData) {
      $.post("/api/burgers", burgerData)
        .then(getburgers);
    }
  //   fetch('/api/burgers', {
  //     method: 'POST',
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(newBurger)
  //   }).then(
  //     function () {
  //       console.log('created new burger');
  //       console.log(newBurger)
  //       // location.reload();
  //     });
  // })

  $('.devour-btn').on('click', function (event) {
    var id = $(this).data('id');

    var newDevour = {
      devoured: true
    };
    console.log(id);

    fetch('/api/burgers/' + id, {
      method: 'PUT',
      body: newDevour
    }).then(
      function () {
        console.log('devoured', id);
        location.reload();
      });
  });
});
