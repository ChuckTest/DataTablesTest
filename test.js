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
  
  data = {
    "draw": 1,
    "error": null,
    "recordsTotal": 4,
    "recordsFiltered": 4,
    "data": [
      {
        "NomineeUniqueIDs": "U14",
        "NominatorFullName": "UserMc UserM",
        "CLMID": "LKHSRBevcg5Q%2bipy057Kug%3d%3d",
        "CBHID": "0",
        "NomineesFullName": "UserNc UserN;UVHasjsWcMq7CYMnnEUQ2w%3d%3d",
        "BudgetHolderFullName": null,
        "AwardValue": 0.00,
        "Dept": "dev",
        "LineManagerFullName": "UserBc UserB",
        "CompanyValues": "cooo",
        "CreatedOn": "\/Date(1695870270823)\/",
        "ReviewerType": 1,
        "Status": 3,
        "ActionTime": "\/Date(1695870477980)\/",
        "TotalAwardValue": 0.00,
        "EncryptNominatorID": "UKEgzgR0BLHhQ37rFxha0g%3d%3d",
        "TransactionID": "qLcxcf9ZtbhC9kUnOvTQNA%3d%3d",
        "IsDirectRecognition": false
      },
      {
        "NomineeUniqueIDs": "U14",
        "NominatorFullName": "UserMc UserM",
        "CLMID": "WA%2bsltpT6UeScEtg5kSHPg%3d%3d",
        "CBHID": "0",
        "NomineesFullName": "UserNc UserN;UVHasjsWcMq7CYMnnEUQ2w%3d%3d",
        "BudgetHolderFullName": null,
        "AwardValue": 0.00,
        "Dept": "dev",
        "LineManagerFullName": "UserOc UserO",
        "CompanyValues": "cooo",
        "CreatedOn": "\/Date(1695117175507)\/",
        "ReviewerType": 1,
        "Status": 4,
        "ActionTime": "\/Date(1695791717000)\/",
        "TotalAwardValue": 0.00,
        "EncryptNominatorID": "UKEgzgR0BLHhQ37rFxha0g%3d%3d",
        "TransactionID": "U3LG11bajK9z%2bHm3ivPfuw%3d%3d",
        "IsDirectRecognition": false
      },
      {
        "NomineeUniqueIDs": "U16",
        "NominatorFullName": "UserJc UserJ",
        "CLMID": "LKHSRBevcg5Q%2bipy057Kug%3d%3d",
        "CBHID": "7nuvxI0Ynhi9qWvySqmKjg%3d%3d",
        "NomineesFullName": "UserPc UserP;hT%2b%2bpQJRAV0Luxw5bxTKNA%3d%3d",
        "BudgetHolderFullName": "User User",
        "AwardValue": 0.00,
        "Dept": "Operation",
        "LineManagerFullName": "UserBc UserB",
        "CompanyValues": "cooo",
        "CreatedOn": "\/Date(1689751173257)\/",
        "ReviewerType": 1,
        "Status": 4,
        "ActionTime": "\/Date(1695791672000)\/",
        "TotalAwardValue": 0.00,
        "EncryptNominatorID": "ie9hQ5xelrnYlbCpQ8F2VQ%3d%3d",
        "TransactionID": "Uezzpu14sJsf1TFOJYA7LQ%3d%3d",
        "IsDirectRecognition": false
      },
      {
        "NomineeUniqueIDs": "U16",
        "NominatorFullName": "UserJc UserJ",
        "CLMID": "LKHSRBevcg5Q%2bipy057Kug%3d%3d",
        "CBHID": "0",
        "NomineesFullName": "UserPc UserP;hT%2b%2bpQJRAV0Luxw5bxTKNA%3d%3d",
        "BudgetHolderFullName": null,
        "AwardValue": 0.00,
        "Dept": "Operation",
        "LineManagerFullName": "UserBc UserB",
        "CompanyValues": "cooo",
        "CreatedOn": "\/Date(1689750985500)\/",
        "ReviewerType": 1,
        "Status": 4,
        "ActionTime": "\/Date(1695791671000)\/",
        "TotalAwardValue": 0.00,
        "EncryptNominatorID": "ie9hQ5xelrnYlbCpQ8F2VQ%3d%3d",
        "TransactionID": "AqfSFn3law6WxdIoIQNCJA%3d%3d",
        "IsDirectRecognition": false
      }
    ]
  };
  //https://live.datatables.net/wuyamacu/1/edit
  var table = $("#example").DataTable({
      serverSide: true,
      searching: false,
      ordering: false,
      responsive: true,
      dom: '<"top"i>frt<"bottom"l<"Pagination"pbB>><"clear">',
      order: [[7, "desc"]],
      buttons: [
          { extend: 'csv', exportOptions: { columns: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] } }
      ],
      ajax:"examples/ajax/data/arrays.txt",
   columns: [
    {
      data: 'NomineeUniqueIDs', 
      render: function (data, type, row) {
                                  return '<div style="max-width:200px;word-break: break-word;">' + data + '</div>';
                              }
    },
    {
      data: 'NominatorFullName',  
      render: function(data, type, row) {
                                  return '<a href="/UK_60_Dev_Admin/UserManage/UserProfile?memberId=' +
                                      row.EncryptNominatorID +
                                      '">' +
                                      data +
                                      '</a>';
                              }
    },
    { 
      data: 'NomineesFullName',   render: function(data, type, row) {
                                  var nominees = data.split(',');
                                  var htmls = [];
                                  for (var i = 0; i < nominees.length; i++) {
                                      if (nominees[i] === '') {
                                          continue;
                                      }
                                      var nominee = nominees[i].split(';');
                                      htmls.push('<a href="/UK_60_Dev_Admin/UserManage/UserProfile?memberId=' +
                                          nominee[1] +
                                          '">' +
                                          nominee[0] +
                                          '</a>');
                                  }
                                  return '<div style="max-width:200px;word-break: break-word;">' + htmls.join(',') +'</div>';
                              }
    },
    {
      data: 'Dept',     render: $.fn.dataTable.render.text()
    },
    {
    data: 'LineManagerFullName',
                              render: function(data, type, row) {
                                  if (row.LineManagerFullName === 'N/A' || row.CLMID === "0") return data;
                                  return '<a href="/UK_60_Dev_Admin/UserManage/UserProfile?memberId=' +
                                      row.CLMID +
                                      '">' +
                                      data +
                                      '</a>';
                              }
    }, 
    {
        data: 'BudgetHolderFullName',
                              render: function(data, type, row) {
                                  if (row.BudgetHolderFullName === null || row.CBHID === "0") return data;
                                  return '<a href="/UK_60_Dev_Admin/UserManage/UserProfile?memberId=' +
                                      row.CBHID +
                                      '">' +
                                      data +
                                      '</a>';
                              }
    },
    {
        data: 'CompanyValues',
                              render: $.fn.dataTable.render.text()
    },
    {
     data: 'CreatedOn',  render: function (data, type, row) {
                                  if (data == "/Date(-62135596800000)/")
                                      return "N/A";
                                  else
                                      return formatDate(data);
                              }
    }, 
    {
       data: 'ActionTime', render: function (data, type, row) {
                                  if (data == "/Date(-62135596800000)/")
                                      return "N/A";
                                  else
                                      return formatDate(data);
                              }
    }, 
    { 
      data: 'TotalAwardValue' 
    },
    {
       data: 'ReviewerType',
                              render: function(data, type, row) {
                                  var statusEnum = {
                                      1: 'Pending',
                                      2: 'Approved',
                                      3: 'Declined',
                                      4: 'Cancelled',
                                      5: 'Actioned'
                                  };
                                  var reviewEnum = {
                                      1: 'Line Manager',
                                      2: 'Budget Holder',
                                      3: 'Orphand',
                                      4: 'Admin'
                                  };
                                  if (row.Status == 4) return 'Cancelled';
                                  if (row.Status == 3) return 'Declined';
                                  if (row.IsDirectRecognition == 1) return 'Direct Recognition';
                                  return statusEnum[row.Status] + " by " + reviewEnum[row.ReviewerType];
                              }
    },
    {
    render: function(data, type, row) {
                                  return '<a class="btn btn-primary"  href="/UK_60_Dev_Admin/Nomination/GetNominationDetail?NominationID=' +
                                      row.TransactionID +
                                      '">View</a>';
                              }
    }
  ]
  });
  