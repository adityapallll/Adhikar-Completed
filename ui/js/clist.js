


$(document).ready(function () {
	$('.modal').modal();
	// $.ajax({
	//    url: '/getaddress',
	//    method: 'post'
	// }).done(function(){
	// 	console.log('done');
	// });


	// Web3 = require("web3")
	web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
	abi = JSON.parse('[{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"totalVotesFor","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"validCandidate","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"votesReceived","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"x","type":"bytes32"}],"name":"bytes32ToString","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"candidateList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"voteForCandidate","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"contractOwner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"inputs":[{"name":"candidateNames","type":"bytes32[]"}],"payable":false,"type":"constructor"}]')
	VotingContract = web3.eth.contract(abi);
	contractInstance = VotingContract.at('0x807422DC72322CFDFD856D54b08315478E75dFf9');
	// candidates = {"AAKARSH": "candidate-1", "ASHISH": "candidate-2", "ADITIYA": "candidate-3"}

	// window.addEventListener('load', function () {
	// 	if (typeof web3 !== 'undefined') {
	// 		console.log('Web3 Detected! ' + web3.currentProvider.constructor.name)
	// 		window.web3 = new Web3(web3.currentProvider);
	// 	} else {
	// 		console.log('No Web3 Detected... using HTTP Provider')
	// 		window.web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/<APIKEY>"));
	// 	}
	// })

	
    //check cookie
    function readCookie(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for (var i = 0; i < ca.length; i++) {
		  var c = ca[i];
		  while (c.charAt(0) == ' ') c = c.substring(1, c.length);
		  if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
		}
		return null;
	  }
  
	  var aadhaar_list = {
		"723456789123": "Meerut",
		"738253790005": "Bhandara"
	  }
  
	  var aadhaar = readCookie('aadhaar');
  
	  console.log(aadhaar);
	  var address = aadhaar_list[aadhaar];
	  console.log(address);
	  $('#loc_info').text(' ' + address)
	  $('#loc_info2').text(' ' + aadhaar)
  
	  var names_list = {
		"723456789123": "Aakarsh",
		"738253790005": "Ashish"
	  }
  
	  var names = readCookie('aadhaar');
  
	  console.log(names);
	  var name = names_list[names];
	  console.log(name);
	  $('#loc_info4').text(' ' + name)
  
	  function disable() {
		$('#vote1').addClass("disabled");
		$('#vote2').addClass("disabled");
		$('#vote3').addClass("disabled");
		$('#vote4').addClass("disabled");
  
		//logout
		// document.cookie = "show=John Doe; expires=Thu, 18 Dec 2022 12:00:00 UTC";
		// document.cookie = "aadhaar=John Doe; expires=Thu, 18 Dec 2022 12:00:00 UTC";
		window.location = './dashboard - results.html';
  
  
	  }
  
	  $('#vote1').click(function () {
		alert('Sucess: Your vote submited to Party-1');
		disable();
		$('#loc_info3').text('Vote submited to Party-1')
		contractInstance.voteForCandidate('Party-1', { from: web3.eth.accounts[0] }, function () {
		  });
	  })
  
  
	  $('#vote2').click(function () {
		alert('Sucess: Your vote submited to Party-2');
		disable();
		$('#loc_info3').text('Vote submited to Party-2')
		contractInstance.voteForCandidate('Party-2', { from: web3.eth.accounts[0] }, function () {
		  });
	  })
  
  
	  $('#vote3').click(function () {
		alert('Sucess: Your vote submited to Party-3');
		disable();
		$('#loc_info3').text('Vote submited to Party-3')
		contractInstance.voteForCandidate('Party-3', { from: web3.eth.accounts[0] }, function () {
		  });
	  })
  
  
	  $('#vote4').click(function () {
		alert('Sucess: Your vote submited to Party-4');
		disable();
		$('#loc_info3').text('Vote submited to Party-4')
		contractInstance.voteForCandidate('Party-4', { from: web3.eth.accounts[0] }, function () {
		  });
	  })
});