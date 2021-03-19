//our library is for greeting users
(function abc(global,$){       //safe code as it keeps in one execution context

    var Greetr = function(firstname,lastname,language){
        return new Greetr.init(firstname,lastname,language);
    }

    var supportedLangs = ['en','es'];  //never exposed anywhere but accessible from below function because of closures and lexical

    var greetings={     //not exposed to outsdide world
        en:'Hello',
        es:'Hola'
    };

    var formalGreetings = {
        en:'Greetings',
        es:'Saludos'
    };

    var logMessages = {
        en:'logged in',
        es:'Inicio Sesion'
    };




    //any obj build here will have access to any methods and properties created heloa and any methods in heree that this var will point to thee objeect that was created
    Greetr.prototype = {     //i put methods inside my obj thats returned from greeter

        //*adding properties and meethods in the object liteeral syntax
        fullname: function(){       //object literal syntax to create a method
            return this.firstname + ' ' +this.lastname;
        },
        validate:function(){
            if(supportedLangs.indexOf(this.language) === -1){
                throw "Invalid Language";
            }
        },
        greeting: function(){
            return  greetings[this.language]  + ' ' + this.firstname + '!';
        },
        formalGreeting: function(){
            return formalGreetings[this.language]  + ', '+this.fullname();
        },
        greet: function(formal){
            var msg;

            //if undefined or null it will be coerced to 'falsee'
            if(formal){
                msg = this.formalGreeting();
            } 
            else{
                msg = this.greeting();
            }

            if(console){
                console.log(msg);
            }

            //'this' refers to the calling objeect at execution time 
            //makes the method chainable
            return this;   //it is chainable now
        },
        log: function(){
            if(console){        //console is object
                console.log(logMessages[this.language]+': '+this.fullname());
            }
            return this;        //chainable
        },

        setLang: function(lang){
            this.language = lang;
            this.validate();
            return this;
        },
        htmlGreeting: function(selector,formal){
            if(!$){
                throw 'Jquery not loaded';
            }
            if(!selector){
                throw 'Missing Jquery Selector';
            }

            var msg;
            if(formal){
                msg = this.formalGreeting();
            }
            else{
                msg = this.greeting();
            }
            $(selector).html(msg);
            return this;
        }
    }; 



    Greetr.init = function(firstname,lastname,language){  //i wrote it here by the time we call greeter this is actually run and setup
        var self = this;
        self.firstname = firstname || '';
        self.lastname = lastname || '';
        self.language = language || 'en';
        self.validate();
    }
    //below makes sure that all those objects creeated in function has access to all  Greetr.prototype methods and properties
    //*any object created from Greeter.init function should point at Greetr.prototype in its prototype chain
    Greetr.init.prototype = Greetr.prototype;   //all my objects will be pointing here  /
    
    //now i want to expose my Greetr to the outside world and attach it to my global object so i can call it from anywhere
    global.Greetr = global.G$ = Greetr;  //on global object these two name will point to above var greeter value

}(window,jQuery));

