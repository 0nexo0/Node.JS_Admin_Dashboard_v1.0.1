fetch("http://cmtapi.gimhanhashintha.me/api/v2/blogoverviewdetails")
  .then((response) => response.json())
  .then((data) => {
    const tableBody = document.getElementById("delBlogOverviewTableBody");
    data.response.forEach((delblog) => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td style="text-align: left; vertical-align: middle;">${delblog.nID}</td>
        <td style="text-align: left; vertical-align: middle;">${delblog.cTitile}</td>
        <td style="text-align: left; vertical-align: middle;">${delblog.cAuthor}</td>
        <td style="text-align: left; vertical-align: middle;">${delblog.cPostDate}</td>
        <td style="text-align: start; vertical-align: middle; padding-left: 2rem"><img src="http://cmtapi.gimhanhashintha.me/${delblog.cImageUrl}" alt="Blog Overview Image" style="width: 60px; height: 60px; border-radius: 8px;"></td>
        <td style="text-align: start; vertical-align: middle;"><i class="fa fa-trash delete-btn" data-id="${delblog.nID}" style="cursor: pointer; color: #250D50; padding-left: 1rem;"></i></td>
      `;
      tableBody.appendChild(row);
    });

    new DataTable("#delBlogOverviewTable");

    const deleteBlog = document.querySelectorAll(".delete-btn");
    deleteBlog.forEach((button) => {
      button.addEventListener("click", (event) => {
        const blogID = event.target.getAttribute("data-id");

        fetch("http://cmtapi.gimhanhashintha.me/api/v2/delblogoverviews", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: blogID }),
        })
          .then((response) => {
            if (response.ok) {
              event.target.parentElement.parentElement.remove();
              alert("succes");
            } else {
              console.log("Failed to delete Blog Overview");
            }
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      });
    });
  })
  .catch((error) => {
    console.log(error);
  });
