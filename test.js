function formatDate(data) {
  // Extract the timestamp from the provided data
  timestamp = parseFloat(data.replace('\/Date(', '').replace(')\/', ''));

  // Create a new Date object using the extracted timestamp
  date = new Date(timestamp);

  // Format the date using toLocaleString or other appropriate methods
  formattedDate = date.toLocaleString('en-US', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false, // Set to false for 24-hour format
  });

  return formattedDate;
}
//https://live.datatables.net/rekiyuve/11/edit
var table = $("#userStatementListTable").DataTable({
  responsive: true,
  dom: '<"top"if>rt<"bottom"l<"Pagination"pbB>><"clear">',
  stripeClasses: ['odd-row', 'even-row'],
  order: [1, "desc"],
  lengthMenu: [20, 50, 100],
  buttons: [
    {
      extend: 'csv',
      bom: true,
      exportOptions: {
        columns: "thead th:not(.noExport)"
      }
    },],
  ajax: "examples/ajax/data/arrays.txt",
  columnDefs: [
    { targets: '_all', className: "dt-center" }
  ],
  columns: [
    {
      data: "Date",
      visible: false,
      searchable: false
    },
    {
      data: "Date", orderData: [0],
      render: function (data, type, row) {
        if (data == "/Date(-62135596800000)/")
          return "N/A";
        temp = formatDate(data);
        console.log(temp);
        return temp;
      }
    },
    {
      data: "PointServiceID"

    },
    { data: "BalanceFormat" },
    {
      data: "CostCentre",
      render: function (data, type, row) {
        if (data !== undefined && data != null && data.length > 0)
          return data;
        return "N/A";
      }
    },
    {
      //TODO:wait to check.
      data: "DetailID",
      render: function (data, type, row) {
        return '<button  class="btn btn-primary" onclick="GetDetailView(\'' + row.EncryptDetailID + '\',' + data + ',' + row.StatementType + ',' + row.StatementDetail + ')" >View</button>';
      },
      searchable: false

    },

  ]
});
