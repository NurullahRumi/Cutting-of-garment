Application.$controller("QueryCuttingJobsPageController", ["$scope", function($scope) {
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


        if (!($scope.pageParams.pParam1 === undefined || $scope.pageParams.pParam1 === null)) {

            $scope.pageParams.pOrdnum = cgenPageParamDecode($scope.pageParams.pParam1, 'pOrdnum');
            $scope.pageParams.pDyejob = cgenPageParamDecode($scope.pageParams.pParam1, 'pDyejob');
            if ($scope.Widgets.form1.formWidgets.ordnum.datavalue !== null) {
                $scope.Widgets.form1.formWidgets.ordnum.datavalue = $scope.pageParams.pOrdnum;
            }
            if ($scope.Widgets.form1.formWidgets.dyejob.datavalue !== null) {
                $scope.Widgets.form1.formWidgets.dyejob.datavalue = $scope.pageParams.pDyejob;
            }
            if (($scope.Widgets.form1.formWidgets.ordnum.datavalue !== null || $scope.Widgets.form1.formWidgets.dyejob.datavalue !== null)) {

                //$scope.Variables.svCu1000pk0QryJobcutOrder.invoke();
                $scope.Widgets.form1.submit();
            }

        } else {
            if ($scope.pageParams.pOrdnum === undefined) {
                return false;
            } else {
                $scope.Widgets.form1.formWidgets.ordnum.datavalue = $scope.pageParams.pOrdnum;
                $scope.Widgets.form1.submit();
            }
        }


    };

    $scope.button5_1Click = function($event, $isolateScope) {

        var m_Ordnum = $scope.Widgets.form1.formWidgets.ordnum.datavalue;
        var m_Dyejob = $scope.Widgets.form1.formWidgets.dyejob.datavalue;


        if ((m_Ordnum === "" || m_Ordnum === null || m_Ordnum === undefined) && (m_Dyejob === "" || m_Dyejob === null || m_Dyejob === undefined)) {
            $scope.Variables.notifMsg.setMessage("Either Order Number or Dyejob should be entered to query");
            $scope.Variables.notifMsg.notify();
            return false;
        } else {
            $scope.Variables.svCu1000pk0QryJobcutOrder.invoke();

        }
    };


    $scope.button6Click = function($event, $isolateScope) {

        $scope.Variables.svCu1000pk0QryJobcutOrder.dataSet = null;
        $scope.Variables.svProcCU1000PK0_QueryJobscut.dataSet = null;
        $scope.Widgets.form1.formWidgets.ordnum.datavalue = null;
        $scope.Widgets.form1.formWidgets.fabseq.datavalue = null;
        $scope.Widgets.form1.formWidgets.dyejob.datavalue = null;

    };


    $scope.ordnumChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.form1.formWidgets.ordnum.datavalue = newVal.toUpperCase();
    };


    $scope.dyejobChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.form1.formWidgets.dyejob.datavalue = newVal.toUpperCase();
    };

    $scope.svCu1000pk0QryJobcutOrderonError = function(variable, data) {

        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            return false;
        }
    };

    $scope.expression = function(link) {
        var url = cgenPageParamEncode(link);
        if (url.indexOf("?pParam1=") >= 0) {
            url = url.replace("?pParam1=", "pParam1=");
        }
        return url;
    };



    $scope.svQryReturnCallPageonSuccess = function(variable, data) {
        if (data.progwmurl !== undefined && data.progwmurl !== "" && data.progwmurl != null) {
            window.open(data.progwmurl);
        }
    };



    $scope.btnDyeDateClick = function($event, $isolateScope) {
        $scope.Variables.svQryReturnCallPage.invoke();
    };

    $scope.$watch('Widgets.grid3.dataNavigator.__fullData', function() {
        $scope.setGridTotal();
    });



    $scope.setGridTotal = function() {
        debugger;
        var totamtreq = null;
        var totdyed = null;
        var totdv = null;
        var totrcv = null;
        var totcu = null;
        var totpcscut = null;
        var totpcsload = null;

        $scope.Widgets.labelGrid3Tamtreq.caption = ' ';
        $scope.Widgets.labelGrid3Tkgsdyed.caption = ' ';
        $scope.Widgets.labelGrid3Tkgsdv.caption = ' ';
        $scope.Widgets.labelGrid3Tkgsrcv.caption = ' ';
        $scope.Widgets.labelGrid3Tkgscut.caption = ' ';
        $scope.Widgets.labelGrid3Tpcscut.caption = ' ';
        $scope.Widgets.labelGrid3Tpcsload.caption = ' ';


        if (!!$scope.Widgets.grid3.dataNavigator.__fullData && $scope.Widgets.grid3.dataNavigator.__fullData.length > 0) {

            totamtreq = $scope.Widgets.grid3.dataNavigator.__fullData.map(({
                    amtreq
                }) => amtreq)
                .reduce((p, c) => p + c);

            totdyed = $scope.Widgets.grid3.dataNavigator.__fullData.map(({
                    wgtcmp
                }) => wgtcmp)
                .reduce((p, c) => p + c);

            totdv = $scope.Widgets.grid3.dataNavigator.__fullData.map(({
                    wgtdel
                }) => wgtdel)
                .reduce((p, c) => p + c);

            totrcv = $scope.Widgets.grid3.dataNavigator.__fullData.map(({
                    kgs
                }) => kgs)
                .reduce((p, c) => p + c);

            totcu = $scope.Widgets.grid3.dataNavigator.__fullData.map(({
                    kgscut
                }) => kgscut)
                .reduce((p, c) => p + c);

            totpcscut = $scope.Widgets.grid3.dataNavigator.__fullData.map(({
                    pcscut
                }) => pcscut)
                .reduce((p, c) => p + c);

            totpcsload = $scope.Widgets.grid3.dataNavigator.__fullData.map(({
                    pcsload
                }) => pcsload)
                .reduce((p, c) => p + c);
        }


        if (!!totamtreq) {

            $scope.Widgets.labelGrid3Tamtreq.caption = totamtreq.toLocaleString('en-UK', {
                maximumFractionDigits: 2
            });
        }

        if (!!totdyed) {
            $scope.Widgets.labelGrid3Tkgsdyed.caption = totdyed.toLocaleString('en-UK', {
                maximumFractionDigits: 2
            });
        }

        if (!!totdv) {
            $scope.Widgets.labelGrid3Tkgsdv.caption = totdv.toLocaleString('en-UK', {
                maximumFractionDigits: 2
            });
        }

        if (!!totrcv) {
            $scope.Widgets.labelGrid3Tkgsrcv.caption = totrcv.toLocaleString('en-UK', {
                maximumFractionDigits: 2
            });
        }

        if (!!totcu) {
            $scope.Widgets.labelGrid3Tkgscut.caption = totcu.toLocaleString('en-UK', {
                maximumFractionDigits: 2
            });
        }

        if (!!totpcscut) {

            $scope.Widgets.labelGrid3Tpcscut.caption = totpcscut.toLocaleString('en-UK', {
                maximumFractionDigits: 0
            });
        }

        if (!!totpcsload) {
            $scope.Widgets.labelGrid3Tpcsload.caption = totpcsload.toLocaleString('en-UK', {
                maximumFractionDigits: 0
            });
        }

    };


}]);

Application.$controller("grid3Controller", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

    }



]);

Application.$controller("gridOrderController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);