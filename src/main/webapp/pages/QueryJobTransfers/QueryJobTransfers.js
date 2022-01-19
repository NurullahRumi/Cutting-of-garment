Application.$controller("QueryJobTransfersPageController", ["$scope", function($scope) {
    "use strict";

    /* perform any action on widgets/variables within this block */
    /*
    PROGRAM version remarks
    Rumi  - create program
    cn04 20.02.2018 Testing prior to deployment

    */



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
        if ($scope.pageParams.pOrdnum === undefined) {
            return false;
        } else {
            $scope.Widgets.form1.submit();
        }

    };


    $scope.button3Click = function($event, $isolateScope) {
        var s_Ordnum = $scope.Widgets.form1.formWidgets.pSORDNUM.datavalue;
        var s_Dyejob = $scope.Widgets.form1.formWidgets.pSDYEJOB.datavalue;
        var d_Ordnum = $scope.Widgets.form1.formWidgets.pDORDNUM.datavalue;
        var d_Dyejob = $scope.Widgets.form1.formWidgets.pDDYEJOB.datavalue;
        if ((s_Ordnum === "" || s_Ordnum === null || s_Ordnum === undefined) && (s_Dyejob === "" || s_Dyejob === null || s_Dyejob === undefined) && (d_Ordnum === "" || d_Ordnum === null || d_Ordnum === undefined) && (d_Dyejob === "" || d_Dyejob === null || d_Dyejob === undefined)) {
            $scope.Variables.notifMsg.setMessage("Enter source order or source dyejob or destination order or destination dyejob to query");
            $scope.Variables.notifMsg.notify();
            return false;
        } else {
            if (s_Ordnum === null) {
                s_Ordnum = '%';
            } else {
                s_Ordnum = $scope.Widgets.form1.formWidgets.pSORDNUM.datavalue;
            }
            if (s_Dyejob === null) {
                s_Dyejob = '%';
            } else {
                s_Dyejob = $scope.Widgets.form1.formWidgets.pSDYEJOB.datavalue;
            }
            if (d_Ordnum === null) {
                d_Ordnum = '%';
            } else {
                d_Ordnum = $scope.Widgets.form1.formWidgets.pDORDNUM.datavalue;
            }
            if (d_Dyejob === null) {
                d_Dyejob = '%';
            } else {
                d_Dyejob = $scope.Widgets.form1.formWidgets.pDDYEJOB.datavalue;
            }
        }
        $scope.Variables.svProcCU210PK0_QueryJobTransfers.invoke();
    };


    $scope.button1Click = function($event, $isolateScope) {
        $scope.Variables.svProcCU210PK0_QueryJobTransfers.dataSet = null;
    };


    $scope.svProcCU210PK0_UpdCqReamrksonSuccess = function(variable, data) {


        $scope.Widgets.dialogUpdRmk.close();
        $scope.Widgets.grid1.refreshData();

        $scope.Variables.notifMsg.setMessage("Remark has been updated successfully.");
        $scope.Variables.notifMsg.notify();
    };


    $scope.svProcCU210PK0_CancelCU_TransferonSuccess = function(variable, data) {


        $scope.Widgets.dialogReason.close();
        $scope.Widgets.grid1.refreshData();

        $scope.Variables.notifMsg.setMessage("Transfer has been cancelled successfully.");
        $scope.Variables.notifMsg.notify();
    };

    $scope.pSORDNUMChange = function($event, $isolateScope, newVal, oldVal) {
        // debugger;
        $scope.Widgets.form1.formWidgets.pSORDNUM.datavalue = newVal.toUpperCase();
    };


    $scope.pSDYEJOBChange = function($event, $isolateScope, newVal, oldVal) {
        // debugger;
        $scope.Widgets.form1.formWidgets.pSDYEJOB.datavalue = newVal.toUpperCase();
    };


    $scope.pDORDNUMChange = function($event, $isolateScope, newVal, oldVal) {
        // debugger;
        $scope.Widgets.form1.formWidgets.pDORDNUM.datavalue = newVal.toUpperCase();
    };


    $scope.pDDYEJOBChange = function($event, $isolateScope, newVal, oldVal) {
        // debugger;
        $scope.Widgets.form1.formWidgets.pDDYEJOB.datavalue = newVal.toUpperCase();
    };

}]);


Application.$controller("grid1Controller", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.ShowHide = function(pTrftyp, pStatus, pCuntRow) {
            //  debugger;
            var show = true;
            if (pTrftyp == "C" || pStatus > 0 || pCuntRow > 0) {
                show = false;
            }
            return show;
        };
        //----------------------------------------------------------------------------------------------------------------------------
        /* button click on update CQ remarks*/
        $scope.customFieldAction = function(selectedItemData) {
            //   debugger;
            $scope.Widgets.dialogUpdRmk.open();
        };
        //-----------------------------------------------------------------------------------------------------------------------------
        $scope.customField1Action = function(selectedItemData) {

            $scope.Widgets.dialogReason.open();
        };

    }
]);

Application.$controller("dialogUpdRmkController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.button4Click = function($event, $isolateScope) {
            //debugger;
            if ($scope.Widgets.txtUpdrmk.datavalue === null || $scope.Widgets.txtUpdrmk.datavalue === undefined) {
                // alert("Missing Information");
                $scope.Variables.notifMsg.setMessage("Missing Information.");
                $scope.Variables.notifMsg.notify();
                return false;
            } else {
                $scope.Variables.svProcCU210PK0_UpdCqReamrks.invoke();
            }
        };

    }
]);

Application.$controller("dialogReasonController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.button7Click = function($event, $isolateScope) {
            //    debugger;
            if ($scope.Widgets.txtReason.datavalue === undefined || $scope.Widgets.txtReason.datavaluee === null) {
                // alert("Please specify the reason");
                $scope.Variables.notifMsg.setMessage("Please specify the reason");
                $scope.Variables.notifMsg.notify();
                return false;
            } else {
                $scope.Variables.svProcCU210PK0_CancelCU_Transfer.invoke();
            }
        };

    }
]);