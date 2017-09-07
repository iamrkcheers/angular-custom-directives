var app=angular.module("app",[]);

app.directive("displayDate",function(){
    var date=new Date();
    return {
        template: "<h3>Today's date is " +date+ " </h3>",
        restrict: "E"
    }
});

app.controller("timectrl",function($scope,$interval){
    $scope.time=0;
    var br=true;
    $scope.showtime=function(){
        if(br){
        $interval(function(){
            $scope.time++;
        },1000);
        br=false;
            }
    }
});
app.directive("displayTime",function(){
    return {
    template: "<h3>Session Time is {{time}}</h3>",
    restrict: "E"
    }
});

app.controller("ctrl",function($scope){
    $scope.fn="Rishabh";
    $scope.ln="Kashyap";
});
app.directive("myName",function(){
    return {
        template: "<h3>My name is {{fn}} {{ln}} !</h3>",
        restrict: "E"
    }
});

var gpspos=0;
function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        gpspos.innerHTML="'Geo Location' property is not supported by the browser !"
    }
}
function showPosition(position){
    gpspos.innerHTML="Latitude : "+position.coords.latitude+"<br>Longitude : "+position.coords.longitude;
}
app.directive("gps",function(){
    return{
        controller:"ctrl",
        link:function(scope,element,attrs){
            alert(scope.fn);
            alert(element[0].nodeName);
            gpspos=element[0];
            getLocation();
        },
        restrict: "E"
    }
});

app.directive("mousePlay",function(){
    return{
        controller: "ctrl",
        link: function(scope,element,attrs){
            element.bind("click",function(){
                element[0].innerHTML="U clicked on me !";
            });
            element.bind("mouseenter",function(){
                element[0].innerHTML="Lord Mouse has entered !";
            });
            element.bind("mouseleave",function(){
                element[0].innerHTML="Lord Mouse has left !";
            });
        },
        restrict: "A"
    }
});

app.directive("classlevel",function(){
    return {
        controller: "ctrl",
        link: function(scope,element,attrs){
            element[0].innerHTML="This is a class level attribute, " +scope.fn+ " " +scope.ln+ "!"
        },
        restrict: "C"
    }
});

app.directive("commentlevel",function(){
    return {
        template: "<h1>This is a comment level example !</h1>",
        restrict: "M",
        replace: true
    }
});