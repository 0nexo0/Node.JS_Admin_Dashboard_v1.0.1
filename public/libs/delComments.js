fetch("http://127.0.0.1:3002/api/v2/comments")
  .then((response) => response.json())
  .then((data) => {
    const tableBody = document.getElementById("delCommentsTableBody");
    data.response.forEach((comment) => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td style="text-align: left; vertical-align: middle;">${comment.nCommentID}</td>
        <td style="text-align: left; vertical-align: middle;">${comment.cComment}</td>
        <td style="text-align: left; vertical-align: middle;">${comment.cCmntSenderName}</td>
        <td style="text-align: left; vertical-align: middle;">${comment.cDate}</td>
        <td style="text-align: left; vertical-align: middle;"><i class="fa fa-trash delete-btn" data-id=${comment.nCommentID} style="cursor: pointer; color: #250D50; padding-left: 1rem;"></i></td>
        `;
      tableBody.appendChild(row);
    });
    new DataTable("#delCommentsTable");

    const delCommentsBtn = document.querySelectorAll(".delete-btn");
    delCommentsBtn.forEach((delBtn) => {
      delBtn.addEventListener("click", (event) => {
        const delCmntID = event.target.getAttribute("data-id");

        fetch("http://127.0.0.1:3002/api/v2/delcomments", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: delCmntID }),
        })
          .then((response) => {
            if (response.ok) {
              event.target.parentElement.parentElement.remove();
              alert("Success");
            } else {
              alert("Failed to Delete Comment");
            }
          })
          .catch((error) => {
            console.log("Failed to delete Comment:", error);
          });
      });
    });
  })
  .catch((error) => {
    console.log("Failed to fetch Comments:", error);
  });
