fetch("http://127.0.0.1:3002/api/v2/membersdetails")
  .then((response) => response.json())
  .then((data) => {
    const tableBody = document.getElementById("memberTableBody");

    data.response.forEach((member) => {
      const row = document.createElement("tr");

      row.innerHTML = `
          <td>${member.cName}</td>
          <td>${member.cPosition}</td>
          <td>${member.cFacebookLink}</td>
          <td>${member.cTwitterLink}</td>
          <td>${member.cLinkedinLink}</td>
          <td>${member.cWhatsappNo}</td>
        `;

      tableBody.appendChild(row);
    });
  })
  .catch((error) => {
    console.log(error);
  });
