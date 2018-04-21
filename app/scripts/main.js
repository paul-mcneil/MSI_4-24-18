$(function(){

    // set up
    var $tbody = $('tbody');
    var $newItemFormInventory = $('#newItemForm2');
    var $desc = $('#desc');
    var $serNum = $('#serial-num');
    var $loc = $('#loc');
    var $status = $('#status'); 
    
    function getCount(){
        var numItems = $('tbody').length;
        console.log(numItems);
    }
    
    function addTdItem()
    {
        $tbody.append(
            
            '<tr>' 
            + '<td>' + $serNum.val() 
            + '</td> '
            + '<td>' + $desc.val() 
            + '</td> '
            + '<td>' + $loc.val() 
            + '</td> '
            + '<td>' + $status.val() 
            + '</td> '
            + '</tr>'
        );
    }

    $newItemFormInventory.on('submit', function(e){
        e.preventDefault();
        
        //add serial number to td element
        // append element to new tr element
        addTdItem();
        console.log($serNum.val());
        console.log($desc.val())
       
        console.log($loc.val())
        console.log($status.val()); 
        
        getCount();

    });


});

// function submit(){

//     var serialInput = getElementById('serial-num').value;
//     var descriptionInput = getElementById('description').value;
//     var locationInput = getElementById('location').value;
//     var statusInput = getElementById('status').value;

//     console.log(serialInput);
//     console.log(descriptionInput);
//     console.log(locationInput);
//     console.log(statusInput);

    //createRow();
    //createTD();
    //appendTR();


    // create a new element and store it in a variable
    // var tableRow = document.createElement('tr');

    // var serialNumTD = document.createElement('td');
    // var descriptionTD = document.createElement('td');
    // var locationTD = document.createElement('td');
    // var statusTD = document.createElement('td');



    // create a text node and store it in a variable
    // var newText = document.createTextNode('new node');

    // attach the new text node to the new element
    // newEl.appendChild(newText);

    // find the position where the new element should be added
    // var position = document.getElementsByTagName('tbody')[0];

    // insert the new element into its position
    //position.appendChild(newEl);
// }






