fetch("http://cmtapi.gimhanhashintha.me/api/v2/membersdetails")
  .then((response) => response.json())
  .then((data) => {
    const tableBody = document.getElementById("viewMembersTableBody");

    data.response.forEach((member) => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td style="text-align: left; vertical-align: middle;">${member.nID}</td>
        <td style="text-align: left; vertical-align: middle;">${member.cName}</td>
        <td style="text-align: left; vertical-align: middle;">${member.cPosition}</td>
        <td style="text-align: left; vertical-align: middle;">${member.cFacebookLink}</td>
        <td style="text-align: left; vertical-align: middle;">${member.cTwitterLink}</td>
        <td style="text-align: left; vertical-align: middle;">${member.cLinkedinLink}</td>
        <td style="text-align: left; vertical-align: middle;">${member.cWhatsappNo}</td>
        <td style="text-align: start; vertical-align: middle; padding-left: 2rem"><img src="http://localhost:3002/${member.cImageUrl}" alt="Member Image" style="width: 60px; height: 60px; border-radius: 8px;"></td>
        
        `;
      tableBody.appendChild(row);
    });
    new DataTable("#viewTeamTable");
  })
  .catch((error) => {
    console.log("Failed to Fetch View Members.", error);
  });
