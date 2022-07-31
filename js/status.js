// checking user active status //

function online_active(){

    window.alert('YOU ARE ONLINE')

  }

  function offline_active(){
     
     window.alert('YOU ARE OFFLINE')

  }

  function check_both_statements(){

     if( window.navigator.onLine = true){
        online_active()
     }
    else{
        offline_active()
    }
  }
  
  setTimeout(
     (check_both_statements),
     7000
  )

  // end active statements //