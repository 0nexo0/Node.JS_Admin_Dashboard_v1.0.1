fetch("http://127.0.0.1:3002/api/v2/members")
  .then((response) => response.json())
  .then((data) => {
    const h3Element = document.getElementById("members");
    const members = data.response[0].Members;
    h3Element.innerText = members;
  })
  .catch((error) => {
    console.log(error);
  });
fetch("http://127.0.0.1:3002/api/v2/bookingsCount")
  .then((response) => response.json())
  .then((data) => {
    const h3Element = document.getElementById("bookings");
    const members = data.response[0].bookings;
    h3Element.innerText = members;
  })
  .catch((error) => {
    console.log(error);
  });
fetch("http://127.0.0.1:3002/api/v2/commentsCount")
  .then((response) => response.json())
  .then((data) => {
    const h3Element = document.getElementById("comments");
    const members = data.response[0].comments;
    h3Element.innerText = members;
  })
  .catch((error) => {
    console.log(error);
  });
fetch("http://127.0.0.1:3002/api/v2/blogs")
  .then((response) => response.json())
  .then((data) => {
    const h3Element = document.getElementById("blogs");
    const members = data.response[0].blogs;
    h3Element.innerText = members;
  })
  .catch((error) => {
    console.log(error);
  });
