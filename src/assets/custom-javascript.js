var handleCredentialResponse = function (response) {
    console.log(response);
    
    $.ajax({
      type: 'POST',
      url: '/api/one-tap-authentication',
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      },
      contentType: 'application/JSON; charset=utf-8',
      processData: false,
      data: JSON.stringify({credential: response.credential}),
      success: function(result) {
        console.log(result, "Result");
        
        if (!result) {
          return ;
        }
        
        if (result.accessToken) {
          localStorage.setItem("accessToken", result.accessToken);
          localStorage.setItem("refreshToken", result.refreshToken);
          
        }
  
        if (result.roles) {
          localStorage.setItem("roles", JSON.stringify(result.roles));
        }
        location.reload();
      },
    });
  }