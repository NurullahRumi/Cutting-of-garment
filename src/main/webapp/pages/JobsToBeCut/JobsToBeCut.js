Application.$controller("JobsToBeCutPageController", ["$scope", function($scope) {
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
        $scope.Widgets.panel1.expanded = false;

    };


    $scope.button3Click = function($event, $isolateScope) {
        var m_ordnum = $scope.Widgets.form1.formWidgets.pORDNUM.datavalue;
        var m_dyejob = $scope.Widgets.form1.formWidgets.pDYEJOB.datavalue;
        var m_filterby = $scope.Widgets.form1.formWidgets.pFilterType.datavalue;
        var m_from = $scope.Widgets.form1.formWidgets.pFROMDATE.datavalue;
        var m_to = $scope.Widgets.form1.formWidgets.pTODATE.datavalue;

        if ((m_ordnum == "" || m_ordnum == null || m_ordnum == undefined) && (m_dyejob == "" || m_dyejob == null || m_dyejob == undefined) && (m_filterby == "" || m_filterby == null || m_filterby == undefined) && (m_from == "" || m_from == null || m_from == undefined) && (m_to == "" || m_to == null || m_to == undefined)) {
            $scope.Variables.notifMsg.setMessage("Order no/ Dyejob /Filter By is required to query");
            $scope.Variables.notifMsg.notify();
            return false;
        }


        if (m_filterby == "REL" || m_filterby == "SNT") {
            if ((m_from == "" || m_from == null || m_from == undefined) || (m_to == "" || m_to == null || m_to == undefined)) {
                $scope.Variables.notifMsg.setMessage("Type of filter and dates are required");
                $scope.Variables.notifMsg.notify();
                return false;
            }
        }
        if (m_to < m_from) {
            $scope.Variables.notifMsg.setMessage("To date cannot be less than from date");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        var date1 = new Date(m_from);
        var date2 = new Date(m_to);
        var diffDays = (date2 - date1) / 86400000;

        if (diffDays > 7) {
            $scope.Variables.notifMsg.setMessage("Cannot query for more than 7 days");
            $scope.Variables.notifMsg.notify();
            return false;
        }
        $scope.Variables.svProcCU1000PK0_GetCU900Dyejob.invoke();
    };


    $scope.button1Click = function($event, $isolateScope) {
        $scope.Variables.svProcCU1000PK0_GetCU900AvailMarkers.dataSet = null;
        $scope.Variables.svProcCU1000PK0_GetCU900Dyejob.dataSet = null;
        $scope.Variables.lvSizeCut905.dataSet = null;
        $scope.Widgets.txtVariant.datavalue = null;
        $scope.Widgets.txtFabinModel.datavalue = null;
        $scope.Widgets.txtFabCstintName.datavalue = null;
        $scope.Widgets.txtFabCod.datavalue = null;
        $scope.Widgets.txtMrkrWidFrom.datavalue = null;
        $scope.Widgets.txtMrkrWidTo.datavalue = null;
        $scope.Widgets.txtStge.datavalue = null;
    };


    $scope.button14Click = function($event, $isolateScope) {
        $scope.Widgets.dialogAddJob.open();
    };


    $scope.svProcCU900pk0_InsNewDyejobonSuccess = function(variable, data) {
        $scope.Widgets.dialogAddJob.close();
        alert("Done");
    };


    $scope.button4Click = function($event, $isolateScope) {
        $scope.Widgets.dialogAddJob.open();
    };


    $scope.button13_1Click = function($event, $isolateScope) {

        //Save your changes first


        if ($scope.Variables.lvSizeCut905.dataSet == undefined) {
            $scope.Variables.notifMsg.setMessage("Query dyejob first");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        //You do not have rights to save in this screen

        debugger;
        if ($scope.Variables.lvSizeCut905.dataSet.data.length !== 0) {
            $scope.Variables.notifMsg.setMessage("Sizes already exist for this job/fabric");
            $scope.Variables.notifMsg.notify();
            return false;
        }
        debugger;
        var i = $scope.Widgets.gridDyejob.selecteditem;

        if ($scope.Widgets.gridDyejob.selecteditem.status !== "WIP") {
            $scope.Variables.notifMsg.setMessage("Can fetch sizes only for WIP jobs");
            $scope.Variables.notifMsg.notify();
            return false;
        }


        $scope.Variables.svProcCU900pk0_InsSizes.invoke();

    };


    $scope.svProcCU900pk0_InsSizesonSuccess = function(variable, data) {
        $scope.Variables.lvSizeCut905.listRecords();
    };


    $scope.button18Click = function($event, $isolateScope) {

        //Save your changes first

        debugger;
        if ($scope.Widgets.gridDyejob.dataset == undefined) {
            $scope.Variables.notifMsg.setMessage("Query dyejob first");
            $scope.Variables.notifMsg.notify();
            return false;
        }


        //No rights to request automatic markers


        if ($scope.Widgets.gridDyejob.selecteditem.status != "WIP") { //ERR should be added
            $scope.Variables.notifMsg.setMessage("Job is not WIP");
            $scope.Variables.notifMsg.notify();
            return false;
        }


        if ($scope.Variables.svQryGetCUTFAB.dataSet.cnthalted > 0) {
            $scope.Variables.notifMsg.setMessage("Cannot request marker. Order has been halted");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        if ($scope.Widgets.lblTotRatio.caption == undefined) {
            $scope.Variables.notifMsg.setMessage("Ratios must be entered first");
            $scope.Variables.notifMsg.notify();
            return false;
        }


        if (($scope.Variables.svQrySzeDes.dataSet.szedes !== null) && ($scope.Variables.svQrySzeDes.dataSet.szedes !== undefined)) {
            $scope.Variables.notifMsg.setMessage("Delete sizes that do not have ratios. Size");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        if ($scope.Variables.svQryLectraSze.dataSet.lectrasze == 0) {
            $scope.Variables.notifMsg.setMessage("Lectra size or ratios not defined for all sizes");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        var m_txtVariant = $scope.Widgets.txtVariant.datavalue;
        var m_FabinModel = $scope.Widgets.txtFabinModel.datavalue;
        var m_FabCstintName = $scope.Widgets.txtFabCstintName.datavalue;
        var m_FabCod = $scope.Widgets.txtFabCod.datavalue;
        var m_MrkrWidFrom = $scope.Widgets.txtMrkrWidFrom.datavalue;
        var m_MrkrWidTo = $scope.Widgets.txtMrkrWidTo.datavalue;
        var m_Stge = $scope.Widgets.txtStge.datavalue;


        if ((m_txtVariant == "" || m_txtVariant == null || m_txtVariant == undefined) || (m_FabinModel == "" || m_FabinModel == null || m_FabinModel == undefined) || (m_FabCstintName == "" || m_FabCstintName == null || m_FabCstintName == undefined) || (m_FabCod == "" || m_FabCod == null || m_FabCod == undefined) || (m_MrkrWidFrom == "" || m_MrkrWidFrom == null || m_MrkrWidFrom == undefined) || (m_Stge == "" || m_Stge == null || m_Stge == undefined)) {
            $scope.Variables.notifMsg.setMessage("Variant, fabric in model, fabric code , stage, fabric constriant and marker widths are required");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        debugger;
        if (m_MrkrWidTo < m_MrkrWidFrom) {
            $scope.Variables.notifMsg.setMessage("Invalid 'from/to' marker widths entered");
            $scope.Variables.notifMsg.notify();
            return false;
        }
        if (m_MrkrWidTo - m_MrkrWidFrom > 6) {
            $scope.Variables.notifMsg.setMessage("Cannot queue more than 6 markers at a time");
            $scope.Variables.notifMsg.notify();
            return false;
        }


        $scope.Variables.svProcCU900pk0_CreateAutoMarker.invoke();
    };


    $scope.button5Click = function($event, $isolateScope) {
        //Save your changes first

        if ($scope.Widgets.gridDyejob.dataset == undefined) {
            $scope.Variables.notifMsg.setMessage("Query dyejob first");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        //You do not have rights to save in this screen

        //Cannot cancel job which is not at your location


        if (($scope.Widgets.form1.formWidgets.pFilterType.datavalue != "SNT") && ($scope.Widgets.form1.formWidgets.pFilterType.datavalue != "REL")) {
            $scope.Variables.notifMsg.setMessage("Can cancel jobs only when they have already been sent to cutter");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        alert("Procedure will be invoked");
    };


    $scope.gridSizesBeforerowupdate = function($event, $isolateScope, $rowData) {

        var m_rowData = $rowData.szeratio;
        var m_revrsedir = $rowData.reversedir;
        var m_groupnum = $rowData.groupnum;

        if (m_rowData < 0) {
            $scope.Variables.notifMsg.setMessage("Ratio cannot be less than zero");
            $scope.Variables.notifMsg.notify();
            return false;
        }
        if (m_rowData.length > 7) {
            $scope.Variables.notifMsg.setMessage("Ratio cannot be more than 7 charecters");
            $scope.Variables.notifMsg.notify();
            return false;
        }
        debugger;
        if (m_revrsedir != "Y" && m_revrsedir != null && m_revrsedir != undefined) {
            $scope.Variables.notifMsg.setMessage("Value can be 'Y' or blank ");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        if (m_revrsedir.length > 1) {
            $scope.Variables.notifMsg.setMessage("Direction Reversed cannot be more than 1 charecters");
            $scope.Variables.notifMsg.notify();
            return false;
        }
        //reversedir

        if (m_groupnum.length > 3) {
            $scope.Variables.notifMsg.setMessage("Group No cannot be more than 3 charecters");
            $scope.Variables.notifMsg.notify();
            return false;
        }
        // groupnum
    };


    $scope.svProcCU900pk0_CreateAutoMarkeronSuccess = function(variable, data) {
        $scope.Widgets.txtVariant.datavalue = null;
        $scope.Widgets.txtFabinModel.datavalue = null;
        $scope.Widgets.txtFabCstintName.datavalue = null;
        $scope.Widgets.txtFabCod.datavalue = null;
        $scope.Widgets.txtMrkrWidFrom.datavalue = null;
        $scope.Widgets.txtMrkrWidTo.datavalue = null;
        $scope.Widgets.txtStge.datavalue = null;
        alert("Done");
    };


    $scope.lvSizeCut905onSuccess = function(variable, data) {
        $scope.Variables.svQrySzeDes.invoke();
    };

}]);


Application.$controller("gridDyejobController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("grid2Controller", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("dialogAddJobController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.button16Click = function($event, $isolateScope) {
            debugger;
            var m_txtDyejob = $scope.Widgets.txtDyejob.datavalue;
            var m_txtOrdnum = $scope.Widgets.txtOrdnum.datavalue;
            var m_txtGarment = $scope.Widgets.txtGarment.datavalue;
            var m_txtColour = $scope.Widgets.txtColour.datavalue;
            var m_txtFabric = $scope.Widgets.txtFabric.datavalue;
            var m_txtCutUnit = $scope.Widgets.selectCutUnt.datavalue;
            var m_txtRdyejob = $scope.Widgets.txtRdyejob.datavalue;

            if ($scope.Widgets.radioset1.datavalue == "N") {
                debugger;
                if ((m_txtDyejob == "" || m_txtDyejob == null || m_txtDyejob == undefined) || (m_txtOrdnum == "" || m_txtOrdnum == null || m_txtOrdnum == undefined) || (m_txtGarment == "" || m_txtGarment == null || m_txtGarment == undefined) || (m_txtColour == "" || m_txtColour == null || m_txtColour == undefined) || (m_txtFabric == "" || m_txtFabric == null | m_txtFabric == undefined) || (m_txtCutUnit == "" || m_txtCutUnit == null || m_txtCutUnit == undefined)) {
                    $scope.Variables.notifMsg.setMessage("All fields are required");
                    $scope.Variables.notifMsg.notify();
                    return false;
                }
            }
            if (($scope.Widgets.radioset1.datavalue == "o") || ($scope.Widgets.radioset1.datavalue == "r") || ($scope.Widgets.radioset1.datavalue == "m")) {
                debugger;
                if ((m_txtDyejob == "" || m_txtDyejob == null || m_txtDyejob == undefined) || (m_txtOrdnum == "" || m_txtOrdnum == null || m_txtOrdnum == undefined) || (m_txtGarment == "" || m_txtGarment == null || m_txtGarment == undefined) || (m_txtColour == "" || m_txtColour == null || m_txtColour == undefined) || (m_txtFabric == "" || m_txtFabric == null | m_txtFabric == undefined) || (m_txtCutUnit == "" || m_txtCutUnit == null || m_txtCutUnit == undefined) || (m_txtRdyejob == "" || m_txtRdyejob == null || m_txtRdyejob == undefined)) {
                    $scope.Variables.notifMsg.setMessage("All fields are required");
                    $scope.Variables.notifMsg.notify();
                    return false;
                }
            }

            $scope.Variables.svProcCU900pk0_InsNewDyejob.invoke();
        };


        $scope.radioset1Click = function($event, $isolateScope) {
            if ($scope.Widgets.radioset1.datavalue == "N") {
                $scope.Widgets.txtRdyejob.show = false;
                $scope.Widgets.lblRefDyejob.show = false;
            } else {
                $scope.Widgets.txtRdyejob.show = true;
                $scope.Widgets.lblRefDyejob.show = true;
            }
        };


        $scope.dialogAddJobOpened = function($event, $isolateScope) {
            $scope.Widgets.txtRdyejob.show = false;
            $scope.Widgets.lblRefDyejob.show = false;
        };

    }
]);

Application.$controller("gridSizesController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

    }
]);