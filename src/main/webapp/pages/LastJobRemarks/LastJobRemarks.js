Application.$controller("LastJobRemarksPageController", ["$scope", function($scope) {
    "use strict";

    /* perform any action on widgets/variables within this block */
    $scope.onPageReady = function() {
        /*
         * variables can be accessed through '$scope.Variables' property here
         * e.g. to get dataSet in a staticVariable named 'loggedInUser' use following script
         * $scope.Variables.loggedInUser.getData()
         *
         * widgets can be accessed through '$scope.Widgets' property here
         * e.g. to get value of text widget named 'username' use following script
         * '$scope.Widgets.username.datavalue'
         */
        //$scope.Widgets.containerCutRem.close();
        if (!($scope.pageParams.pParam1 === undefined || $scope.pageParams.pParam1 === null)) {

            $scope.pageParams.pOrdnum = cgenPageParamDecode($scope.pageParams.pParam1, 'pOrdnum');

            $scope.Widgets.form1.formWidgets.pORDNUM.datavalue = $scope.pageParams.pOrdnum;


            if (($scope.Widgets.form1.formWidgets.ordnum.datavalue !== null)) {
                $scope.Variables.svProcCU1000PK0_LastJobRemarks.invoke();
            }

        }
    };

    $scope.button3Click = function($event, $isolateScope) {
        var m_ordnum = $scope.Widgets.form1.formWidgets.pORDNUM.datavalue;
        if (m_ordnum === "" || m_ordnum === null || m_ordnum === undefined) {
            $scope.Variables.notifMsg.setMessage("Order number is required to query");
            $scope.Variables.notifMsg.notify();
            return false;
        } else {
            if (m_ordnum === null) {
                m_ordnum = '%';
            } else {
                m_ordnum = $scope.Widgets.form1.formWidgets.pORDNUM.datavalue;
            }
        }
        $scope.Variables.svProcCU1000PK0_LastJobRemarks.invoke();
    };

    $scope.button1Click = function($event, $isolateScope) {
        $scope.Variables.svProcCU1000PK0_LastJobRemarks.dataSet = null;
    };

    $scope.btnSaveClick = function($event, $isolateScope) {
        $scope.Variables.svProcCU1000PK0_UpdRemarks.invoke();
    };

    $scope.svProcCU1000PK0_UpdRemarksonSuccess = function(variable, data) {

        $scope.Variables.svCU100PK0_GetLastRemDet.invoke();

        $scope.Variables.notifMsg.setMessage("Records have been saved successfully.");
        $scope.Variables.notifMsg.notify();
    };

    $scope.svProcCU1000PK0_UpdRemarksonError = function(variable, data) {
        $scope.Variables.notifMsg.setMessage(data);
        $scope.Variables.notifMsg.notify();

        return (false);
    };


    $scope.txtCUTLCNChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.txtCUTLCN.datavalue = newVal.toUpperCase();
    };





    $scope.svProcCU1000PK0_LastJobRemarksDetailonSuccess = function(variable, data) {
        debugger;
        if (data.cutexc == 'Y') {
            $scope.Widgets.txtCUTREM.disabled = true;
            $scope.Widgets.chkBoxCUTEXC.disabled = true;
        } else {
            $scope.Widgets.txtCUTREM.disabled = false;
            $scope.Widgets.chkBoxCUTEXC.disabled = false;
        }
        //Variables.svProcCU1000PK0_LastJobRemarksDetail.dataSet.poutDetailBlock[$i].cutexc ='Y'
    };

}]);

Application.$controller("grid1Controller", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("dialog1Controller", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);