
         $(document).ready(function(){
          $('#modal').click(function(){
            $('body').css('overflow','hidden');
           
          });
          $('.close').click(function(){
            $('body').css('overflow','scroll');
           
          });


           
          
          $('.input-field').keydown(function(event){
            if(event.keyCode == 13){
            $('#button').click();
          }
        });
          
    $('#button').click(function(){
    var x;
    x=  $('#pass').val().toLowerCase();
    console.log(x);
    var y=x.substring(1,3);
    var z=x.substring(3,5);
    var a=x.substring(0,1);
    var d=new Date();
    var n=d.getMonth();
    if(n>=6)
    {
       switch(y)
    {
      case '11':
      switch(z){
        case 'ma':
         $("#button").attachEvent("onClick", confirm("PaperGenie is having Past Year Examination Papers of Mechanical Department only(2nd year onwards). Please contribute for your Department."));

      break;

      case 'ph':
       $("#button").attachEvent("onClick", confirm("PaperGenie is having Past Year Examination Papers of Mechanical Department only(2nd year onwards). Please contribute for your Department."));
      break;

      case 'cy':
       $("#button").attachEvent("onClick", confirm("PaperGenie is having Past Year Examination Papers of Mechanical Department only(2nd year onwards). Please contribute for your Department."));
      break;
      }
      break;
      
      case '12':
      switch(z){
        case 'ma':
         $("#button").attachEvent("onClick", confirm("PaperGenie is having Past Year Examination Papers of Mechanical Department only(2nd year onwards). Please contribute for your Department."));

      break;

      case 'ph':
       $("#button").attachEvent("onClick", confirm("PaperGenie is having Past Year Examination Papers of Mechanical Department only(2nd year onwards). Please contribute for your Department."));
      break;

      case 'cy':
       $("#button").attachEvent("onClick", confirm("PaperGenie is having Past Year Examination Papers of Mechanical Department only(2nd year onwards). Please contribute for your Department."));
      break;

        case 'co':
         $("#button").attachEvent("onClick", confirm("PaperGenie is having Past Year Examination Papers of Mechanical Department only(2nd year onwards). Please contribute for your Department."));
      break;

      case 'me':
        $("#button").attachEvent("onclick", window.open("https://www.dropbox.com/s/e0t5do7zfjyvol6/btechmech7.rar?dl=1"));
      break;

      case 'ce':
       $("#button").attachEvent("onClick", confirm("PaperGenie is having Past Year Examination Papers of Mechanical Department only(2nd year onwards). Please contribute for your Department."));
      break;

      case 'ec':
       $("#button").attachEvent("onClick", confirm("PaperGenie is having Past Year Examination Papers of Mechanical Department only(2nd year onwards). Please contribute for your Department."));
      break;

      case 'ee':
       $("#button").attachEvent("onClick", confirm("PaperGenie is having Past Year Examination Papers of Mechanical Department only(2nd year onwards). Please contribute for your Department."));
      break;

      case 'ch':
       $("#button").attachEvent("onClick", confirm("PaperGenie is having Past Year Examination Papers of Mechanical Department only(2nd year onwards). Please contribute for your Department."));
      break;
      }
      break;

      case '13':
      switch(z){
        case 'ma':
         $("#button").attachEvent("onClick", confirm("PaperGenie is having Past Year Examination Papers of Mechanical Department only(2nd year onwards). Please contribute for your Department."));

      break;

      case 'ph':
       $("#button").attachEvent("onClick", confirm("PaperGenie is having Past Year Examination Papers of Mechanical Department only(2nd year onwards). Please contribute for your Department."));
      break;

      case 'cy':
       $("#button").attachEvent("onClick", confirm("PaperGenie is having Past Year Examination Papers of Mechanical Department only(2nd year onwards). Please contribute for your Department."));
      break;

        case 'co':
         $("#button").attachEvent("onClick", confirm("PaperGenie is having Past Year Examination Papers of Mechanical Department only(2nd year onwards). Please contribute for your Department."));
      break;

      case 'me':
      $("#button").attachEvent("onclick", window.open("https://www.dropbox.com/s/jgu4sg66gh35az7/btechmech5.rar?dl=1"));
      break;

      case 'ce':
       $("#button").attachEvent("onClick", confirm("PaperGenie is having Past Year Examination Papers of Mechanical Department only(2nd year onwards). Please contribute for your Department."));
      break;

      case 'ec':
       $("#button").attachEvent("onClick", confirm("PaperGenie is having Past Year Examination Papers of Mechanical Department only(2nd year onwards). Please contribute for your Department."));
      break;

      case 'ee':
       $("#button").attachEvent("onClick", confirm("PaperGenie is having Past Year Examination Papers of Mechanical Department only(2nd year onwards). Please contribute for your Department."));
      break;
      
      case 'ch':
       $("#button").attachEvent("onClick", confirm("PaperGenie is having Past Year Examination Papers of Mechanical Department only(2nd year onwards). Please contribute for your Department."));
      break;
      }
      break;

      case '14':
      switch(z){
        case 'ma':
        $("#button").attachEvent("onClick", confirm("PaperGenie is having Past Year Examination Papers of Mechanical Department only(2nd year onwards). Please contribute for your Department."));

      break;

      case 'ph':
       $("#button").attachEvent("onClick", confirm("PaperGenie is having Past Year Examination Papers of Mechanical Department only(2nd year onwards). Please contribute for your Department."));
      break;

      case 'cy':
       $("#button").attachEvent("onClick", confirm("PaperGenie is having Past Year Examination Papers of Mechanical Department only(2nd year onwards). Please contribute for your Department."));
      break;

        case 'co':
      $("#button").attachEvent("onClick", window.open("https://www.dropbox.com/s/zux3jnccfmp46vb/comps2.zip?dl=1"));


      break;

      case 'me':
        $("#button").attachEvent("onClick", window.open("https://www.dropbox.com/s/krsh09m9kruikzy/mech2.zip?dl=1"));
      break;

      case 'ce':
        $("#button").attachEvent("onClick", window.open("https://www.dropbox.com/s/ja9t3ntustl7izh/civil2.zip?dl=1"));
      break;

      case 'ec':
       $("#button").attachEvent("onClick", window.open("https://www.dropbox.com/s/upf867s4uwj6joi/tronix2.zip?dl=1"));
      break;

      case 'ee':
       $("#button").attachEvent("onClick", window.open("https://www.dropbox.com/s/mkfvcup76j2q86u/electr2.zip?dl=1"));
      break;
      
      case 'ch':
       $("#button").attachEvent("onClick", window.open("https://www.dropbox.com/s/xepfa6gbfwtrp9g/chem2.zip?dl=1"));
      break;
      }
      break;

      case '15':
      switch(a){
        case 'u':
         $("#button").attachEvent("onclick", window.open("https://www.dropbox.com/s/ju3y523uza6qjw0/first%20year.zip?dl=1"));
        break;

        case 'i':
         $("#button").attachEvent("onClick", confirm("PaperGenie is having Past Year Examination Papers of Mechanical Department only(2nd year onwards). Please contribute for your Department."));
        break;
      }
      break;


    }; 
    }
  else
  {
     switch(y)
    {
      case '11':
      switch(z){
        case 'ma':
        $("#button").attachEvent("onclick", window.open("https://www.facebook.com"));

      break;

      case 'ph':
      break;

      case 'cy':
      break;
      }
      break;
      
      case '12':
      switch(z){
        case 'ma':
        $("#button").attachEvent("onclick", window.open("https://www.facebook.com"));

      break;

      case 'ph':
      break;

      case 'cy':
      break;

        case 'co':
      break;

      case 'me':
      break;

      case 'ce':
      break;

      case 'ec':
      break;

      case 'ee':
      break;

      case 'ch':
      break;
      }
      break;

      case '13':
      switch(z){
        case 'ma':
        $("#button").attachEvent("onclick", window.open("https://www.facebook.com"));

      break;

      case 'ph':
      break;

      case 'cy':
      break;

        case 'co':
      break;

      case 'me':
      break;

      case 'ce':
      break;

      case 'ec':
      break;

      case 'ee':
      break;
      
      case 'ch':
      break;
      }
      break;

      case '14':
      switch(z){
        case 'ma':
        $("#button").attachEvent("onclick", window.open("https://www.facebook.com"));

      break;

      case 'ph':
      break;

      case 'cy':
      break;

        case 'co':
     $("#button").attachEvent("onclick", window.open("https://www.google.com"));


      break;

      case 'me':
     
      break;

      case 'ce':
      break;

      case 'ec':
      break;

      case 'ee':
      break;
      
      case 'ch':
      break;
      }
      break;

      case '15':
      switch(a){
        case 'u':
        break;

        case 'i':
        break;
      }
      break;


    }; 
  }
  });


   
});
