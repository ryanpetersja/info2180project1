// JavaScript File

//Address Book
var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}

/*Create a search function
then call it passing "Jones"*/

var search = function(lastName)
{
    var contactsLength = contacts.length;
    
    for (var i = 0; i < contactsLength; i++)
    {
        if (lastName === contacts[i].lastName)
        {
            printPerson(contacts[i])
        }
    }
}

search("Jones");

var add = function(firstName, lastName, email, phoneNumber)
{
    var addition = { 
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber
    }
    
    contacts[contacts.length] = addition
}

add("Ryan", "Blade", "Ryankkkkk@kdk.com", "(879) 999 0000");

list();

//Cash Register

function StaffMember(name,discountPercent){
    this.name = name;
    this.discountPercent = discountPercent;
}

var sally = new StaffMember("Sally",5);
var bob = new StaffMember("Bob",10);

// Create yourself again as 'me' with a staff discount of 20%


var cashRegister = {
    total:0,
    lastTransactionAmount: 0,
    add: function(itemCost){
        this.total += (itemCost || 0);
        this.lastTransactionAmount = itemCost;
    },
    scan: function(item,quantity){
        switch (item){
        case "eggs": 
            this.add(0.98 * quantity); 
            break;
            
        case "milk": 
            this.add(1.23 * quantity); 
            break;
        
        case "magazine": 
            this.add(4.99 * quantity); 
            break;
        
        case "chocolate": 
            this.add(0.45 * quantity); 
            break;
            
        }
        return true;
    },
    voidLastTransaction : function(){
        this.total -= this.lastTransactionAmount;
        this.lastTransactionAmount = 0;
    },
    // Create a new method applyStaffDiscount here
    
    
};

cashRegister.scan('eggs', 1);
cashRegister.scan('milk', 1);
cashRegister.scan('magazine', 3);
// Apply your staff  discount by passing the 'me' object 
// to applyStaffDiscount


// Show the total bill
console.log('Your bill is '+cashRegister.total.toFixed(2));