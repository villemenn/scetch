function createTable(inRows, inCols) {
       var inRows = document.getElementById('height').value;
       var inCols = document.getElementById('length').value;

       var body = document.getElementsByTagName("body")[0];

       var tbl = document.createElement("table");
       var tblBody = document.createElement("tbody");

       for (var i = 0; i < inRows; i++) {
           var row = document.createElement("tr");

           for (var j = 0; j < inCols; j++) {
               var cell = document.createElement("td");
               row.appendChild(cell);
           }

           tblBody.appendChild(row);
       }

       tbl.appendChild(tblBody);
       // appends <table> into <body>
       body.appendChild(tbl);

       $(tbl).on('mouseenter', 'td', function () {
           $(this).addClass('black');
       });

       //$(tbl).on('mouseleave', 'td', function () {
           //$(this).removeClass('black');
       //});
        

   }

function removeTable(input){
  $("table").remove();
}
  


