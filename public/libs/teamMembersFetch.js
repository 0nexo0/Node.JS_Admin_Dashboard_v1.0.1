fetch("http://127.0.0.1:3002/api/v2/membersdetails")
  .then((response) => response.json())
  .then((data) => {
    const tableBody = document.getElementById("memberTableBody");

    data.response.forEach((member) => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${member.nID}</td>
        <td>${member.cName}</td>
        <td>${member.cPosition}</td>
        <td><img src="http://localhost:3002/${member.cImageUrl}" alt="Member Image" style="width: 120px; height: 120px; border-radius: 8px;"></td>
        <td><button class="delete-btn" data-id="${member.nID}">Delete</button></td>
      `;
      console.log(member.cImageUrl);
      tableBody.appendChild(row);
    });

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
