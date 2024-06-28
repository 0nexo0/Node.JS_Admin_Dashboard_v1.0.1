fetch("http://127.0.0.1:3002/api/v2/blogoverviewdetails")
  .then((response) => response.json())
  .then((data) => {
    const tableBody = document.getElementById("viewBlogOverviewTableBody");
    data.response.forEach((blogoverview) => {
      const row = document.createElement("tr");

      row.innerHTML = `
          <td style="text-align: left; vertical-align: middle;">${blogoverview.nID}</td>
          <td style="text-align: left; vertical-align: middle;">${blogoverview.cTitile}</td>
          <td style="text-align: left; vertical-align: middle;">${blogoverview.cAuthor}</td>
          <td style="text-align: left; vertical-align: middle;">${blogoverview.cPostDate}</td>
          <td style="text-align: start; vertical-align: middle; padding-left: 2rem"><img src="http://localhost:3002/${blogoverview.cImageUrl}" alt="Blog Overview Image" style="width: 60px; height: 60px; border-radius: 8px;"></td>
        `;
      tableBody.appendChild(row);
    });
    new DataTable("#viewBlogOverviewTable");
  })
  .catch((error) => {
    console.log("Failed to Fetch Blog Overview Details:", error);
  });
