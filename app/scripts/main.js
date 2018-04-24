$(function(){

    // set up
     var $tbody = $('tbody');
    var $newItemFormInventory = $('#new-item');
    var $desc = $('#desc');
    var $serNum = $('#serial-num');
    var $loc = $('#loc');
    var $rfidnum = $('#rfidnum'); 
 
    function addTdItem(){
        $tbody.append(
            
            '<tr>' 
            + '<td>' + $serNum.val() 
            + '</td> '
            + '<td>' + $desc.val() 
            + '</td> '
            + '<td>' + $loc.val() 
            + '</td> '
            + '<td>' + $rfidnum.val() 
            + '</td> '
            + '</tr>'
        );
    }

    function clearForm(){
        $serNum.val('');
        $desc.val('');
        $loc.val('');
        $rfidnum.val('') ;
    }

    $newItemFormInventory.on('submit', function(e){
        e.preventDefault();
        
        //add serial number to td element
        // append element to new tr element
        addTdItem();
        clearForm();
    });
});





