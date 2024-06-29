fetch("http://127.0.0.1:3002/api/v2/managebookings")
  .then((response) => response.json())
  .then((data) => {
    const tableBody = document.getElementById("manageBookingsTableBody");

    data.response.forEach((booking) => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${booking.nBookingNo}</td>
        <td>${booking.cName}</td>
        <td>${booking.cPhoneNumber}</td>
        <td>${booking.cEmail}</td>
        <td>${booking.cNumOfMembers}</td>
        <td>${booking.cNumOfChilds}</td>
        <td>${booking.cNew}</td>
        <td>${booking.cChkInDate}</td>
        <td>${booking.cChkOutDate}</td>
        <td>${booking.cAccommodation}</td>
        <td>${booking.cPkgName}</td>
        <td>${booking.cMessage}</td>
        <td>
          ${
            booking.nTrnStatus == 0
              ? '<span class="btn btn-outline-secondary">Pending</span>'
              : booking.nTrnStatus == 1
              ? '<span class="btn btn-outline-success">Accepted</span>'
              : booking.nTrnStatus == 2
              ? '<span class="btn btn-outline-danger">Rejected</span>'
              : ""
          }
        </td>
        <td>
          <select class="statusSelect" bID="${booking.nBookingNo}", cname="${
        booking.cName
      }", chkIn="${booking.cChkInDate}", chkOut="${
        booking.cChkOutDate
      }", pkg="${booking.cPkgName}", email="${booking.cEmail}">
            <option value="0" ${
              booking.nTrnStatus == 0 ? "selected" : ""
            }>Pending</option>
            <option value="1" ${
              booking.nTrnStatus == 1 ? "selected" : ""
            }>Accepted</option>
            <option value="2" ${
              booking.nTrnStatus == 2 ? "selected" : ""
            }>Rejected</option>
          </select>
        </td>
      `;

      const selectElement = row.querySelector(".statusSelect");
      selectElement.addEventListener("change", () => {
        const selectedStatus = parseInt(selectElement.value);
        const updateURL = "http://127.0.0.1:3002/api/v2/updatestatus";
        const requestData = {
          id: booking.nID,
          sts: selectedStatus,
        };

        const name = selectElement.getAttribute("cname");
        const bID = selectElement.getAttribute("bID");
        const email = selectElement.getAttribute("email");
        const pkg = selectElement.getAttribute("pkg");
        const chkIn = selectElement.getAttribute("chkIn");
        const chkOut = selectElement.getAttribute("chkOut");

        console.log(name, bID, pkg, email, chkIn, chkOut);

        fetch(updateURL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        })
          .then((response) => response.json())
          .then((updatedData) => {
            console.log("Data Successfully Updated", updatedData);
            if (selectedStatus == 1) {
              fetch("http://127.0.0.1:3002/api/v2/sendmail", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ bID, name, email, chkIn, chkOut, pkg }),
              })
                .then((response) => response.text())
                .then((result) => {
                  console.log(`Email Sent: ${result}`);
                  alert(`Successfully Accepted : ${result}`);
                  location.reload();
                })
                .catch((error) => {
                  console.log("Email Send Error:", error);
                });
            } else {
              alert(`Successfully Rejected`);
              location.reload();
            }
          })
          .catch((error) => {
            console.error("Error updating data:", error);
          });
      });

      tableBody.appendChild(row);
    });

    new DataTable("#manageBookingsTable");
  })
  .catch((error) => {
    console.error("Failed to fetch Bookings:", error);
  });
