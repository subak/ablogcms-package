$(function(){
    var loadGoogleCode = function() {
        $('pre').removeClass('prettyprinted');
        ACMS.Library.googleCodePrettifyPost();
    };
	var main = new Moon.View({
		id:"prettyPrintUnit",
		data:{item:[]}
	});
	var generator = new Moon.View({
        id:"generatorUnit",
        data:{
            kind:"generator",
            type:"",
            title:"",
            path:"path",
            option:[{value:"",label:""}],
            openValidator:false,
            validator:[{option:"",value:"",message:""}],
        },
        method:{
        	historyClear:function(){
                main.data = {item:[]};
                main.update("text");
                main.saveData("customUnit");
                loadGoogleCode();
            },
            addOption:function(){
                this.data.option.push({value:"",label:""});
                this.update();
            },
            removeOption:function(string){
                this.removeDataByString(string);
                this.update();
            },
            refresh:function(){
                this.removeData(["title","name","path","normal","normalSize","imagename","tiny","tinySize","large","largeSize","square","squareSize","alt","openValidator"]);
                this.data.option = [{value:"",label:""}];
                this.data.path = "path";
                this.data.validator = [{option:"",value:"",message:""}];
                this.update();
            },
            submit:function(){
            	main.data.item.push(this.getData());
                main.update("text");
                main.saveData("customUnit");
                loadGoogleCode();
            }
        }
    });
	generator.update();
    main.loadData("customUnit"); 
	$('[href="#idB"]').click(function(){
        main.update("text");
    	loadGoogleCode();
    });
});