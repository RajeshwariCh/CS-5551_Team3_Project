var ContentApp = angular.module("contentApp",[]);
ContentApp.controller("contentController", function ($scope, $sce) {

    $scope.config = {
        apiKey: "AIzaSyDR-pOQU8in49ymSlBAOkElvuBizepLYnY",
        authDomain: "healthcare-cdms.firebaseapp.com",
        databaseURL: "https://healthcare-cdms.firebaseio.com",
        projectId: "healthcare-cdms",
        storageBucket: "healthcare-cdms.appspot.com",
        messagingSenderId: "478995691799"
    };
    firebase.initializeApp($scope.config);
    firebase.database().ref().once('value', function(snapshot){
        let resData = snapshot.val();
        let keys = Object.keys(snapshot.val());
        $scope.html = "";
        console.log(keys.length);
        for(var i =0;i<keys.length;i++) {
            var data1= [resData[keys[i]].medData];
            $scope.html = $scope.html + "<div class='imageBlock'><img src='" + resData[keys[i]].imageURL + "' class='imgStyle'>" +
                "<div id='demo' class='infoStyle text-center'><h3>Prescription Information:</h3><img src='https://barcode.tec-it.com/barcode.ashx?data=" + data1[i] +"&code=QRCode&dpi=96&dataseparator=' alt='Barcode Generator TEC-IT'/></div></div>";

            document.getElementById('myHTML').innerHTML = $scope.html;
        }
    });
});

