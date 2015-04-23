$(function(){
    var loadGoogleCode = function() {
        $('pre').removeClass('prettyprinted');
        ACMS.Library.googleCodePrettifyPost();
    };
    var main = new Moon.View({
        id:"prettyPrint",
        data:{item:[]},
    });
    var group = new Moon.View({
        id:"group",
        data:{
            kind:"group",
            type:"",
            title:"",
            path:"path",
            option:[{value:"",label:""}],
            openValidator:false,
            validator:[{option:"",value:"",message:""}],
        },
        method:{
            refresh:function(){
                this.removeData(["title","name","path","normal","normalSize","tiny","tinySize","large","largeSize","square","squareSize","alt","openValidator"]);
                this.data.option = [{value:"",label:""}];
                this.data.path = "path";
                this.data.validator = [{option:"",value:"",message:""}];
                this.update();
            },
            addOption:function(){
                this.data.option.push({value:"",label:""});
                this.update();
            },
            removeOption:function(string){
                this.removeDataByString(string);
                this.update();
            },
            toggleValidator:function(){
                this.update();
            },
            addValidator:function(){
                this.data.validator.push({option:"",value:"",message:""});
                this.update();
            },
            removeValidator:function(string){
                this.removeDataByString(string);
                this.update();
            }
        }
    });
    var generator = new Moon.View({
        id:"generator",
        data:{
            kind:"generator",
            type:"",
            title:"",
            path:"path",
            option:[{value:"",label:""}],
            openValidator:false,
            validator:[{option:"",value:"",message:""}],
            group:[]
        },
        method:{
            submit:function(){
                main.data.item.push(this.getData());
                main.update("text");
                main.saveData("customField");
                loadGoogleCode();
            },
            refresh:function(){
                this.removeData(["title","name","path","normal","normalSize","imagename","tiny","tinySize","large","largeSize","square","squareSize","alt","openValidator"]);
                this.data.option = [{value:"",label:""}];
                this.data.validator = [{option:"",value:"",message:""}];
                this.data.group = [];
                this.update();
                if(this.data.type == "group"){
                    group.update();
                }
            },
            historyClear:function(){
                main.data = {item:[]};
                main.update("text");
                main.saveData("customField");
            },
            addOption:group.method.addOption,
            removeOption:group.method.removeOption,
            toggleValidator:group.method.toggleValidator,
            addValidator:group.method.addValidator,
            removeValidator:group.method.removeValidator,
            addItem:function(){
                this.data.group.push(group.getData());
                main.data.item.pop();
                main.data.item.push(this.getData());
                main.update("text");
                main.saveData("customField");
                loadGoogleCode();
            },
            clearItems:function(){
                this.data.group = [];
                main.data.item.pop();
                main.data.item.push(this.getData());
                main.update("text");
                main.saveData("customField");
                loadGoogleCode();
            }
        }
    });
    generator.update();
    main.loadData("customField");
    main.update("text");
    loadGoogleCode();
    $('[href="#idA"]').click(function(){
        main.update("text");
        loadGoogleCode();
    });
});