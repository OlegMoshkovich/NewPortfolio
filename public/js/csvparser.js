var d3 = require('d3');
var reader = new FileReader();
var tableColumnsFromFirstRow;


function loadFile() {
  var file = document.querySelector("input[type=file]").files[0];

  // TODO: What's the last param that's false?
  reader.addEventListener("load", parseFile, false);
  if (file) {
    reader.readAsText(file);
  }
  document.querySelector("#text_output").innerHTML = "Output: " + JSON.stringify(data, null, 4);
}

function parseFile() {
  var data = d3.csv.parse(reader.result, function(d, i) {
    if (i === 0) {
      tableColumnsFromFirstRow = Object.keys(d);;
    }
    return d;
  });
  document.querySelector("#text_output").innerHTML = "Output: " + JSON.stringify(data, null, 4);

  // Could specify table columns to grab from dataset
  // tabulate("#full_table_output", data, ["id", "first_name", "last_name"]);

  // Or display all table columns from data present in first row
  tabulate("#table_output", data);
}

function tabulate(baseSelector, data, columns) {
  var table = d3.select(baseSelector).append("table");
  table.attr("class", "bordered");
  var thead = table.append("thead");
  var tbody = table.append("tbody");

  // Use all possible columns stored from parsing first row of data
  if (typeof columns === "undefined") {
    var columns = tableColumnsFromFirstRow;
  }

  // append the header row
  thead.append("tr")
    .selectAll("th")
    .data(columns).enter()
    .append("th")
    .text(function(column) {
      return column;
    });

  // create a row for each object in the data
  var rows = tbody.selectAll("tr")
    .data(data)
    .enter()
    .append("tr");

  // create a cell in each row for each column
  var cells = rows.selectAll("td")
    .data(function(row) {
      return columns.map(function(column) {
        return {
          column: column,
          value: row[column]
        };
      });
    })
    .enter()
    .append("td")
    .text(function(d) {
      return d.value;
    });
}
