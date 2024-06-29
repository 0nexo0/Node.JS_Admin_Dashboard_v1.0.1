fetch("http://127.0.0.1:3002/api/v2/managebookings")
  .then((response) => response.json())
  .then((data) => {
    const tableBody = document.getElementById("manageBookingsTableBody");
    data.response.forEach((booking) => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td style="text-align: left; vertical-align: middle;">${
          booking.nBookingNo
        }</td>
        <td style="text-align: left; vertical-align: middle;">${
          booking.cName
        }</td>
        <td style="text-align: left; vertical-align: middle;">${
          booking.cPhoneNumber
        }</td>
        <td style="text-align: left; vertical-align: middle;">${
          booking.cEmail
        }</td>
        <td style="text-align: left; vertical-align: middle;">${
          booking.cNumOfMembers
        }</td>
        <td style="text-align: left; vertical-align: middle;">${
          booking.cNumOfChilds
        }</td>
        <td style="text-align: left; vertical-align: middle;">${
          booking.cNew
        }</td>
        <td style="text-align: left; vertical-align: middle;">${
          booking.cChkInDate
        }</td>
        <td style="text-align: left; vertical-align: middle;">${
          booking.cChkOutDate
        }</td>
        <td style="text-align: left; vertical-align: middle;">${
          booking.cAccommodation
        }</td>
        <td style="text-align: left; vertical-align: middle;">${
          booking.cPkgName
        }</td>
        <td style="text-align: left; vertical-align: middle;">${
          booking.cMessage
        }</td>
        <td style="text-align: left; vertical-align: middle;">
          <select id="statusSelect-${booking.nBookingNo}">
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
          <button onclick="updateStatus(${
            booking.nBookingNo
          })">Update Status</button>
        </td>
        `;

      tableBody.appendChild(row);
    });
    new DataTable("#manageBookingsTable");
  })
  .catch((error) => {
    console.log("Failed to fetch Bookings:", error);
  });

function updateStatus(bookingNo) {
  const selectElement = document.getElementById(`statusSelect-${bookingNo}`);
  const newStatus = selectElement.value;

  fetch(`http://127.0.0.1:3002/api/v2/managebookings/${bookingNo}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nTrnStatus: newStatus }),
  })
    .then((response) => response.json())
    .then((data) => {
      // Handle success, maybe update UI or show a success message
      console.log("Status updated successfully:", data);
      // Optionally update the UI to reflect the new status
    })
    .catch((error) => {
      console.error("Error updating status:", error);
      // Handle errors, show error message or log the error
    });
}
