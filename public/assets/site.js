$(document).ready(function () {
  $('#submit-burger').on('click', function (event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $('#type-burger').val().trim(),
      devoured: false
    }

    // console.log("burger", newBurger);

    fetch('/api/burgers', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBurger)
    }).then(
      function () {
        console.log('created new burger');

        location.reload();
      });
  })

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
