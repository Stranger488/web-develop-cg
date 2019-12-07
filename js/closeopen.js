function closeopen( id )
    /*Для создания раскрывающихся по клику кнопочек*/
    {
     element = document.getElementById( id );
          if( element )   
             element.style.display = element.style.display == "none" ? "" : "none";   
}
   