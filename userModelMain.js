let userModelobj = new user();
userModelobj.fName="Amita";
userModelobj.lName= "JEthani";
userModelobj.age=26;

let userCommModelobj = new userCommunication();
userCommModelobj.mobileNo = 9999999999;
userCommModelobj.email_id = "a@gmail.com";

userModelobj.userCommunication = userCommModelobj;

let userAddressModelobj = new userAddress();
userAddressModelobj.flatNo = 2;
userAddressModelobj.building = "Ganesh";
userAddressModelobj.city = "Thane";
userAddressModelobj.landmark = "Talaopali";
userAddressModelobj.pincode=400601;
userAddressModelobj.street = "Khopat";
userAddressModelobj.state= "Maharashtra";
userAddressModelobj.country = "India";

userModelobj.userAddress=userAddressModelobj;

console.log(userModelobj.fName);
console.log(userModelobj.lName);
console.log(userModelobj.age);
console.log(userModelobj.userCommunication.mobileNo);
console.log(userModelobj.userCommunication.email_id);
console.log(userModelobj.userAddress.building);
console.log(userModelobj.userAddress.country);
console.log(userModelobj.userAddress.landmark);

//one to many 
let userCommunicationListModelobj = new Array();
//let userCommunicationListModelobj []

//two objects of userComm model

let userCommModelobj1 = new userCommunication();
 userCommModelobj1.email_id = "b@gmail.com";
 userCommModelobj1.mobileNo = 99999999;

let userCommModelobj2 = new userCommunication();
 userCommModelobj2.email_id="c@gmail.com";
 userCommModelobj2.mobileNo = 9869993167;

 userCommunicationListModelobj[0]=userCommModelobj1;
 userCommunicationListModelobj[1]=userCommModelobj2;

userModelobj.userCommunicationList = userCommunicationListModelobj;



