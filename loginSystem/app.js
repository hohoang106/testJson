var accountApi = 'http://localhost:3000/account';
fetch(accountApi)
.then(function(respon){
  return respon.json();
})
.then(function(accounts){

  console.log(accounts);
})
