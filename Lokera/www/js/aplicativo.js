
$.ajax({
      url : "http://sgs.localhost/ws/servico.php?acao=Listar",
      type: "GET",
      dataType: "json",
      data : {
                  var1 : v1,
                  var2 : v2
              },
      crossDomain: true,
      success: function(data, textStatus, jqXHR)
      {
          alert('data='+data+ '  textStatus = '+textStatus+' jqXHR readyState='+jqXHR.readyState);
      },
      error: function (jqXHR, textStatus, errorThrown)
      {
          alert(errorThrown);
      }
  });