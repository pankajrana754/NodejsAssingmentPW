// important command of operating system\
var os=require('os');
// to check cpu architecture 
console.log("CPU architecture is:"+os.arch())

// to check free system memory in byte;
console.log("Free memory is:"+os.freemem())

// to check total memory in operating system
console.log("total memory in os is:"+os.totalmem())

// to check list of network interface ;
console.log("list of network :"+ os.networkInterfaces())
// for the list we can use like this 
//console.log("list of network is "+JSON.stringify(os.networkInterfaces()));

// to check default direcotry for tempary files 
console.log("os default directry "+ os.tmpdir());

// to check endianness of system 
console.log("Endianness of system :"+os.endianness())

// to check the hostname of the system 
console.log("Hostnam of the system:  "+os.hostname())

// check the operating system name 
console.log("Operating system name is:"+os.type())

// to check the platform of os 
console.log(" platform of os  :  "+os.platform())


// to check the os release of os 
console.log(" os release : "+os.release())