fetch("http://127.0.0.1:3002/api/v2/membersdetails")
  .then((response) => response.json())
  .then((data) => {
    const tableBody = document.getElementById("memberTableBody");

    data.response.forEach((member) => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td style="text-align: left; vertical-align: middle;">${member.nID}</td>
        <td>${member.cName}</td>
        <td>${member.cPosition}</td>
        <td style="text-align: start; padding-left: 2rem"><img src="http://localhost:3002/${member.cImageUrl}" alt="Member Image" style="width: 60px; height: 60px; border-radius: 8px;"></td>
        <td  style="text-align: start"><i class="fa fa-trash delete-btn" data-id="${member.nID}" style="cursor: pointer; color: #250D50; padding-left: 1rem; padding-top: 1rem;"></i></td>
      `;
      console.log(member.cImageUrl);
      tableBody.appendChild(row);
    });
    new DataTable("#editTeamTable");

    const deleteButtons = document.querySelectorAll(".delete-btn");
    deleteButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const memberId = event.target.getAttribute("data-id");
        console.log(memberId);

        fetch("http://127.0.0.1:3002/api/v2/deletemembers", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: memberId }),
        })
          .then((response) => {
            if (response.ok) {
              event.target.parentElement.parentElement.remove();
              alert("succes");
            } else {
              console.log("Failed to delete member");
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
