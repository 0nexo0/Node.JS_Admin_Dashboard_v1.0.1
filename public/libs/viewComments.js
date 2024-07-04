fetch("http://cmtapi.gimhanhashintha.me/api/v2/comments")
  .then((response) => response.json())
  .then((data) => {
    const tableBody = document.getElementById("viewCommentsTabelBody");
    data.response.forEach((comment) => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td style="text-align: left; vertical-align: middle;">${comment.nCommentID}</td>
        <td style="text-align: left; vertical-align: middle;">${comment.cComment}</td>
        <td style="text-align: left; vertical-align: middle;">${comment.cCmntSenderName}</td>
        <td style="text-align: left; vertical-align: middle;">${comment.cDate}</td>
        `;
      tableBody.appendChild(row);
    });
    new DataTable("#viewTeamTable");
  })
  .catch((error) => {
    console.log("Failed to fetch Comments:", error);
  });
