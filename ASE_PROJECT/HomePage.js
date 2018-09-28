var myApp = angular.module("homeApp",[]);
myApp.controller("homeController", function($scope) {
    var config = {
        apiKey: "AIzaSyCkaWh1Uw7_yRPKc7W5LTUYIfn6Oe_B89I",
        authDomain: "labassign-216519.firebaseapp.com",
        databaseURL: "https://labassign-216519.firebaseio.com",
        projectId: "labassign-216519",
        storageBucket: "labassign-216519.appspot.com",
        messagingSenderId: "923382569942"
    };
    firebase.initializeApp($scope.config);
    $scope.uploadImage = function() {
        $scope.metadata = {
            "Created By": $scope.createdBy,
            //"Created Date": $scope.createdDate,
            "Contact no": $scope.createdPhno,
            "Category": $scope.createdCategory,
            "Disease": $scope.createdDisease,
            "Diagnosis Cost": $scope.createdCost,
            "Prescription": $scope.createdPrescriptions
        };
        var fileUploader = document.getElementById('fileUploader');
            var file = fileUploader.files[0];
            var storageRef = firebase.storage().ref('HealthcareImageStorage/'+file.name);
            storageRef.put(file, $scope.metadata).then(function(){
                console.log("Upload successfull");
            });
            storageRef.getMetadata().then(function(metadata){
            console.log(metadata);
            });
    }
    });
