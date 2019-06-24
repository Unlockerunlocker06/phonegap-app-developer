/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
		
		//initpage();
    }
};

app.initialize();

//My code is after here. run initpage to start it, and take out the page ready call at the bottom.

var passcode ='';
var newpasscode = '';
var passornew = 0; // where text is entered. 0 is passcode, 1 is newpasscode
var unlockorchange = 0;//what mode it is in. 0 is unlock, 1 is change

function appendnumber(what){
	
	if(passornew == 0)
	{
		passcode = passcode.concat(what);
		
		if(passcode.length > 6)
		{
			passcode = passcode.substring(passcode.length - 6, passcode.length);
		}
		
		$("#passcode").text(passcode);
		//console.log( "lenght:");console.log( passcode.length	 );
		//console.log( passcode );
		
	}
	else
	{
		newpasscode = newpasscode.concat(what);
		
		if(newpasscode.length > 6)
		{
			newpasscode = newpasscode.substring(newpasscode.length - 6, newpasscode.length);
		}
		
		$("#newpasscode").text(newpasscode);
		//console.log( newpasscode );
	}
}

function backspacenumber(){

	if(passornew == 0)
	{
		if(passcode.length > 0)
		{
			passcode = passcode.substring(0, passcode.length - 1);
			
			if(passcode.length == 0)
			{
				$("#passcode").html("&nbsp;");
			}
			else
			{
				$("#passcode").text(passcode);
			}
		}
	}
	else
	{
		if(newpasscode.length > 0)
		{
			newpasscode = newpasscode.substring(0, newpasscode.length - 1);
			
			if(newpasscode.length == 0)
			{
				$("#newpasscode").html("&nbsp;");
			}
			else
			{
				$("#newpasscode").text(newpasscode);
			}
		}
	}
}

function toggleunlock(){

	if(unlockorchange == 0)
	{
		//already in unlock mode
		//so do nothing.
	}
	else
	{
		unlockorchange = 0;
		
		//make sure it looks and acts right when the changer dissapears
		passornew = 0;
		
		$('#newcodedisplay').hide();
		
		
		$('.newpass').addClass('unhighlight');
		$('.newpass').removeClass('highlight');
		
		
		$('.pass').removeClass('unhighlight');
		$('.pass').addClass('highlight');
		
		
		$('#changebutton').addClass('unhighlight');
		$('#changebutton').removeClass('highlight');
		
		$('#unlockbutton').removeClass('unhighlight');
		$('#unlockbutton').addClass('highlight');
		
	}
}


function togglechange(){

	if(unlockorchange == 0)
	{
		unlockorchange = 1;
		
		$('#newcodedisplay').show();
		
		$('#unlockbutton').addClass('unhighlight');
		$('#unlockbutton').removeClass('highlight');
		
		$('#changebutton').removeClass('unhighlight');
		$('#changebutton').addClass('highlight');
		
	}
	else
	{
		//already in change code mode
		//so do nothing.
	}
}

function passclear(){
	passcode =''
	$("#passcode").html("&nbsp;");
	togglepass();
}

function newpassclear(){
	newpasscode =''
	$("#newpasscode").html("&nbsp;");
	togglenewpass();
}

function cancelall(){
	newpassclear();
	passclear();
	toggleunlock();
}

function togglenewpass(){
	if(passornew == 0)
	{
		passornew = 1;
		$('.newpass').removeClass('unhighlight');
		$('.newpass').addClass('highlight');
		
		$('.pass').removeClass('highlight');
		$('.pass').addClass('unhighlight');
	}
	else
	{
		//already in newpasscode mode
		//so do nothing.
	}
}

function togglepass(){
	if(passornew == 0)
	{
		//already in passcode mode
		//so do nothing.
	}
	else
	{
		passornew = 0;
		$('.pass').removeClass('unhighlight');
		$('.pass').addClass('highlight');
		
		$('.newpass').removeClass('highlight');
		$('.newpass').addClass('unhighlight');
	}
}

function initpage(){
    console.log( "still ready!" ); //still ready!
	//$('#newcodedisplay').hide();
	$( "#0button" ).click(function() {
		appendnumber('0');
	});
	$( "#1button" ).click(function() {
		appendnumber('1');
	});
	$( "#2button" ).click(function() {
		appendnumber('2');
	});
	$( "#3button" ).click(function() {
		appendnumber('3');
	});
	$( "#4button" ).click(function() {
		appendnumber('4');
	});
	$( "#5button" ).click(function() {
		appendnumber('5');
	});
	$( "#6button" ).click(function() {
		appendnumber('6');
	});
	$( "#7button" ).click(function() {
		appendnumber('7');
	});
	$( "#8button" ).click(function() {
		appendnumber('8');
	});
	$( "#9button" ).click(function() {
		appendnumber('9');
	});
	$( "#backspacebutton" ).click(function() {
		backspacenumber();
	});
	$( "#unlockbutton" ).click(function() {
		toggleunlock();
	});
	$( "#changebutton" ).click(function() {
		togglechange();
	});
	$( "#passclearbutton" ).click(function() {
		passclear();
	});
	$( "#newpassclearbutton" ).click(function() {
		newpassclear();
	});
	$( "#cancelbutton" ).click(function() {
		cancelall();
	});
	$( ".pass" ).click(function() {
		togglepass();
	});
	$( ".newpass" ).click(function() {
		togglenewpass();
	});
	
	$( "#connectbutton" ).click(function() {
		
		$("#connectbutton").text("CONNECTING...");
		initwatcher();
		setTimeout(step2, 3000);
	});
	
	$( "#okbutton" ).click(function() {
		//initwatcher();
		
		//TESTING here
		
		var workpasscode = passcode;
		var worknewpasscode = newpasscode;
		
		var sendingtext = '';
		
		var endcodedtext;
		
		while(workpasscode.length < 6)
		{
			workpasscode = '0' + workpasscode;
		}
		
		while(worknewpasscode.length < 6)
		{
			worknewpasscode = '0' + worknewpasscode;
		}
		
		//what mode it is in. 0 is unlock, 1 is change
		if (unlockorchange == 0)
		{
			sendingtext = 'u' + workpasscode + 'u';
			
			cUuid = "1f1e1d1c-1b1a-1918-1716-151413121110";
		}
		else
		{
			sendingtext = 'c' + workpasscode + 'c' + worknewpasscode + 'c';
			
			cUuid = "3f3e3d3c-3b3a-3938-3736-353433323130";
		}
		
		encodedtext = btoa(sendingtext);
		
		
		add = address;
		sUuid = "0f0e0d0c-0b0a-0908-0706-050403020100";
		
				
		writeble(add, sUuid, cUuid, encodedtext);
		
		$("#okbutton").text("SENT");
		setTimeout(function(){
			$("#okbutton").text("OK");
		}, 4000);
		
		//for u001234u
		goaltext = 'dTAwMTIzNHU=';
		
		//print out
		console.log('passcode: "' + workpasscode + '"\n');
		console.log('newpasscode: "' + worknewpasscode + '"\n');
		console.log('sendingtext: "' + sendingtext + '"\n');
		console.log('encodedtext: "' + encodedtext + '"\n');
		console.log('goaltext: "' + goaltext + '"\n');
		
	});
	
	$( "#debug1" ).click(function() {
		runticker();
	});
	
	$( "#debug2" ).click(function() {
		step2();
	});
	
	$( "#debug3" ).click(function() {
		valuesender();
	});
	
};

//bluetooth managment stuff

var ticker = 0;
var address;
//a debug to make sure it's working
function runticker(){

  ticker = ticker + 1;
  $("#debug1").text(ticker);
  setTimeout(runticker, 50);
}

//first step in connecting
function initwatcher(){
	initializeble();
}

function runwatcher(){
	
	add = address;
	sUuid = "0f0e0d0c-0b0a-0908-0706-050403020100";
	cUuid = "2f2e2d2c-2b2a-2928-2726-252423222120";
	readble(add, sUuid, cUuid);
	setTimeout(runwatcher, 100);
}


function step2(){

	add = address;
	
	discoverble(add);
	
	sUuid = "0f0e0d0c-0b0a-0908-0706-050403020100";
	cUuid = "2f2e2d2c-2b2a-2928-2726-252423222120";
	readble(add, sUuid, cUuid);
}

function valuesender(){
		
	add = address;
	sUuid = "0f0e0d0c-0b0a-0908-0706-050403020100";
	cUuid = "1f1e1d1c-1b1a-1918-1716-151413121110";
		
	value = "dTAwMTIzNHU=";
		
	writeble(add, sUuid, cUuid, value);
	//writeble(address, serviceUuid, characteristicUuid, value)
	//runwatcher();
}

function addDevice(add, name){
	if (name == "DA1458x"){
		stopScanble();
		
		address=add;
		
		connectble(add);
	}
	
}

//bluetooth init stuff
function initializeble()
{
  var paramsObj = {request:true};

  $('#output').append("Initialize : " + JSON.stringify(paramsObj));
  $('#output').append("<br/>");
  
  bluetoothle.initialize(initializeSuccess, initializeError, paramsObj);

  return false;
}

function initializeSuccess(obj)
{
  
  $('#output').append("Initialize Success : " + JSON.stringify(obj));
  $('#output').append("<br/>");

  if (obj.status == "enabled")
  {
    $('#output').append("Enabled");
    $('#output').append("<br/>");
  }
  else
  {
    $('#output').append("Unexpected Initialize Status");
    $('#output').append("<br/>");
  }
  
  	startScanble();
}

function initializeError(obj)
{
	$('#output').append("Initialize Error : " + JSON.stringify(obj));
	$('#output').append("<br/>");
}

//bluetooth connect stuff
function connectble(address)
{
  var paramsObj = {address:address};

  $('#output').append("Connect : " + JSON.stringify(paramsObj));
  $('#output').append("<br/>");

  bluetoothle.connect(connectSuccess, connectError, paramsObj);

  return false;
}

function connectSuccess(obj)
{

  $('#output').append("Connect Success : " + JSON.stringify(obj));
  $('#output').append("<br/>");

  if (obj.status == "connected")
  {
    
	$('#output').append("Connected");
    $('#output').append("<br/>");
  }
  else if (obj.status == "connecting")
  { 
    $('#output').append("Connecting");
    $('#output').append("<br/>");
  }
  else
  {
	$('#output').append("Unexpected Connect Status");
	$('#output').append("<br/>");
  }
}

function connectError(obj)
{
  $('#output').append("Connect Error : " + JSON.stringify(obj));
  $('#output').append("<br/>");
}

//start scanning--also has 10sec timeout AND connects to DA1458x
function startScanble()
{
  //TODO Disconnect / Close all addresses and empty

  var paramsObj = {serviceUuids:[]};

  $('#output').append("Start Scan : " + JSON.stringify(paramsObj));
  $('#output').append("<br/>");

  bluetoothle.startScan(startScanSuccess, startScanError, paramsObj);


  setTimeout(stopScanble, 10000);
  return false;
}

function startScanSuccess(obj)
{
  $('#output').append("Start Scan Success : " + JSON.stringify(obj));
  $('#output').append("<br/>");

  if (obj.status == "scanResult")
  {
    
	$('#output').append("Scan Result");
    $('#output').append("<br/>");

    addDevice(obj.address, obj.name);
  }
  else if (obj.status == "scanStarted")
  {
	$('#output').append("Scan Started");
	$('#output').append("<br/>");
  }
  else
  {
    
	$('#output').append("Unexpected Start Scan Status");
	$('#output').append("<br/>");

  }
}

function startScanError(obj)
{
  
  $('#output').append("Start Scan Error : " + JSON.stringify(obj));
  $('#output').append("<br/>");

}

//stop scan
function stopScanble()
{
  
  $('#output').append("Stop Scan");
  $('#output').append("<br/>");

  bluetoothle.stopScan(stopScanSuccess, stopScanError);

  return false;
}

function stopScanSuccess(obj)
{
  
  $('#output').append("Stop Scan Success : " + JSON.stringify(obj));
  $('#output').append("<br/>");


  if (obj.status == "scanStopped")
  {
	
	$('#output').append("Scan Stopped");
	$('#output').append("<br/>");

  }
  else
  {
    
	$('#output').append("Unexpected Stop Scan Status");
	$('#output').append("<br/>");

  }
}

function stopScanError(obj)
{
  
  $('#output').append("Stop Scan Error : " + JSON.stringify(obj));
  $('#output').append("<br/>");

}

//ble read implementation
function readble(address, serviceUuid, characteristicUuid)
{
  var paramsObj = {address:address, serviceUuid:serviceUuid, characteristicUuid:characteristicUuid};

  
  $('#output').append("Read : " + JSON.stringify(paramsObj));
  $('#output').append("<br/>");
	
  bluetoothle.read(readSuccess, readError, paramsObj);

  return false;
}

function readSuccess(obj)
{
  
  $('#output').append("Read Success : " + JSON.stringify(obj));
  $('#output').append("<br/>");

	$("#connectbutton").text("CONNECTED TO UNLOCKER");
	
  if (obj.status == "read")
  {
    var bytes = bluetoothle.encodedStringToBytes(obj.value);
    /*console.log("Read : " + bytes[0]);*/

    $("#debug3").text(bytes[0]);
	
	
	$('#output').append("Read");
    $('#output').append("<br/>");

  }
  else
  {
    
	$('#output').append("Unexpected Read Status");
    $('#output').append("<br/>");

  }
}

function readError(obj)
{
 
  $('#output').append("Read Error : " + JSON.stringify(obj));
  $('#output').append("<br/>");

}

//discovery stuff. perhaps needed for reading. it is :(
function discoverble(address)
{
  var paramsObj = {address:address};

  
  $('#output').append("Discover : " + JSON.stringify(paramsObj));
  $('#output').append("<br/>");

  bluetoothle.discover(discoverSuccess, discoverError, paramsObj);

  return false;
}

function discoverSuccess(obj)
{
  
  $('#output').append("Discover Success : " + JSON.stringify(obj));
  $('#output').append("<br/>");

  if (obj.status == "discovered")
  {
   
	$('#output').append("Discovered");
	$('#output').append("<br/>");

    var address = obj.address;

    var services = obj.services;

    for (var i = 0; i < services.length; i++)
    {
      var service = services[i];

      addService(address, service.serviceUuid);

      var characteristics = service.characteristics;

      for (var j = 0; j < characteristics.length; j++)
      {
        var characteristic = characteristics[j];

        addCharacteristic(address, service.serviceUuid, characteristic.characteristicUuid);

        var descriptors = characteristic.descriptors;

        for (var k = 0; k < descriptors.length; k++)
        {
          var descriptor = descriptors[k];

          //addDescriptor(address, service.serviceUuid, characteristic.characteristicUuid, descriptor.descriptorUuid);
        }
      }
    }
  }
  else
  {
    
	$('#output').append("Unexpected Discover Status");
	$('#output').append("<br/>");

  }
}

function discoverError(obj)
{
  
  $('#output').append("Discover Error : " + JSON.stringify(obj));
  $('#output').append("<br/>");

}

//write management
function writeble(address, serviceUuid, characteristicUuid, value)
{
  var paramsObj = {address:address, serviceUuid:serviceUuid, characteristicUuid:characteristicUuid, value:value};

  console.log("Write : " + JSON.stringify(paramsObj));
  $('#output').append
  $('#output').append("<br/>");

  bluetoothle.write(writeSuccess, writeError, paramsObj);

  return false;
}

function writeSuccess(obj)
{
  
  $('#output').append("Write Success : " + JSON.stringify(obj));
  $('#output').append("<br/>");

  if (obj.status == "written")
  {
    
	$('#output').append("Written");
	$('#output').append("<br/>");
  }
  else
  {
    
	$('#output').append("Unexpected Write Status");
	$('#output').append("<br/>");
  }
}

function writeError(obj)
{
  
  $('#output').append("Write Error : " + JSON.stringify(obj));
  $('#output').append("<br/>");
}


/*console.log replacement
$('#output').append
$('#output').append("<br/>");
*/
// A $( document ).ready() block.
//not really quite correct for a phone app, but almost enough.
$( document ).ready(initpage());


