Application.$controller("CuttingFabReceivedPageController", ["$scope", function($scope) {
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
        $scope.Widgets.top_nav1.di = false;
        // if ($scope.Variables.pOrdnum === undefined) {

        // }
    };


    $scope.btnQueryClick = function($event, $isolateScope) {
        var m_Ordnum = $scope.Widgets.form1.formWidgets.pOrdnum.datavalue;
        var m_Dyejob = $scope.Widgets.form1.formWidgets.pDyejob.datavalue;
        var m_Cutsts = $scope.Widgets.form1.formWidgets.pCutsts.datavalue;
        if ((m_Ordnum == "" || m_Ordnum == null || m_Ordnum == undefined) && (m_Dyejob == "" || m_Dyejob == null || m_Dyejob == undefined)) {
            $scope.Variables.notifMsg.setMessage("Order or Dyejob should be entered to query");
            $scope.Variables.notifMsg.notify();
            return false;
        } else {
            if (m_Ordnum == null) {
                m_Ordnum = '%';
            } else {
                m_Ordnum = $scope.Widgets.form1.formWidgets.pOrdnum.datavalue;
            }
            if (m_Dyejob == null) {
                m_Dyejob = '%';
            } else {
                m_Dyejob = $scope.Widgets.form1.formWidgets.pDyejob.datavalue;
            }
            if (m_Cutsts == null) {
                m_Cutsts = '%';
            } else {
                m_Cutsts = $scope.Widgets.form1.formWidgets.pCutsts.datavalue;
            }
        }
        $scope.Variables.svProcCU1000PK0_QryCUFabReceived.invoke();
    };


    $scope.btnResetFilterClick = function($event, $isolateScope) {
        $scope.Variables.svProcCU1000PK0_QryCUFabReceived.dataSet = null;
        $scope.Widgets.form1.formWidgets.pOrdnum.datavalue = null;
        $scope.Widgets.form1.formWidgets.pDyejob.datavalue = null;
        $scope.Widgets.form1.formWidgets.pCutsts.datavalue = null;
    };

    $scope.svProcCU1000PK0_UpdFabReceivedonSuccess = function(variable, data) {
        $scope.Widgets.grid1.refreshData();
        $scope.Widgets.dialogUpdate.close();
        $scope.Variables.notifMsg.setAlertType("success");
        $scope.Variables.notifMsg.setMessage("Successfully updated");
        $scope.Variables.notifMsg.notify();
    };


    $scope.pOrdnumChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.pOrdnum.datavalue = newVal.toUpperCase();
    };


    $scope.pDyejobChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.pDyejob.datavalue = newVal.toUpperCase();
    };




}]);


Application.$controller("grid1Controller", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.updateColumnAction = function(selectedItemData) {
            if ($scope.Widgets.grid1.selecteditem.ordnum == undefined) {
                $scope.Variables.notifMsg.setAlertType("error");
                $scope.Variables.notifMsg.setMessage("Select one row first");
                $scope.Variables.notifMsg.notify();

            } else {
                $scope.Widgets.dialogUpdate.open();
            }
        };

    }
]);

Application.$controller("dialogUpdateController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.button5_1Click = function($event, $isolateScope) {
            if ($scope.Widgets.selectNewCutSts.datavalue == null && $scope.Widgets.txtNewKgsWgh.datavalue == null && $scope.Widgets.txtNewRemarks.datavalue == null) {
                $scope.Variables.notifMsg.setMessage("Enter Cut Status or Kgs Wgh or Remarks first.");
                $scope.Variables.notifMsg.notify();
                return false;
            } else {
                $scope.Variables.svProcCU1000PK0_UpdFabReceived.invoke();
            }
        };

    }
]);