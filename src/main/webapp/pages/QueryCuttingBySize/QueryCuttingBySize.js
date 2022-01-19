Application.$controller("QueryCuttingBySizePageController", ["$scope", 'TreeGridHelper', function($scope, TreeGridHelper) {
    "use strict";

    /* perform any action on widgets/variables within this block */

    /*CN04 13.12.2018 replace wavemaker grid with treegrid
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
        /*if (!($scope.Widgets.form1.formWidgets.pOrdnum.datavalue == "" || $scope.Widgets.form1.formWidgets.pOrdnum.datavalue == null || $scope.Widgets.form1.formWidgets.pOrdnum.datavalue == undefined)) {
            // debugger;
            // $scope.Variables.notifMsg.setMessage("Order should be entered to query");
            // $scope.Variables.notifMsg.notify();
            // return false;
            $scope.Widgets.form1.submit();
        }*/

        if ($scope.pageParams.pOrdnum === undefined) {
            return false;
        } else {
            $scope.Widgets.form1.submit();
        }
        if ($scope.Variables.pOrdnum === undefined) {
            $scope.Widgets.top_nav1.show = false;
        }
    };


    // construct the treegrid for gridDyejob
    $scope.showGridDyejob = function(p_dataset) {

        var m_qtyord8;
        var m_qtyord1;
        var m_qtyord2;
        var m_qtyord3;
        var m_qtyord4;
        var m_qtyord5;
        var m_qtyord6;
        var m_qtyord7;
        var m_qtyord9;
        var m_qtyord10;
        var m_qtyord11;
        var m_qtyord12;
        var m_qtyord13;
        var m_qtyord14;
        var m_qtyord15;
        var m_qtyord16;
        var m_qtyord17;
        var m_qtyord18;
        var m_qtyord19;
        var m_qtyord20;
        var m_qtyord21;
        var m_qtyord22;
        var m_qtyord23;
        var m_qtyord24;
        var m_qtyord25;
        var m_qtyord26;
        var m_qtyord27;
        var m_qtyord28;
        var m_qtyord29;
        var m_qtyord30;
        var m_qtyord31;
        var m_qtyord32;
        var m_qtyord33;
        var m_qtyord34;
        var m_qtyord35;
        var m_qtyord36;
        var m_qtyord37;
        var m_qtyord38;
        var m_qtyord39;
        var m_qtyord40;
        var m_qtyord41;
        var m_qtyord42;
        var m_qtyord43;
        var m_qtyord44;
        var m_qtyord45;
        var m_qtyord46;
        var m_qtyord47;
        var m_qtyord48;

        if ($scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord1 !== undefined) {
            m_qtyord1 = $scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord1;
        }
        if ($scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord2 !== undefined) {
            m_qtyord2 = $scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord2;
        }
        if ($scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord3 !== undefined) {
            m_qtyord3 = $scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord3;
        }
        if ($scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord4 !== undefined) {
            m_qtyord4 = $scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord4;
        }
        if ($scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord5 !== undefined) {
            m_qtyord5 = $scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord5;
        }
        if ($scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord6 !== undefined) {
            m_qtyord6 = $scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord6;
        }
        if ($scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord7 !== undefined) {
            m_qtyord7 = $scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord7;
        }
        if ($scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord8 !== undefined) {
            m_qtyord8 = $scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord8;
        }

        if ($scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord9 !== undefined) {
            m_qtyord9 = $scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord9;
        }

        if ($scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord10 !== undefined) {
            m_qtyord10 = $scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord10;
        }

        if ($scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord11 !== undefined) {
            m_qtyord11 = $scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord11;
        }

        if ($scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord12 !== undefined) {
            m_qtyord12 = $scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord12;
        }

        if ($scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord13 !== undefined) {
            m_qtyord13 = $scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord13;
        }

        if ($scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord14 !== undefined) {
            m_qtyord14 = $scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord14;
        }
        if ($scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord15 !== undefined) {
            m_qtyord15 = $scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord15;
        }
        if ($scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord16 !== undefined) {
            m_qtyord16 = $scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord16;
        }
        if ($scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord17 !== undefined) {
            m_qtyord17 = $scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord17;
        }
        if ($scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord18 !== undefined) {
            m_qtyord18 = $scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord18;
        }
        if ($scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord19 !== undefined) {
            m_qtyord19 = $scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord19;
        }
        if ($scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord20 !== undefined) {
            m_qtyord20 = $scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord20;
        }
        if ($scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord21 !== undefined) {
            m_qtyord21 = $scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord21;
        }
        if ($scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord22 !== undefined) {
            m_qtyord22 = $scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord22;
        }
        if ($scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord23 !== undefined) {
            m_qtyord23 = $scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord23;
        }
        if ($scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord24 !== undefined) {
            m_qtyord24 = $scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord24;
        }
        if ($scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord25 !== undefined) {
            m_qtyord25 = $scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord25;
        }
        if ($scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord26 !== undefined) {
            m_qtyord26 = $scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord26;
        }
        if ($scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord27 !== undefined) {
            m_qtyord27 = $scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord27;
        }
        if ($scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord28 !== undefined) {
            m_qtyord28 = $scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord28;
        }
        if ($scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord29 !== undefined) {
            m_qtyord29 = $scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord29;
        }
        if ($scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord30 !== undefined) {
            m_qtyord30 = $scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord30;
        }
        if ($scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord31 !== undefined) {
            m_qtyord31 = $scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord31;
        }
        if ($scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord32 !== undefined) {
            m_qtyord32 = $scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord32;
        }
        if ($scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord33 !== undefined) {
            m_qtyord33 = $scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord33;
        }
        if ($scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord34 !== undefined) {
            m_qtyord34 = $scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord34;
        }
        if ($scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord35 !== undefined) {
            m_qtyord35 = $scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord35;
        }
        if ($scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord36 !== undefined) {
            m_qtyord36 = $scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord36;
        }
        if ($scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord37 !== undefined) {
            m_qtyord37 = $scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord37;
        }
        if ($scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord38 !== undefined) {
            m_qtyord38 = $scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord38;
        }
        if ($scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord39 !== undefined) {
            m_qtyord39 = $scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord39;
        }
        if ($scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord40 !== undefined) {
            m_qtyord40 = $scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord40;
        }
        if ($scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord41 !== undefined) {
            m_qtyord41 = $scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord41;
        }
        if ($scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord42 !== undefined) {
            m_qtyord42 = $scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord42;
        }
        if ($scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord43 !== undefined) {
            m_qtyord43 = $scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord43;
        }
        if ($scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord44 !== undefined) {
            m_qtyord44 = $scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord44;
        }
        if ($scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord45 !== undefined) {
            m_qtyord45 = $scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord45;
        }
        if ($scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord46 !== undefined) {
            m_qtyord46 = $scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord46;
        }
        if ($scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord47 !== undefined) {
            m_qtyord47 = $scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord47;
        }
        if ($scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord48 !== undefined) {
            m_qtyord48 = $scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].qtyord48;
        }


        var gridLayout = {
            Cfg: {
                Code: "GTGEEBESVPPUPB",
                Dragging: 0,
                Editing: 0,
                Focused: "AR6", // first row of data. This row number comes after the headers, foot section.
                Filtering: 1,
                StandardFilter: 2,

                ColSelecting: 0,
                Deleting: 0,
                MaxVScroll: 800,
                LeftWidth: 760,
                RightWidth: 20,
                WordWrap: 1,
                //MidWidth: 1500,
                Paging: 2,
                AllPages: 0,
                PageLength: 6,
                StaticCursor: 1,
                Align: "Center",
                AlignHeader: "Center",
                DateStrings: 2 // format of date columns to be in yyyy-MM-dd HH:mm:ss

            },
            Pager: {
                //Width: 120
                Visible: 0
            },

            Panel: {
                Visible: 0
                //  Validate: 1,
                //  Add: 1
            },

            Filter: {

            },

            LeftCols: [{
                    Name: "dyejob",
                    Width: "90",
                    Align: "Center",
                    CanFilter: 1,
                    CaseSensitive: 0

                }, {
                    Name: "fabseq",
                    Width: "50",
                    Align: "Center",
                    CanEdit: 0
                }, {
                    Name: "fabtyp",
                    Width: "60",
                    Align: "Center",
                    CanEdit: 0,
                    CanFilter: 0

                }, {
                    Name: "fabind",
                    Width: "45",
                    Align: "Center",
                    CanEdit: 0,
                    CanFilter: 0

                }, {
                    Name: "fabclrdes",
                    Width: "75",
                    Align: "Center",
                    CanEdit: 0,
                    CanFilter: 0
                    //,Wrap: 1,

                }, {
                    Name: "makind",
                    Width: "60",
                    Align: "Center",
                    CanEdit: 0,
                    CanFilter: 1

                }, {
                    Name: "cutseq",
                    Width: "50",
                    Align: "Center",
                    CanEdit: 0,
                    CanFilter: 1

                }, {
                    Name: "cutdate",
                    Width: "70",
                    Align: "Center",
                    CanEdit: 0,
                    CanFilter: 1

                }, {
                    Name: "kgs",
                    Width: "60",
                    Align: "Right",
                    CanEdit: 0,
                    CanFilter: 0,
                    Format: ",0.00"


                }, {
                    Name: "kgscut",
                    Width: "60",
                    Align: "Right",
                    CanEdit: 0,
                    CanFilter: 0,
                    Format: ",0.00"

                }, {
                    Name: "cutavg",
                    width: "60",
                    Align: "Right",
                    CanEdit: 0,
                    CanFilter: 0,
                    Format: ",0.00"
                },

                {
                    Name: "dyejobTotpcscut",
                    Width: "65",
                    Align: "Right",
                    CanEdit: 0,
                    CanFilter: 0
                }

            ],
            Cols: [{
                    Name: "pcs1",
                    Width: "70",
                    Align: "Right",
                    Type: "Int",
                    Format: ",0",
                    CanEdit: 0,
                    CanFilter: 0,
                    Visible: (($scope.Variables.statOrdSize.dataSet[0].sizedes === null || $scope.Variables.statOrdSize.dataSet[0].sizedes === undefined || $scope.Variables.statOrdSize.dataSet[0].sizedes === '') ? 0 : 1)
                },

                {
                    Name: "pcs2",
                    Width: "70",
                    Align: "Right",
                    Type: "Int",
                    Format: ",0",
                    CanEdit: 0,
                    CanFilter: 0,
                    Visible: (($scope.Variables.statOrdSize.dataSet[1].sizedes === null || $scope.Variables.statOrdSize.dataSet[1].sizedes === undefined || $scope.Variables.statOrdSize.dataSet[1].sizedes === '') ? 0 : 1)
                },
                {
                    Name: "pcs3",
                    Width: "70",
                    Align: "Right",
                    Type: "Int",
                    Format: ",0",
                    CanEdit: 0,
                    CanFilter: 0,
                    Visible: (($scope.Variables.statOrdSize.dataSet[2].sizedes === null || $scope.Variables.statOrdSize.dataSet[2].sizedes === undefined || $scope.Variables.statOrdSize.dataSet[2].sizedes === '') ? 0 : 1)
                },
                {
                    Name: "pcs4",
                    Width: "70",
                    Align: "Right",
                    Type: "Int",
                    Format: ",0",
                    CanEdit: 0,
                    CanFilter: 0,
                    Visible: (($scope.Variables.statOrdSize.dataSet[3].sizedes === null || $scope.Variables.statOrdSize.dataSet[3].sizedes === undefined || $scope.Variables.statOrdSize.dataSet[3].sizedes === '') ? 0 : 1)
                },

                {
                    Name: "pcs5",
                    Width: "70",
                    Align: "Right",
                    Type: "Int",
                    Format: ",0",
                    CanEdit: 0,
                    CanFilter: 0,
                    Visible: (($scope.Variables.statOrdSize.dataSet[4].sizedes === null || $scope.Variables.statOrdSize.dataSet[4].sizedes === undefined || $scope.Variables.statOrdSize.dataSet[4].sizedes === '') ? 0 : 1)
                },

                {
                    Name: "pcs6",
                    Width: "70",
                    Align: "Right",
                    Type: "Int",
                    Format: ",0",
                    CanEdit: 0,
                    CanFilter: 0,
                    Visible: (($scope.Variables.statOrdSize.dataSet[5].sizedes === null || $scope.Variables.statOrdSize.dataSet[5].sizedes === undefined || $scope.Variables.statOrdSize.dataSet[5].sizedes === '') ? 0 : 1)
                },
                {
                    Name: "pcs7",
                    Width: "70",
                    Align: "Right",
                    Type: "Int",
                    Format: ",0",
                    CanEdit: 0,
                    CanFilter: 0,
                    Visible: (($scope.Variables.statOrdSize.dataSet[6].sizedes === null || $scope.Variables.statOrdSize.dataSet[6].sizedes === undefined || $scope.Variables.statOrdSize.dataSet[6].sizedes === '') ? 0 : 1)
                },

                {
                    Name: "pcs8",
                    Width: "70",
                    Align: "Right",
                    Type: "Int",
                    Format: ",0",
                    CanEdit: 0,
                    CanFilter: 0,
                    Visible: (($scope.Variables.statOrdSize.dataSet[7].sizedes === null || $scope.Variables.statOrdSize.dataSet[7].sizedes === undefined || $scope.Variables.statOrdSize.dataSet[7].sizedes === '') ? 0 : 1)
                },

                {
                    Name: "pcs9",
                    Width: "70",
                    Align: "Right",
                    Type: "Int",
                    Format: ",0",
                    CanEdit: 0,
                    CanFilter: 0,
                    Visible: (($scope.Variables.statOrdSize.dataSet[8].sizedes === null || $scope.Variables.statOrdSize.dataSet[8].sizedes === undefined || $scope.Variables.statOrdSize.dataSet[8].sizedes === '') ? 0 : 1)
                },

                {
                    Name: "pcs10",
                    Width: "70",
                    Align: "Right",
                    Type: "Int",
                    Format: ",0",
                    CanEdit: 0,
                    CanFilter: 0,
                    Visible: (($scope.Variables.statOrdSize.dataSet[9].sizedes === null || $scope.Variables.statOrdSize.dataSet[9].sizedes === undefined || $scope.Variables.statOrdSize.dataSet[9].sizedes === '') ? 0 : 1)
                },
                {
                    Name: "pcs11",
                    Width: "70",
                    Align: "Right",
                    Type: "Int",
                    Format: ",0",
                    CanEdit: 0,
                    CanFilter: 0,
                    Visible: (($scope.Variables.statOrdSize.dataSet[10].sizedes === null || $scope.Variables.statOrdSize.dataSet[10].sizedes === undefined || $scope.Variables.statOrdSize.dataSet[10].sizedes === '') ? 0 : 1)
                },
                {
                    Name: "pcs12",
                    Width: "70",
                    Align: "Right",
                    Type: "Int",
                    Format: ",0",
                    CanEdit: 0,
                    CanFilter: 0,
                    Visible: (($scope.Variables.statOrdSize.dataSet[11].sizedes === null || $scope.Variables.statOrdSize.dataSet[11].sizedes === undefined || $scope.Variables.statOrdSize.dataSet[11].sizedes === '') ? 0 : 1)
                },
                {
                    Name: "pcs13",
                    Width: "70",
                    Align: "Right",
                    Type: "Int",
                    Format: ",0",
                    CanEdit: 0,
                    CanFilter: 0,
                    Visible: (($scope.Variables.statOrdSize.dataSet[12].sizedes === null || $scope.Variables.statOrdSize.dataSet[12].sizedes === undefined || $scope.Variables.statOrdSize.dataSet[12].sizedes === '') ? 0 : 1)
                },

                {
                    Name: "pcs14",
                    Width: "70",
                    Align: "Right",
                    Type: "Int",
                    Format: ",0",
                    CanEdit: 0,
                    CanFilter: 0,
                    Visible: (($scope.Variables.statOrdSize.dataSet[13].sizedes === null || $scope.Variables.statOrdSize.dataSet[13].sizedes === undefined || $scope.Variables.statOrdSize.dataSet[13].sizedes === '') ? 0 : 1)
                },

                {
                    Name: "pcs15",
                    Width: "70",
                    Align: "Right",
                    Type: "Int",
                    Format: ",0",
                    CanEdit: 0,
                    CanFilter: 0,
                    Visible: (($scope.Variables.statOrdSize.dataSet[14].sizedes === null || $scope.Variables.statOrdSize.dataSet[14].sizedes === undefined || $scope.Variables.statOrdSize.dataSet[14].sizedes === '') ? 0 : 1)
                },
                {
                    Name: "pcs16",
                    Width: "70",
                    Align: "Right",
                    Type: "Int",
                    Format: ",0",
                    CanEdit: 0,
                    CanFilter: 0,
                    Visible: (($scope.Variables.statOrdSize.dataSet[15].sizedes === null || $scope.Variables.statOrdSize.dataSet[15].sizedes === undefined || $scope.Variables.statOrdSize.dataSet[15].sizedes === '') ? 0 : 1)
                },
                {
                    Name: "pcs17",
                    Width: "70",
                    Align: "Right",
                    Type: "Int",
                    Format: ",0",
                    CanEdit: 0,
                    CanFilter: 0,
                    Visible: (($scope.Variables.statOrdSize.dataSet[16].sizedes === null || $scope.Variables.statOrdSize.dataSet[16].sizedes === undefined || $scope.Variables.statOrdSize.dataSet[16].sizedes === '') ? 0 : 1)
                },
                {
                    Name: "pcs18",
                    Width: "70",
                    Align: "Right",
                    Type: "Int",
                    Format: ",0",
                    CanEdit: 0,
                    CanFilter: 0,
                    Visible: (($scope.Variables.statOrdSize.dataSet[17].sizedes === null || $scope.Variables.statOrdSize.dataSet[17].sizedes === undefined || $scope.Variables.statOrdSize.dataSet[17].sizedes === '') ? 0 : 1)
                },
                {
                    Name: "pcs19",
                    Width: "70",
                    Align: "Right",
                    Type: "Int",
                    Format: ",0",
                    CanEdit: 0,
                    CanFilter: 0,
                    Visible: (($scope.Variables.statOrdSize.dataSet[18].sizedes === null || $scope.Variables.statOrdSize.dataSet[18].sizedes === undefined || $scope.Variables.statOrdSize.dataSet[18].sizedes === '') ? 0 : 1)
                },
                {
                    Name: "pcs20",
                    Width: "70",
                    Align: "Right",
                    Type: "Int",
                    Format: ",0",
                    CanEdit: 0,
                    CanFilter: 0,
                    Visible: (($scope.Variables.statOrdSize.dataSet[19].sizedes === null || $scope.Variables.statOrdSize.dataSet[19].sizedes === undefined || $scope.Variables.statOrdSize.dataSet[19].sizedes === '') ? 0 : 1)
                },
                {
                    Name: "pcs21",
                    Width: "70",
                    Align: "Right",
                    Type: "Int",
                    Format: ",0",
                    CanEdit: 0,
                    CanFilter: 0,
                    Visible: (($scope.Variables.statOrdSize.dataSet[20].sizedes === null || $scope.Variables.statOrdSize.dataSet[20].sizedes === undefined || $scope.Variables.statOrdSize.dataSet[20].sizedes === '') ? 0 : 1)
                },
                {
                    Name: "pcs22",
                    Width: "70",
                    Align: "Right",
                    Type: "Int",
                    Format: ",0",
                    CanEdit: 0,
                    CanFilter: 0,
                    Visible: (($scope.Variables.statOrdSize.dataSet[21].sizedes === null || $scope.Variables.statOrdSize.dataSet[21].sizedes === undefined || $scope.Variables.statOrdSize.dataSet[21].sizedes === '') ? 0 : 1)
                },
                {
                    Name: "pcs23",
                    Width: "70",
                    Align: "Right",
                    Type: "Int",
                    Format: ",0",
                    CanEdit: 0,
                    CanFilter: 0,
                    Visible: (($scope.Variables.statOrdSize.dataSet[22].sizedes === null || $scope.Variables.statOrdSize.dataSet[22].sizedes === undefined || $scope.Variables.statOrdSize.dataSet[22].sizedes === '') ? 0 : 1)
                },
                {
                    Name: "pcs24",
                    Width: "70",
                    Align: "Right",
                    Type: "Int",
                    Format: ",0",
                    CanEdit: 0,
                    CanFilter: 0,
                    Visible: (($scope.Variables.statOrdSize.dataSet[23].sizedes === null || $scope.Variables.statOrdSize.dataSet[23].sizedes === undefined || $scope.Variables.statOrdSize.dataSet[23].sizedes === '') ? 0 : 1)
                },
                {
                    Name: "pcs25",
                    Width: "70",
                    Align: "Right",
                    Type: "Int",
                    Format: ",0",
                    CanEdit: 0,
                    CanFilter: 0,
                    Visible: (($scope.Variables.statOrdSize.dataSet[24].sizedes === null || $scope.Variables.statOrdSize.dataSet[24].sizedes === undefined || $scope.Variables.statOrdSize.dataSet[24].sizedes === '') ? 0 : 1)
                },
                {
                    Name: "pcs26",
                    Width: "70",
                    Align: "Right",
                    Type: "Int",
                    Format: ",0",
                    CanEdit: 0,
                    CanFilter: 0,
                    Visible: (($scope.Variables.statOrdSize.dataSet[25].sizedes === null || $scope.Variables.statOrdSize.dataSet[25].sizedes === undefined || $scope.Variables.statOrdSize.dataSet[25].sizedes === '') ? 0 : 1)
                },
                {
                    Name: "pcs27",
                    Width: "70",
                    Align: "Right",
                    Type: "Int",
                    Format: ",0",
                    CanEdit: 0,
                    CanFilter: 0,
                    Visible: (($scope.Variables.statOrdSize.dataSet[26].sizedes === null || $scope.Variables.statOrdSize.dataSet[26].sizedes === undefined || $scope.Variables.statOrdSize.dataSet[26].sizedes === '') ? 0 : 1)
                },
                {
                    Name: "pcs28",
                    Width: "70",
                    Align: "Right",
                    Type: "Int",
                    Format: ",0",
                    CanEdit: 0,
                    CanFilter: 0,
                    Visible: (($scope.Variables.statOrdSize.dataSet[27].sizedes === null || $scope.Variables.statOrdSize.dataSet[27].sizedes === undefined || $scope.Variables.statOrdSize.dataSet[27].sizedes === '') ? 0 : 1)
                },
                {
                    Name: "pcs29",
                    Width: "70",
                    Align: "Right",
                    Type: "Int",
                    Format: ",0",
                    CanEdit: 0,
                    CanFilter: 0,
                    Visible: (($scope.Variables.statOrdSize.dataSet[28].sizedes === null || $scope.Variables.statOrdSize.dataSet[28].sizedes === undefined || $scope.Variables.statOrdSize.dataSet[28].sizedes === '') ? 0 : 1)
                },
                {
                    Name: "pcs30",
                    Width: "70",
                    Align: "Right",
                    Type: "Int",
                    Format: ",0",
                    CanEdit: 0,
                    CanFilter: 0,
                    Visible: (($scope.Variables.statOrdSize.dataSet[29].sizedes === null || $scope.Variables.statOrdSize.dataSet[29].sizedes === undefined || $scope.Variables.statOrdSize.dataSet[29].sizedes === '') ? 0 : 1)
                },
                {
                    Name: "pcs31",
                    Width: "70",
                    Align: "Right",
                    Type: "Int",
                    Format: ",0",
                    CanEdit: 0,
                    CanFilter: 0,
                    Visible: (($scope.Variables.statOrdSize.dataSet[30].sizedes === null || $scope.Variables.statOrdSize.dataSet[30].sizedes === undefined || $scope.Variables.statOrdSize.dataSet[30].sizedes === '') ? 0 : 1)
                },
                {
                    Name: "pcs32",
                    Width: "70",
                    Align: "Right",
                    Type: "Int",
                    Format: ",0",
                    CanEdit: 0,
                    CanFilter: 0,
                    Visible: (($scope.Variables.statOrdSize.dataSet[31].sizedes === null || $scope.Variables.statOrdSize.dataSet[31].sizedes === undefined || $scope.Variables.statOrdSize.dataSet[31].sizedes === '') ? 0 : 1)
                },
                {
                    Name: "pcs33",
                    Width: "70",
                    Align: "Right",
                    Type: "Int",
                    Format: ",0",
                    CanEdit: 0,
                    CanFilter: 0,
                    Visible: (($scope.Variables.statOrdSize.dataSet[32].sizedes === null || $scope.Variables.statOrdSize.dataSet[32].sizedes === undefined || $scope.Variables.statOrdSize.dataSet[32].sizedes === '') ? 0 : 1)
                },
                {
                    Name: "pcs34",
                    Width: "70",
                    Align: "Right",
                    Type: "Int",
                    Format: ",0",
                    CanEdit: 0,
                    CanFilter: 0,
                    Visible: (($scope.Variables.statOrdSize.dataSet[33].sizedes === null || $scope.Variables.statOrdSize.dataSet[33].sizedes === undefined || $scope.Variables.statOrdSize.dataSet[33].sizedes === '') ? 0 : 1)
                },
                {
                    Name: "pcs35",
                    Width: "70",
                    Align: "Right",
                    Type: "Int",
                    Format: ",0",
                    CanEdit: 0,
                    CanFilter: 0,
                    Visible: (($scope.Variables.statOrdSize.dataSet[34].sizedes === null || $scope.Variables.statOrdSize.dataSet[34].sizedes === undefined || $scope.Variables.statOrdSize.dataSet[34].sizedes === '') ? 0 : 1)
                },
                {
                    Name: "pcs36",
                    Width: "70",
                    Align: "Right",
                    Type: "Int",
                    Format: ",0",
                    CanEdit: 0,
                    CanFilter: 0,
                    Visible: (($scope.Variables.statOrdSize.dataSet[35].sizedes === null || $scope.Variables.statOrdSize.dataSet[35].sizedes === undefined || $scope.Variables.statOrdSize.dataSet[35].sizedes === '') ? 0 : 1)
                },
                {
                    Name: "pcs37",
                    Width: "70",
                    Align: "Right",
                    Type: "Int",
                    Format: ",0",
                    CanEdit: 0,
                    CanFilter: 0,
                    Visible: (($scope.Variables.statOrdSize.dataSet[36].sizedes === null || $scope.Variables.statOrdSize.dataSet[36].sizedes === undefined || $scope.Variables.statOrdSize.dataSet[36].sizedes === '') ? 0 : 1)
                },
                {
                    Name: "pcs38",
                    Width: "70",
                    Align: "Right",
                    Type: "Int",
                    Format: ",0",
                    CanEdit: 0,
                    CanFilter: 0,
                    Visible: (($scope.Variables.statOrdSize.dataSet[37].sizedes === null || $scope.Variables.statOrdSize.dataSet[37].sizedes === undefined || $scope.Variables.statOrdSize.dataSet[37].sizedes === '') ? 0 : 1)
                },
                {
                    Name: "pcs39",
                    Width: "70",
                    Align: "Right",
                    Type: "Int",
                    Format: ",0",
                    CanEdit: 0,
                    CanFilter: 0,
                    Visible: (($scope.Variables.statOrdSize.dataSet[38].sizedes === null || $scope.Variables.statOrdSize.dataSet[38].sizedes === undefined || $scope.Variables.statOrdSize.dataSet[38].sizedes === '') ? 0 : 1)
                },
                {
                    Name: "pcs40",
                    Width: "70",
                    Align: "Right",
                    Type: "Int",
                    Format: ",0",
                    CanEdit: 0,
                    CanFilter: 0,
                    Visible: (($scope.Variables.statOrdSize.dataSet[39].sizedes === null || $scope.Variables.statOrdSize.dataSet[39].sizedes === undefined || $scope.Variables.statOrdSize.dataSet[39].sizedes === '') ? 0 : 1)
                },
                {
                    Name: "pcs41",
                    Width: "70",
                    Align: "Right",
                    Type: "Int",
                    Format: ",0",
                    CanEdit: 0,
                    CanFilter: 0,
                    Visible: (($scope.Variables.statOrdSize.dataSet[40].sizedes === null || $scope.Variables.statOrdSize.dataSet[40].sizedes === undefined || $scope.Variables.statOrdSize.dataSet[40].sizedes === '') ? 0 : 1)
                },
                {
                    Name: "pcs42",
                    Width: "70",
                    Align: "Right",
                    Type: "Int",
                    Format: ",0",
                    CanEdit: 0,
                    CanFilter: 0,
                    Visible: (($scope.Variables.statOrdSize.dataSet[41].sizedes === null || $scope.Variables.statOrdSize.dataSet[41].sizedes === undefined || $scope.Variables.statOrdSize.dataSet[41].sizedes === '') ? 0 : 1)
                },
                {
                    Name: "pcs43",
                    Width: "70",
                    Align: "Right",
                    Type: "Int",
                    Format: ",0",
                    CanEdit: 0,
                    CanFilter: 0,
                    Visible: (($scope.Variables.statOrdSize.dataSet[42].sizedes === null || $scope.Variables.statOrdSize.dataSet[42].sizedes === undefined || $scope.Variables.statOrdSize.dataSet[42].sizedes === '') ? 0 : 1)
                },
                {
                    Name: "pcs44",
                    Width: "70",
                    Align: "Right",
                    Type: "Int",
                    Format: ",0",
                    CanEdit: 0,
                    CanFilter: 0,
                    Visible: (($scope.Variables.statOrdSize.dataSet[43].sizedes === null || $scope.Variables.statOrdSize.dataSet[43].sizedes === undefined || $scope.Variables.statOrdSize.dataSet[43].sizedes === '') ? 0 : 1)
                },
                {
                    Name: "pcs45",
                    Width: "70",
                    Align: "Right",
                    Type: "Int",
                    Format: ",0",
                    CanEdit: 0,
                    CanFilter: 0,
                    Visible: (($scope.Variables.statOrdSize.dataSet[44].sizedes === null || $scope.Variables.statOrdSize.dataSet[44].sizedes === undefined || $scope.Variables.statOrdSize.dataSet[44].sizedes === '') ? 0 : 1)
                },
                {
                    Name: "pcs46",
                    Width: "70",
                    Align: "Right",
                    Type: "Int",
                    Format: ",0",
                    CanEdit: 0,
                    CanFilter: 0,
                    Visible: (($scope.Variables.statOrdSize.dataSet[45].sizedes === null || $scope.Variables.statOrdSize.dataSet[45].sizedes === undefined || $scope.Variables.statOrdSize.dataSet[45].sizedes === '') ? 0 : 1)
                },
                {
                    Name: "pcs47",
                    Width: "70",
                    Align: "Right",
                    Type: "Int",
                    Format: ",0",
                    CanEdit: 0,
                    CanFilter: 0,
                    Visible: (($scope.Variables.statOrdSize.dataSet[46].sizedes === null || $scope.Variables.statOrdSize.dataSet[46].sizedes === undefined || $scope.Variables.statOrdSize.dataSet[46].sizedes === '') ? 0 : 1)
                },
                {
                    Name: "pcs48",
                    Width: "70",
                    Align: "Right",
                    Type: "Int",
                    Format: ",0",
                    CanEdit: 0,
                    CanFilter: 0,
                    Visible: (($scope.Variables.statOrdSize.dataSet[47].sizedes === null || $scope.Variables.statOrdSize.dataSet[47].sizedes === undefined || $scope.Variables.statOrdSize.dataSet[47].sizedes === '') ? 0 : 1)
                },

                {
                    Name: "avgcutavgFabclr",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },

                {
                    Name: "fabrto",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },

                {
                    Name: "totalPcs1",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },

                {
                    Name: "totalPcs2",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },

                {
                    Name: "totalPcs3",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },

                {
                    Name: "totalPcs4",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },

                {
                    Name: "totalPcs5",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "totalPcs6",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "totalPcs7",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "totalPcs8",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },

                {
                    Name: "totalPcs9",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "totalPcs10",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },

                {
                    Name: "totalPcs11",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },

                {
                    Name: "totalPcs12",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },

                {
                    Name: "totalPcs13",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "totalPcs14",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "totalPcs15",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "totalPcs16",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "totalPcs17",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "totalPcs18",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "totalPcs19",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "totalPcs20",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "totalPcs21",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "totalPcs22",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "totalPcs23",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "totalPcs24",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "totalPcs25",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "totalPcs26",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "totalPcs27",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "totalPcs28",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "totalPcs29",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "totalPcs30",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "totalPcs31",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "totalPcs32",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "totalPcs33",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "totalPcs34",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "totalPcs35",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "totalPcs36",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "totalPcs37",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "totalPcs38",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "totalPcs39",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "totalPcs40",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "totalPcs41",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "totalPcs42",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "totalPcs43",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "totalPcs44",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "totalPcs45",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "totalPcs46",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "totalPcs47",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "totalPcs48",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },

                {
                    Name: "totalOrderPcscut",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },

                {
                    Name: "bal1",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "bal2",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                }, {
                    Name: "bal3",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "bal4",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "bal5",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },

                {
                    Name: "bal6",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },

                {
                    Name: "bal7",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },

                {
                    Name: "bal8",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "bal9",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },

                {
                    Name: "bal10",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "bal11",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },

                {
                    Name: "bal12",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },

                {
                    Name: "bal13",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "bal14",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "bal15",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "bal16",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "bal17",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "bal18",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "bal19",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "bal20",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "bal21",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "bal22",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "bal23",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "bal24",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "bal25",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "bal26",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "bal27",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "bal28",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "bal29",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "bal30",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "bal31",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "bal32",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "bal33",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "bal34",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "bal35",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "bal36",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "bal37",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "bal38",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "bal39",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "bal40",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "bal41",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "bal42",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "bal43",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "bal44",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "bal45",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "bal46",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "bal47",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "bal48",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },

                {
                    Name: "totbal",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },

                {
                    Name: "totcomp",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },

                {
                    Name: "comp1",
                    Type: "Int",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "comp2",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "comp3",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "comp4",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "comp5",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "comp6",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "comp7",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "comp8",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "comp9",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "comp10",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "comp12",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "comp13",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "comp14",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "comp15",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "comp16",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "comp17",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "comp18",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "comp19",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "comp20",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "comp21",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "comp22",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "comp23",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "comp24",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "comp25",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "comp26",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "comp27",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "comp28",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "comp29",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "comp30",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "comp31",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "comp32",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "comp33",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "comp34",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "comp35",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "comp36",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "comp37",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "comp38",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "comp39",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "comp40",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "comp41",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "comp42",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "comp43",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "comp44",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "comp45",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "comp46",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "comp47",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                },
                {
                    Name: "comp48",
                    Type: "Float",
                    CanEdit: 0,
                    Visible: 0
                }

            ],
            RightCols: [{
                Name: "dummyColumn",
                Width: "20",
                Align: "Right",
                CanFilter: 0

            }],

            Def: [{
                Name: "R",
                Calculated: 1,
                CalcOrder: "fabseq,dyejobTotpcscut,pcs1,pcs2,pcs3,pcs4,pcs5,pcs6,pcs7,pcs8,pcs9,pcs10,pcs11,pcs12,pcs13,pcs14,pcs15,pcs16,pcs17,pcs18,pcs19,pcs20,pcs21,pcs22,pcs23,pcs24,pcs25,pcs26,pcs27,pcs28,pcs29,pcs30,pcs31,pcs32,pcs33,pcs34,pcs35,pcs36,pcs37,pcs38,pcs39,pcs40,pcs41,pcs42,pcs43,pcs44,pcs45,pcs46,pcs47,pcs48,pcs1Class,pcs2Class,pcs3Class,pcs4Class,pcs5Class,pcs6Class,pcs7Class,pcs8Class,pcs9Class,pcs10Class,pcs11Class,pcs12Class,pcs13Class,pcs14Class,pcs15Class,pcs16Class,pcs17Class,pcs18Class,pcs19Class,pcs20Class,pcs21Class,pcs22Class,pcs23Class,pcs24Class,pcs25Class,pcs26Class,pcs27Class,pcs28Class,pcs29Class,pcs30Class,pcs31Class,pcs32Class,pcs33Class,pcs34Class,pcs35Class,pcs36Class,pcs37Class,pcs38Class,pcs39Class,pcs40Class,pcs41Class,pcs42Class,pcs43Class,pcs44Class,pcs45Class,pcs46Class,pcs47Class,pcs48Class,kgscut,fabtyp,avgcutavgFabclr"
            }],

            Head: [

                {
                    Spanned: 1,
                    dyejob: "",
                    dyejobCanEdit: 0,
                    Class: "control-label",

                    dummyColumn: "",
                    dummyColumnType: "Text",


                    fabseq: "Fabric Details",
                    fabseqType: "Text",
                    fabseqSpan: 3,
                    fabseqAlign: "Center",
                    fabseqClass: "bold",
                    fabseqColor: "blue-l1",
                    fabseqCanEdit: 0,

                    fabclrdes: "",
                    fabclrdesSpan: 5,
                    fabclrdesCanEdit: 0,

                    pcs1: $scope.Variables.statOrdSize.dataSet[0].sizedes,
                    pcs1Type: "Text",
                    pcs1Class: "bold",
                    pcs1Align: "Center",
                    pcs1CanEdit: 0,
                    pcs1Wrap: 1,

                    pcs2: $scope.Variables.statOrdSize.dataSet[1].sizedes,
                    pcs2Type: "Text",
                    pcs2Class: "bold",
                    pcs2Align: "Center",
                    pcs2CanEdit: 0,
                    pcs2Wrap: 1,

                    pcs3: $scope.Variables.statOrdSize.dataSet[2].sizedes,
                    pcs3Type: "Text",
                    pcs3Class: "bold",
                    pcs3Align: "Center",
                    pcs3CanEdit: 0,
                    pcs3Wrap: 1,

                    pcs4: $scope.Variables.statOrdSize.dataSet[3].sizedes,
                    pcs4Type: "Text",
                    pcs4Class: "bold",
                    pcs4Align: "Center",
                    pcs4CanEdit: 0,
                    pcs4Wrap: 1,

                    pcs5: $scope.Variables.statOrdSize.dataSet[4].sizedes,
                    pcs5Type: "Text",
                    pcs5Class: "bold",
                    pcs5Align: "Center",
                    pcs5CanEdit: 0,
                    pcs5Wrap: 1,

                    pcs6: $scope.Variables.statOrdSize.dataSet[5].sizedes,
                    pcs6Type: "Text",
                    pcs6Class: "bold",
                    pcs6Align: "Center",
                    pcs6CanEdit: 0,
                    pcs6Wrap: 1,

                    pcs7: $scope.Variables.statOrdSize.dataSet[6].sizedes,
                    pcs7Type: "Text",
                    pcs7Class: "bold",
                    pcs7Align: "Center",
                    pcs7CanEdit: 0,
                    pcs7Wrap: 1,

                    pcs8: $scope.Variables.statOrdSize.dataSet[7].sizedes,
                    pcs8Type: "Text",
                    pcs8Class: "bold",
                    pcs8Align: "Center",
                    pcs8CanEdit: 0,
                    pcs8Wrap: 1,

                    pcs9: $scope.Variables.statOrdSize.dataSet[8].sizedes,
                    pcs9Type: "Text",
                    pcs9Class: "bold",
                    pcs9Align: "Center",
                    pcs9CanEdit: 0,
                    pcs9Wrap: 1,

                    pcs10: $scope.Variables.statOrdSize.dataSet[9].sizedes,
                    pcs10Type: "Text",
                    pcs10Class: "bold",
                    pcs10Align: "Center",
                    pcs10CanEdit: 0,
                    pcs10Wrap: 1,

                    pcs11: $scope.Variables.statOrdSize.dataSet[10].sizedes,
                    pcs11Type: "Text",
                    pcs11Class: "bold",
                    pcs11Align: "Center",
                    pcs11CanEdit: 0,
                    pcs11Wrap: 1,

                    pcs12: $scope.Variables.statOrdSize.dataSet[11].sizedes,
                    pcs12Type: "Text",
                    pcs12Class: "bold",
                    pcs12Align: "Center",
                    pcs12CanEdit: 0,
                    pcs12Wrap: 1,

                    pcs13: $scope.Variables.statOrdSize.dataSet[12].sizedes,
                    pcs13Type: "Text",
                    pcs13Class: "bold",
                    pcs13Align: "Center",
                    pcs13CanEdit: 0,
                    pcs13Wrap: 1,

                    pcs14: $scope.Variables.statOrdSize.dataSet[13].sizedes,
                    pcs14Type: "Text",
                    pcs14Class: "bold",
                    pcs14Align: "Center",
                    pcs14CanEdit: 0,
                    pcs14Wrap: 1,

                    pcs15: $scope.Variables.statOrdSize.dataSet[14].sizedes,
                    pcs15Type: "Text",
                    pcs15Class: "bold",
                    pcs15Align: "Center",
                    pcs15CanEdit: 0,
                    pcs15Wrap: 1,

                    pcs16: $scope.Variables.statOrdSize.dataSet[15].sizedes,
                    pcs16Type: "Text",
                    pcs16Class: "bold",
                    pcs16Align: "Center",
                    pcs16CanEdit: 0,
                    pcs16Wrap: 1,

                    pcs17: $scope.Variables.statOrdSize.dataSet[16].sizedes,
                    pcs17Type: "Text",
                    pcs17Class: "bold",
                    pcs17Align: "Center",
                    pcs17CanEdit: 0,
                    pcs17Wrap: 1,

                    pcs18: $scope.Variables.statOrdSize.dataSet[17].sizedes,
                    pcs18Type: "Text",
                    pcs18Class: "bold",
                    pcs18Align: "Center",
                    pcs18CanEdit: 0,
                    pcs18Wrap: 1,

                    pcs19: $scope.Variables.statOrdSize.dataSet[18].sizedes,
                    pcs19Type: "Text",
                    pcs19Class: "bold",
                    pcs19Align: "Center",
                    pcs19CanEdit: 0,
                    pcs19Wrap: 1,

                    pcs20: $scope.Variables.statOrdSize.dataSet[19].sizedes,
                    pcs20Type: "Text",
                    pcs20Class: "bold",
                    pcs20Align: "Center",
                    pcs20CanEdit: 0,
                    pcs20Wrap: 1,

                    pcs21: $scope.Variables.statOrdSize.dataSet[20].sizedes,
                    pcs21Type: "Text",
                    pcs21Class: "bold",
                    pcs21Align: "Center",
                    pcs21CanEdit: 0,
                    pcs21Wrap: 1,

                    pcs22: $scope.Variables.statOrdSize.dataSet[21].sizedes,
                    pcs22Type: "Text",
                    pcs22Class: "bold",
                    pcs22Align: "Center",
                    pcs22CanEdit: 0,
                    pcs22Wrap: 1,

                    pcs23: $scope.Variables.statOrdSize.dataSet[22].sizedes,
                    pcs23Type: "Text",
                    pcs23Class: "bold",
                    pcs23Align: "Center",
                    pcs23CanEdit: 0,
                    pcs23Wrap: 1,

                    pcs24: $scope.Variables.statOrdSize.dataSet[23].sizedes,
                    pcs24Type: "Text",
                    pcs24Class: "bold",
                    pcs24Align: "Center",
                    pcs24CanEdit: 0,
                    pcs24Wrap: 1,

                    pcs25: $scope.Variables.statOrdSize.dataSet[24].sizedes,
                    pcs25Type: "Text",
                    pcs25Class: "bold",
                    pcs25Align: "Center",
                    pcs25CanEdit: 0,
                    pcs25Wrap: 1,

                    pcs26: $scope.Variables.statOrdSize.dataSet[25].sizedes,
                    pcs26Type: "Text",
                    pcs26Class: "bold",
                    pcs26Align: "Center",
                    pcs26CanEdit: 0,
                    pcs26Wrap: 1,

                    pcs27: $scope.Variables.statOrdSize.dataSet[26].sizedes,
                    pcs27Type: "Text",
                    pcs27Class: "bold",
                    pcs27Align: "Center",
                    pcs27CanEdit: 0,
                    pcs27Wrap: 1,

                    pcs28: $scope.Variables.statOrdSize.dataSet[27].sizedes,
                    pcs28Type: "Text",
                    pcs28Class: "bold",
                    pcs28Align: "Center",
                    pcs28CanEdit: 0,
                    pcs28Wrap: 1,

                    pcs29: $scope.Variables.statOrdSize.dataSet[28].sizedes,
                    pcs29Type: "Text",
                    pcs29Class: "bold",
                    pcs29Align: "Center",
                    pcs29CanEdit: 0,
                    pcs29Wrap: 1,

                    pcs30: $scope.Variables.statOrdSize.dataSet[29].sizedes,
                    pcs30Type: "Text",
                    pcs30Class: "bold",
                    pcs30Align: "Center",
                    pcs30CanEdit: 0,
                    pcs30Wrap: 1,

                    pcs31: $scope.Variables.statOrdSize.dataSet[30].sizedes,
                    pcs31Type: "Text",
                    pcs31Class: "bold",
                    pcs31Align: "Center",
                    pcs31CanEdit: 0,
                    pcs31Wrap: 1,

                    pcs32: $scope.Variables.statOrdSize.dataSet[31].sizedes,
                    pcs32Type: "Text",
                    pcs32Class: "bold",
                    pcs32Align: "Center",
                    pcs32CanEdit: 0,
                    pcs32Wrap: 1,

                    pcs33: $scope.Variables.statOrdSize.dataSet[32].sizedes,
                    pcs33Type: "Text",
                    pcs33Class: "bold",
                    pcs33Align: "Center",
                    pcs33CanEdit: 0,
                    pcs33Wrap: 1,

                    pcs34: $scope.Variables.statOrdSize.dataSet[33].sizedes,
                    pcs34Type: "Text",
                    pcs34Class: "bold",
                    pcs34Align: "Center",
                    pcs34CanEdit: 0,
                    pcs34Wrap: 1,

                    pcs35: $scope.Variables.statOrdSize.dataSet[34].sizedes,
                    pcs35Type: "Text",
                    pcs35Class: "bold",
                    pcs35Align: "Center",
                    pcs35CanEdit: 0,
                    pcs35Wrap: 1,

                    pcs36: $scope.Variables.statOrdSize.dataSet[35].sizedes,
                    pcs36Type: "Text",
                    pcs36Class: "bold",
                    pcs36Align: "Center",
                    pcs36CanEdit: 0,
                    pcs36Wrap: 1,

                    pcs37: $scope.Variables.statOrdSize.dataSet[36].sizedes,
                    pcs37Type: "Text",
                    pcs37Class: "bold",
                    pcs37Align: "Center",
                    pcs37CanEdit: 0,
                    pcs37Wrap: 1,

                    pcs38: $scope.Variables.statOrdSize.dataSet[37].sizedes,
                    pcs38Type: "Text",
                    pcs38Class: "bold",
                    pcs38Align: "Center",
                    pcs38CanEdit: 0,
                    pcs38Wrap: 1,

                    pcs39: $scope.Variables.statOrdSize.dataSet[38].sizedes,
                    pcs39Type: "Text",
                    pcs39Class: "bold",
                    pcs39Align: "Center",
                    pcs39CanEdit: 0,
                    pcs39Wrap: 1,

                    pcs40: $scope.Variables.statOrdSize.dataSet[39].sizedes,
                    pcs40Type: "Text",
                    pcs40Class: "bold",
                    pcs40Align: "Center",
                    pcs40CanEdit: 0,
                    pcs40Wrap: 1,

                    pcs41: $scope.Variables.statOrdSize.dataSet[40].sizedes,
                    pcs41Type: "Text",
                    pcs41Class: "bold",
                    pcs41Align: "Center",
                    pcs41CanEdit: 0,
                    pcs41Wrap: 1,

                    pcs42: $scope.Variables.statOrdSize.dataSet[41].sizedes,
                    pcs42Type: "Text",
                    pcs42Class: "bold",
                    pcs42Align: "Center",
                    pcs42CanEdit: 0,
                    pcs42Wrap: 1,

                    pcs43: $scope.Variables.statOrdSize.dataSet[42].sizedes,
                    pcs43Type: "Text",
                    pcs43Class: "bold",
                    pcs43Align: "Center",
                    pcs43CanEdit: 0,
                    pcs43Wrap: 1,

                    pcs44: $scope.Variables.statOrdSize.dataSet[43].sizedes,
                    pcs44Type: "Text",
                    pcs44Class: "bold",
                    pcs44Align: "Center",
                    pcs44CanEdit: 0,
                    pcs44Wrap: 1,

                    pcs45: $scope.Variables.statOrdSize.dataSet[44].sizedes,
                    pcs45Type: "Text",
                    pcs45Class: "bold",
                    pcs45Align: "Center",
                    pcs45CanEdit: 0,
                    pcs45Wrap: 1,

                    pcs46: $scope.Variables.statOrdSize.dataSet[45].sizedes,
                    pcs46Type: "Text",
                    pcs46Class: "bold",
                    pcs46Align: "Center",
                    pcs46CanEdit: 0,
                    pcs46Wrap: 1,

                    pcs47: $scope.Variables.statOrdSize.dataSet[46].sizedes,
                    pcs47Type: "Text",
                    pcs47Class: "bold",
                    pcs47Align: "Center",
                    pcs47CanEdit: 0,
                    pcs47Wrap: 1,

                    pcs48: $scope.Variables.statOrdSize.dataSet[47].sizedes,
                    pcs48Type: "Text",
                    pcs48Class: "bold",
                    pcs48Align: "Center",
                    pcs48CanEdit: 0,
                    pcs48Wrap: 1


                },

                {

                    Spanned: 1,
                    id: "Header",
                    Class: "control-label",
                    fabseq: "Seq",
                    fabseqAlign: "Center",

                    fabtyp: "Type",
                    fabtypAlign: "Center",

                    fabind: "Ind",
                    fabIndAlign: "Center",


                    dyejob: "Dyejob",
                    dyejobAlign: "Center",

                    cutseq: "Cut\nSeq",
                    cutseqAlign: "Center",

                    fabclrdes: "Job\nColour",
                    fabclrdesAlign: "Left",
                    fabclrdesWrap: 1,

                    makind: "Main\nComp",
                    makindAlign: "Center",

                    cutdate: "Cut\nDate",
                    cutdateAlign: "Center",

                    kgs: "Kgs\nRecv",
                    kgsAlign: "Right",

                    kgscut: "Kgs\nCut",
                    kgscutAlign: "Center",

                    cutavg: "Cut\nAvg",
                    cutavgAlign: "Center",

                    dyejobTotpcscut: "Total\nPcs cut",
                    dyejobTotpcscutAlign: "Center",
                    // clirefRowSpan: 2,
                    //    clirefWrap: 1,

                    totalOrderPcscut: "Total Order\nPcs Cut",
                    totalOrderPcscutAlign: "Center",

                    pcs1: $scope.Variables.statOrdSize.dataSet[0].clireflectra,
                    pcs1Align: "Center",
                    pcs1Wrap: 1,

                    pcs2: $scope.Variables.statOrdSize.dataSet[1].clireflectra,
                    pcs2Align: "Center",
                    pcs2Wrap: 1,

                    pcs3: $scope.Variables.statOrdSize.dataSet[2].clireflectra,
                    pcs3Align: "Center",
                    pcs3Wrap: 1,

                    pcs4: $scope.Variables.statOrdSize.dataSet[3].clireflectra,
                    pcs4Align: "Center",
                    pcs4Wrap: 1,

                    pcs5: $scope.Variables.statOrdSize.dataSet[4].clireflectra,
                    pcs5Align: "Center",
                    pcs5Wrap: 1,

                    pcs6: $scope.Variables.statOrdSize.dataSet[5].clireflectra,
                    pcs6Align: "Center",
                    pcs6Wrap: 1,

                    pcs7: $scope.Variables.statOrdSize.dataSet[6].clireflectra,
                    pcs7Align: "Center",
                    pcs7Wrap: 1,

                    pcs8: $scope.Variables.statOrdSize.dataSet[7].clireflectra,
                    pcs8Align: "Center",
                    pcs8Wrap: 1,

                    pcs9: $scope.Variables.statOrdSize.dataSet[8].clireflectra,
                    pcs9Align: "Center",
                    pcs9Wrap: 1,

                    pcs10: $scope.Variables.statOrdSize.dataSet[9].clireflectra,
                    pcs10Align: "Center",
                    pcs10Wrap: 1,

                    pcs11: $scope.Variables.statOrdSize.dataSet[10].clireflectra,
                    pcs11Align: "Center",
                    pcs11Wrap: 1,

                    pcs12: $scope.Variables.statOrdSize.dataSet[11].clireflectra,
                    pcs12Align: "Center",
                    pcs12Wrap: 1,

                    pcs13: $scope.Variables.statOrdSize.dataSet[12].clireflectra,
                    pcs13Align: "Center",
                    pcs13Wrap: 1,

                    pcs14: $scope.Variables.statOrdSize.dataSet[13].clireflectra,
                    pcs14Align: "Center",
                    pcs14Wrap: 1,

                    pcs15: $scope.Variables.statOrdSize.dataSet[14].clireflectra,
                    pcs15Align: "Center",
                    pcs15Wrap: 1,

                    pcs16: $scope.Variables.statOrdSize.dataSet[15].clireflectra,
                    pcs16Align: "Center",
                    pcs16Wrap: 1,

                    pcs17: $scope.Variables.statOrdSize.dataSet[16].clireflectra,
                    pcs17Align: "Center",
                    pcs17Wrap: 1,

                    pcs18: $scope.Variables.statOrdSize.dataSet[17].clireflectra,
                    pcs18Align: "Center",
                    pcs18Wrap: 1,

                    pcs19: $scope.Variables.statOrdSize.dataSet[18].clireflectra,
                    pcs19Align: "Center",
                    pcs19Wrap: 1,

                    pcs20: $scope.Variables.statOrdSize.dataSet[19].clireflectra,
                    pcs20Align: "Center",
                    pcs20Wrap: 1,

                    pcs21: $scope.Variables.statOrdSize.dataSet[20].clireflectra,
                    pcs21Align: "Center",
                    pcs21Wrap: 1,

                    pcs22: $scope.Variables.statOrdSize.dataSet[21].clireflectra,
                    pcs22Align: "Center",
                    pcs22Wrap: 1,

                    pcs23: $scope.Variables.statOrdSize.dataSet[22].clireflectra,
                    pcs23Align: "Center",
                    pcs23Wrap: 1,

                    pcs24: $scope.Variables.statOrdSize.dataSet[23].clireflectra,
                    pcs24Align: "Center",
                    pcs24Wrap: 1,

                    pcs25: $scope.Variables.statOrdSize.dataSet[24].clireflectra,
                    pcs25Align: "Center",
                    pcs25Wrap: 1,

                    pcs26: $scope.Variables.statOrdSize.dataSet[25].clireflectra,
                    pcs26Align: "Center",
                    pcs26Wrap: 1,

                    pcs27: $scope.Variables.statOrdSize.dataSet[26].clireflectra,
                    pcs27Align: "Center",
                    pcs27Wrap: 1,

                    pcs28: $scope.Variables.statOrdSize.dataSet[27].clireflectra,
                    pcs28Align: "Center",
                    pcs28Wrap: 1,

                    pcs29: $scope.Variables.statOrdSize.dataSet[28].clireflectra,
                    pcs29Align: "Center",
                    pcs29Wrap: 1,

                    pcs30: $scope.Variables.statOrdSize.dataSet[29].clireflectra,
                    pcs30Align: "Center",
                    pcs30Wrap: 1,

                    pcs31: $scope.Variables.statOrdSize.dataSet[30].clireflectra,
                    pcs31Align: "Center",
                    pcs31Wrap: 1,

                    pcs32: $scope.Variables.statOrdSize.dataSet[31].clireflectra,
                    pcs32Align: "Center",
                    pcs32Wrap: 1,

                    pcs33: $scope.Variables.statOrdSize.dataSet[32].clireflectra,
                    pcs33Align: "Center",
                    pcs33Wrap: 1,

                    pcs34: $scope.Variables.statOrdSize.dataSet[33].clireflectra,
                    pcs34Align: "Center",
                    pcs34Wrap: 1,

                    pcs35: $scope.Variables.statOrdSize.dataSet[34].clireflectra,
                    pcs35Align: "Center",
                    pcs35Wrap: 1,

                    pcs36: $scope.Variables.statOrdSize.dataSet[35].clireflectra,
                    pcs36Align: "Center",
                    pcs36Wrap: 1,

                    pcs37: $scope.Variables.statOrdSize.dataSet[36].clireflectra,
                    pcs37Align: "Center",
                    pcs37Wrap: 1,

                    pcs38: $scope.Variables.statOrdSize.dataSet[37].clireflectra,
                    pcs38Align: "Center",
                    pcs38Wrap: 1,

                    pcs39: $scope.Variables.statOrdSize.dataSet[38].clireflectra,
                    pcs39Align: "Center",
                    pcs39Wrap: 1,

                    pcs40: $scope.Variables.statOrdSize.dataSet[39].clireflectra,
                    pcs40Align: "Center",
                    pcs40Wrap: 1,

                    pcs41: $scope.Variables.statOrdSize.dataSet[40].clireflectra,
                    pcs41Align: "Center",
                    pcs41Wrap: 1,

                    pcs42: $scope.Variables.statOrdSize.dataSet[41].clireflectra,
                    pcs42Align: "Center",
                    pcs42Wrap: 1,

                    pcs43: $scope.Variables.statOrdSize.dataSet[42].clireflectra,
                    pcs43Align: "Center",
                    pcs43Wrap: 1,

                    pcs44: $scope.Variables.statOrdSize.dataSet[43].clireflectra,
                    pcs44Align: "Center",
                    pcs44Wrap: 1,

                    pcs45: $scope.Variables.statOrdSize.dataSet[44].clireflectra,
                    pcs45Align: "Center",
                    pcs45Wrap: 1,

                    pcs46: $scope.Variables.statOrdSize.dataSet[45].clireflectra,
                    pcs46Align: "Center",
                    pcs46Wrap: 1,

                    pcs47: $scope.Variables.statOrdSize.dataSet[46].clireflectra,
                    pcs47Align: "Center",
                    pcs47Wrap: 1,

                    pcs48: $scope.Variables.statOrdSize.dataSet[47].clireflectra,
                    pcs48Align: "Center",
                    pcs48Wrap: 1


                }
            ],

            Foot: [
                //total pcs cut
                {
                    Spanned: 1,
                    Calculated: 1,
                    Class: "control-label text-info",
                    Visible: ($scope.Widgets.radioset1.datavalue == 'CONTRAST') ? 0 : 1,

                    dyejob: "Total Pcs Cut :  ",
                    dyejobClass: "displayPrompt",
                    dyejobSpan: 11,
                    dyejobAligh: "Right",

                    /*cutdate: "Total Pcs Cut :  ",
                    cutdateClass: "displayPrompt",
                    cutdateSpan: 2,
                    cutdateAligh: "Right",*/

                    CanEdit: 0,
                    CanCopy: 0,
                    CanDelete: 0,

                    dyejobTotpcscut: "Float",
                    dyejobTotpcscutFormula: "sum()",
                    dyejobTotpcscutFormat: ",0",

                    pcs1: "Float",
                    pcs1Formula: "sum()",
                    pcs1Format: ",0",

                    pcs2: "Float",
                    pcs2Formula: "sum()",
                    pcs2Format: ",0",

                    pcs3: "Float",
                    pcs3Formula: "sum()",
                    pcs3Format: ",0",

                    pcs4: "Float",
                    pcs4Formula: "sum()",
                    pcs4Format: ",0",

                    pcs5: "Float",
                    pcs5Formula: "sum()",
                    pcs5Format: ",0",

                    pcs6: "Float",
                    pcs6Formula: "sum()",
                    pcs6Format: ",0",

                    pcs7: "Float",
                    pcs7Formula: "sum()",
                    pcs7Format: ",0",

                    pcs8: "Float",
                    pcs8Formula: "sum()",
                    pcs8Format: ",0",

                    pcs9: "Float",
                    pcs9Formula: "sum()",
                    pcs9Format: ",0",

                    pcs10: "Float",
                    pcs10Formula: "sum()",
                    pcs10Format: ",0",

                    pcs11: "Float",
                    pcs11Formula: "sum()",
                    pcs11Format: ",0",

                    pcs12: "Float",
                    pcs12Formula: "sum()",
                    pcs12Format: ",0",

                    pcs13: "Float",
                    pcs13Formula: "sum()",
                    pcs13Format: ",0",

                    pcs14: "Float",
                    pcs14Formula: "sum()",
                    pcs14Format: ",0",

                    pcs15: "Float",
                    pcs15Formula: "sum()",
                    pcs15Format: ",0",

                    pcs16: "Float",
                    pcs16Formula: "sum()",
                    pcs16Format: ",0",

                    pcs17: "Float",
                    pcs17Formula: "sum()",
                    pcs17Format: ",0",

                    pcs18: "Float",
                    pcs18Formula: "sum()",
                    pcs18Format: ",0",

                    pcs19: "Float",
                    pcs19Formula: "sum()",
                    pcs19Format: ",0",

                    pcs20: "Float",
                    pcs20Formula: "sum()",
                    pcs20Format: ",0",

                    pcs21: "Float",
                    pcs21Formula: "sum()",
                    pcs21Format: ",0",

                    pcs22: "Float",
                    pcs22Formula: "sum()",
                    pcs22Format: ",0",

                    pcs23: "Float",
                    pcs23Formula: "sum()",
                    pcs23Format: ",0",

                    pcs24: "Float",
                    pcs24Formula: "sum()",
                    pcs24Format: ",0",

                    pcs25: "Float",
                    pcs25Formula: "sum()",
                    pcs25Format: ",0",

                    pcs26: "Float",
                    pcs26Formula: "sum()",
                    pcs26Format: ",0",

                    pcs27: "Float",
                    pcs27Formula: "sum()",
                    pcs27Format: ",0",

                    pcs28: "Float",
                    pcs28Formula: "sum()",
                    pcs28Format: ",0",

                    pcs29: "Float",
                    pcs29Formula: "sum()",
                    pcs29Format: ",0",

                    pcs30: "Float",
                    pcs30Formula: "sum()",
                    pcs30Format: ",0",

                    pcs31: "Float",
                    pcs31Formula: "sum()",
                    pcs31Format: ",0",

                    pcs32: "Float",
                    pcs32Formula: "sum()",
                    pcs32Format: ",0",

                    pcs33: "Float",
                    pcs33Formula: "sum()",
                    pcs33Format: ",0",

                    pcs34: "Float",
                    pcs34Formula: "sum()",
                    pcs34Format: ",0",

                    pcs35: "Float",
                    pcs35Formula: "sum()",
                    pcs35Format: ",0",

                    pcs36: "Float",
                    pcs36Formula: "sum()",
                    pcs36Format: ",0",

                    pcs37: "Float",
                    pcs37Formula: "sum()",
                    pcs37Format: ",0",

                    pcs38: "Float",
                    pcs38Formula: "sum()",
                    pcs38Format: ",0",

                    pcs39: "Float",
                    pcs39Formula: "sum()",
                    pcs39Format: ",0",

                    pcs40: "Float",
                    pcs40Formula: "sum()",
                    pcs40Format: ",0",

                    pcs41: "Float",
                    pcs41Formula: "sum()",
                    pcs41Format: ",0",

                    pcs42: "Float",
                    pcs42Formula: "sum()",
                    pcs42Format: ",0",

                    pcs43: "Float",
                    pcs43Formula: "sum()",
                    pcs43Format: ",0",

                    pcs44: "Float",
                    pcs44Formula: "sum()",
                    pcs44Format: ",0",

                    pcs45: "Float",
                    pcs45Formula: "sum()",
                    pcs45Format: ",0",

                    pcs46: "Float",
                    pcs46Formula: "sum()",
                    pcs46Format: ",0",

                    pcs47: "Float",
                    pcs47Formula: "sum()",
                    pcs47Format: ",0",

                    pcs48: "Float",
                    pcs48Formula: "sum()",
                    pcs48Format: ",0",

                    kgscut: "Float",
                    kgscutFormula: "sum()",
                    kgscutVisible: 0,

                    fabseq: "Float",
                    fabseqFormula: "count()",
                    fabseqVisible: 0

                },

                // total qtyord
                {
                    Spanned: 1,
                    Calculated: 1,
                    Class: "control-label text-info",
                    Visible: ($scope.Widgets.radioset1.datavalue == 'CONTRAST') ? 0 : 1,

                    dyejob: "Total Pcs Required :  ",
                    dyejobClass: "displayPrompt",
                    dyejobSpan: 11,
                    dyejobAligh: "Right",


                    /*for main,rib,trims, cut avg = totpcscut/totkgscut . recalculate as a formula in treegrid
                      for contrasts, cut avg = (totpcscut/gmtpermat)/totkgscut. display avgcutavgfabclr from package which is already calculated as per fabseq
                    */

                    avgcutavgFabclr: "Float",
                    avgcutavgFabclrFormula: "(AR2.kgscut>0)?(AR2.dyejobTotpcscut/AR2.kgscut):0",
                    avgcutavgFabclrType: "Float",
                    avgcutavgFabclrFormat: ",0.00",
                    avgcutavgFabclrAlign: "Left",


                    /*cutdate: "Total Pcs Required :  ",
                    cutdateClass: "displayPrompt",
                    cutdateSpan: 3,
                    cutdateAligh: "Right",*/

                    CanEdit: 0,
                    CanCopy: 0,
                    CanDelete: 0,

                    dyejobTotpcscut: $scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutQtyord[0].totpcs,
                    dyejobTotpcscutType: "Int",
                    dyejobTotpcscutFormat: ",0",


                    pcs1: m_qtyord1,
                    pcs1Type: "Int",
                    pcs1Format: ",0",

                    pcs2: m_qtyord2,
                    pcs2Type: "Int",
                    pcs2Format: ",0",


                    pcs3: m_qtyord3,
                    pcs3Type: "Int",
                    pcs3Format: ",0",

                    pcs4: m_qtyord4,
                    pcs4Type: "Int",
                    pcs4Format: ",0",


                    pcs5: m_qtyord5,
                    pcs5Type: "Int",
                    pcs5Format: ",0",

                    pcs6: m_qtyord6,
                    pcs6Type: "Int",
                    pcs6Format: ",0",

                    pcs7: m_qtyord7,
                    pcs7Type: "Int",
                    pcs7Format: ",0",

                    pcs8: m_qtyord8,
                    pcs8Type: "Int",
                    pcs8Format: ",0",

                    pcs9: m_qtyord9,
                    pcs9Type: "Int",
                    pcs9Format: ",0",

                    pcs10: m_qtyord10,
                    pcs10Type: "Int",
                    pcs10Format: ",0",

                    pcs11: m_qtyord11,
                    pcs11Type: "Int",
                    pcs11Format: ",0",

                    pcs12: m_qtyord12,
                    pcs12Type: "Int",
                    pcs12Format: ",0",

                    pcs13: m_qtyord13,
                    pcs13Type: "Int",
                    pcs13Format: ",0",

                    pcs14: m_qtyord14,
                    pcs14Type: "Int",
                    pcs14Format: ",0",

                    pcs15: m_qtyord15,
                    pcs15Type: "Int",
                    pcs15Format: ",0",

                    pcs16: m_qtyord16,
                    pcs16Type: "Int",
                    pcs16Format: ",0",

                    pcs17: m_qtyord17,
                    pcs17Type: "Int",
                    pcs17Format: ",0",

                    pcs18: m_qtyord18,
                    pcs18Type: "Int",
                    pcs18Format: ",0",

                    pcs19: m_qtyord19,
                    pcs19Type: "Int",
                    pcs19Format: ",0",

                    pcs20: m_qtyord20,
                    pcs20Type: "Int",
                    pcs20Format: ",0",

                    pcs21: m_qtyord21,
                    pcs21Type: "Int",
                    pcs21Format: ",0",

                    pcs22: m_qtyord22,
                    pcs22Type: "Int",
                    pcs22Format: ",0",

                    pcs23: m_qtyord23,
                    pcs23Type: "Int",
                    pcs23Format: ",0",

                    pcs24: m_qtyord24,
                    pcs24Type: "Int",
                    pcs24Format: ",0",

                    pcs25: m_qtyord25,
                    pcs25Type: "Int",
                    pcs25Format: ",0",

                    pcs26: m_qtyord26,
                    pcs26Type: "Int",
                    pcs26Format: ",0",

                    pcs27: m_qtyord27,
                    pcs27Type: "Int",
                    pcs27Format: ",0",

                    pcs28: m_qtyord28,
                    pcs28Type: "Int",
                    pcs28Format: ",0",

                    pcs29: m_qtyord29,
                    pcs29Type: "Int",
                    pcs29Format: ",0",

                    pcs30: m_qtyord30,
                    pcs30Type: "Int",
                    pcs30Format: ",0",

                    pcs31: m_qtyord31,
                    pcs31Type: "Int",
                    pcs31Format: ",0",

                    pcs32: m_qtyord32,
                    pcs32Type: "Int",
                    pcs32Format: ",0",

                    pcs33: m_qtyord33,
                    pcs33Type: "Int",
                    pcs33Format: ",0",

                    pcs34: m_qtyord34,
                    pcs34Type: "Int",
                    pcs34Format: ",0",

                    pcs35: m_qtyord35,
                    pcs35Type: "Int",
                    pcs35Format: ",0",

                    pcs36: m_qtyord36,
                    pcs36Type: "Int",
                    pcs36Format: ",0",

                    pcs37: m_qtyord37,
                    pcs37Type: "Int",
                    pcs37Format: ",0",

                    pcs38: m_qtyord38,
                    pcs38Type: "Int",
                    pcs38Format: ",0",

                    pcs39: m_qtyord39,
                    pcs39Type: "Int",
                    pcs39Format: ",0",

                    pcs40: m_qtyord40,
                    pcs40Type: "Int",
                    pcs40Format: ",0",

                    pcs41: m_qtyord41,
                    pcs41Type: "Int",
                    pcs41Format: ",0",

                    pcs42: m_qtyord42,
                    pcs42Type: "Int",
                    pcs42Format: ",0",

                    pcs43: m_qtyord43,
                    pcs43Type: "Int",
                    pcs43Format: ",0",

                    pcs44: m_qtyord44,
                    pcs44Type: "Int",
                    pcs44Format: ",0",

                    pcs45: m_qtyord45,
                    pcs45Type: "Int",
                    pcs45Format: ",0",

                    pcs46: m_qtyord46,
                    pcs46Type: "Int",
                    pcs46Format: ",0",

                    pcs47: m_qtyord47,
                    pcs47Type: "Int",
                    pcs47Format: ",0",

                    pcs48: m_qtyord48,
                    pcs48Type: "Int",
                    pcs48Format: ",0"

                },

                // balance

                //Note of caution: balances have been calculated by referencing the row number of the tree grid. AR3 is the row "total pcs required".  
                //This row will change if ever headers are added on top of the tree grid or rows are added in the foot section of the grid. The repeating rows of data are to be ignored when counting row number.

                // Row number starts at AR0.
                // i.e AR0  -> header 1, AR1 -> header 2, 
                // AR2 -> foot section "total pcs cut", 
                // AR3 -> foot section "total pcs reqd", 
                // AR4 -> foot section balance, 
                // AR5 -> foot section "% completed"

                {
                    Spanned: 1,
                    Calculated: 1,
                    Class: "control-label text-info",
                    Visible: ($scope.Widgets.radioset1.datavalue == 'CONTRAST') ? 0 : 1,

                    dyejob: "Balance :  ",
                    dyejobClass: "displayPrompt",
                    dyejobSpan: 11,
                    dyejobAligh: "Right",

                    CanEdit: 0,
                    CanCopy: 0,
                    CanDelete: 0,

                    dyejobTotpcscut: "Float",
                    dyejobTotpcscutFormula: "(AR3.dyejobTotpcscut>0)?(AR3.dyejobTotpcscut - sum()):0",
                    dyejobTotpcscutType: "Float",
                    dyejobTotpcscutFormat: ",0",


                    pcs1: "Float",
                    pcs1Formula: "(AR3.pcs1>0)?(AR3.pcs1 - sum()):0",
                    pcs1Type: "Float",
                    pcs1Format: ",0",
                    pcs1ClassFormula: "(Value>0)?'red-l3':''",


                    pcs2: "Float",
                    pcs2Formula: "(AR3.pcs2>0)?(AR3.pcs2 - sum()):0",
                    pcs2Type: "Float",
                    pcs2Format: ",0",
                    pcs2ClassFormula: "(Value>0)?'red-l3':''",


                    pcs3: "Float",
                    pcs3Formula: "(AR3.pcs3>0)?(AR3.pcs3 - sum()):0",
                    pcs3Type: "Float",
                    pcs3Format: ",0",
                    pcs3ClassFormula: "(Value>0)?'red-l3':''",


                    pcs4: "Float",
                    pcs4Formula: "(AR3.pcs4>0)?(AR3.pcs4 - sum()):0",
                    pcs4Type: "Float",
                    pcs4Format: ",0",
                    pcs4ClassFormula: "(Value>0)?'red-l3':''",


                    pcs5: "Float",
                    pcs5Formula: "(AR3.pcs5>0)?(AR3.pcs5 - sum()):0",
                    pcs5Type: "Float",
                    pcs5Format: ",0",
                    pcs5ClassFormula: "(Value>0)?'red-l3':''",


                    pcs6: "Float",
                    pcs6Formula: "(AR3.pcs6>0)?(AR3.pcs6 - sum()):0",
                    pcs6Type: "Float",
                    pcs6Format: ",0",
                    pcs6ClassFormula: "(Value>0)?'red-l3':''",


                    pcs7: "Float",
                    pcs7Formula: "(AR3.pcs7>0)?(AR3.pcs7 - sum()):0",
                    pcs7Type: "Float",
                    pcs7Format: ",0",
                    pcs7ClassFormula: "(Value>0)?'red-l3':''",


                    pcs8: "Float",
                    pcs8Formula: "(AR3.pcs8>0)?(AR3.pcs8 - sum()):0",
                    pcs8Type: "Float",
                    pcs8Format: ",0",
                    pcs8ClassFormula: "(Value>0)?'red-l3':''",


                    pcs9: "Float",
                    pcs9Formula: "(AR3.pcs9>0)?(AR3.pcs9 - sum()):0",
                    pcs9Type: "Float",
                    pcs9Format: ",0",
                    pcs9ClassFormula: "(Value>0)?'red-l3':''",


                    pcs10: "Float",
                    pcs10Formula: "(AR3.pcs10>0)?(AR3.pcs10 - sum()):0",
                    pcs10Type: "Float",
                    pcs10Format: ",0",
                    pcs10ClassFormula: "(Value>0)?'red-l3':''",


                    pcs11: "Float",
                    pcs11Formula: "(AR3.pcs11>0)?(AR3.pcs11 - sum()):0",
                    pcs11Type: "Float",
                    pcs11Format: ",0",
                    pcs11ClassFormula: "(Value>0)?'red-l3':''",


                    pcs12: "Float",
                    pcs12Formula: "(AR3.pcs12>0)?(AR3.pcs12 - sum()):0",
                    pcs12Type: "Float",
                    pcs12Format: ",0",
                    pcs12ClassFormula: "(Value>0)?'red-l3':''",


                    pcs13: "Float",
                    pcs13Formula: "(AR3.pcs13>0)?(AR3.pcs13 - sum()):0",
                    pcs13Type: "Float",
                    pcs13Format: ",0",
                    pcs13ClassFormula: "(Value>0)?'red-l3':''",


                    pcs14: "Float",
                    pcs14Formula: "(AR3.pcs14>0)?(AR3.pcs14 - sum()):0",
                    pcs14Type: "Float",
                    pcs14Format: ",0",
                    pcs14ClassFormula: "(Value>0)?'red-l3':''",


                    pcs15: "Float",
                    pcs15Formula: "(AR3.pcs15>0)?(AR3.pcs15 - sum()):0",
                    pcs15Type: "Float",
                    pcs15Format: ",0",
                    pcs15ClassFormula: "(Value>0)?'red-l3':''",


                    pcs16: "Float",
                    pcs16Formula: "(AR3.pcs16>0)?(AR3.pcs16 - sum()):0",
                    pcs16Type: "Float",
                    pcs16Format: ",0",
                    pcs16ClassFormula: "(Value>0)?'red-l3':''",


                    pcs17: "Float",
                    pcs17Formula: "(AR3.pcs17>0)?(AR3.pcs17 - sum()):0",
                    pcs17Type: "Float",
                    pcs17Format: ",0",
                    pcs17ClassFormula: "(Value>0)?'red-l3':''",


                    pcs18: "Float",
                    pcs18Formula: "(AR3.pcs18>0)?(AR3.pcs18 - sum()):0",
                    pcs18Type: "Float",
                    pcs18Format: ",0",
                    pcs18ClassFormula: "(Value>0)?'red-l3':''",


                    pcs19: "Float",
                    pcs19Formula: "(AR3.pcs19>0)?(AR3.pcs19 - sum()):0",
                    pcs19Type: "Float",
                    pcs19Format: ",0",
                    pcs19ClassFormula: "(Value>0)?'red-l3':''",


                    pcs20: "Float",
                    pcs20Formula: "(AR3.pcs20>0)?(AR3.pcs20 - sum()):0",
                    pcs20Type: "Float",
                    pcs20Format: ",0",
                    pcs20ClassFormula: "(Value>0)?'red-l3':''",


                    pcs21: "Float",
                    pcs21Formula: "(AR3.pcs21>0)?(AR3.pcs21 - sum()):0",
                    pcs21Type: "Float",
                    pcs21Format: ",0",
                    pcs21ClassFormula: "(Value>0)?'red-l3':''",


                    pcs22: "Float",
                    pcs22Formula: "(AR3.pcs22>0)?(AR3.pcs22 - sum()):0",
                    pcs22Type: "Float",
                    pcs22Format: ",0",
                    pcs22ClassFormula: "(Value>0)?'red-l3':''",


                    pcs23: "Float",
                    pcs23Formula: "(AR3.pcs23>0)?(AR3.pcs23 - sum()):0",
                    pcs23Type: "Float",
                    pcs23Format: ",0",
                    pcs23ClassFormula: "(Value>0)?'red-l3':''",


                    pcs24: "Float",
                    pcs24Formula: "(AR3.pcs24>0)?(AR3.pcs24 - sum()):0",
                    pcs24Type: "Float",
                    pcs24Format: ",0",
                    pcs24ClassFormula: "(Value>0)?'red-l3':''",

                    pcs25: "Float",
                    pcs25Formula: "(AR3.pcs25>0)?(AR3.pcs25 - sum()):0",
                    pcs25Type: "Float",
                    pcs25Format: ",0",
                    pcs25ClassFormula: "(Value>0)?'red-l3':''",


                    pcs26: "Float",
                    pcs26Formula: "(AR3.pcs26>0)?(AR3.pcs26 - sum()):0",
                    pcs26Type: "Float",
                    pcs26Format: ",0",
                    pcs26ClassFormula: "(Value>0)?'red-l3':''",


                    pcs27: "Float",
                    pcs27Formula: "(AR3.pcs27>0)?(AR3.pcs27 - sum()):0",
                    pcs27Type: "Float",
                    pcs27Format: ",0",
                    pcs27ClassFormula: "(Value>0)?'red-l3':''",


                    pcs28: "Float",
                    pcs28Formula: "(AR3.pcs28>0)?(AR3.pcs28 - sum()):0",
                    pcs28Type: "Float",
                    pcs28Format: ",0",
                    pcs28ClassFormula: "(Value>0)?'red-l3':''",


                    pcs29: "Float",
                    pcs29Formula: "(AR3.pcs29>0)?(AR3.pcs29 - sum()):0",
                    pcs29Type: "Float",
                    pcs29Format: ",0",
                    pcs29ClassFormula: "(Value>0)?'red-l3':''",


                    pcs30: "Float",
                    pcs30Formula: "(AR3.pcs30>0)?(AR3.pcs30 - sum()):0",
                    pcs30Type: "Float",
                    pcs30Format: ",0",
                    pcs30ClassFormula: "(Value>0)?'red-l3':''",


                    pcs31: "Float",
                    pcs31Formula: "(AR3.pcs31>0)?(AR3.pcs31 - sum()):0",
                    pcs31Type: "Float",
                    pcs31Format: ",0",
                    pcs31ClassFormula: "(Value>0)?'red-l3':''",


                    pcs32: "Float",
                    pcs32Formula: "(AR3.pcs32>0)?(AR3.pcs32 - sum()):0",
                    pcs32Type: "Float",
                    pcs32Format: ",0",
                    pcs32ClassFormula: "(Value>0)?'red-l3':''",


                    pcs33: "Float",
                    pcs33Formula: "(AR3.pcs33>0)?(AR3.pcs33 - sum()):0",
                    pcs33Type: "Float",
                    pcs33Format: ",0",
                    pcs33ClassFormula: "(Value>0)?'red-l3':''",


                    pcs34: "Float",
                    pcs34Formula: "(AR3.pcs34>0)?(AR3.pcs34 - sum()):0",
                    pcs34Type: "Float",
                    pcs34Format: ",0",
                    pcs34ClassFormula: "(Value>0)?'red-l3':''",


                    pcs35: "Float",
                    pcs35Formula: "(AR3.pcs35>0)?(AR3.pcs35 - sum()):0",
                    pcs35Type: "Float",
                    pcs35Format: ",0",
                    pcs35ClassFormula: "(Value>0)?'red-l3':''",


                    pcs36: "Float",
                    pcs36Formula: "(AR3.pcs36>0)?(AR3.pcs36 - sum()):0",
                    pcs36Type: "Float",
                    pcs36Format: ",0",
                    pcs36ClassFormula: "(Value>0)?'red-l3':''",


                    pcs37: "Float",
                    pcs37Formula: "(AR3.pcs37>0)?(AR3.pcs37 - sum()):0",
                    pcs37Type: "Float",
                    pcs37Format: ",0",
                    pcs37ClassFormula: "(Value>0)?'red-l3':''",


                    pcs38: "Float",
                    pcs38Formula: "(AR3.pcs38>0)?(AR3.pcs38 - sum()):0",
                    pcs38Type: "Float",
                    pcs38Format: ",0",
                    pcs38ClassFormula: "(Value>0)?'red-l3':''",


                    pcs39: "Float",
                    pcs39Formula: "(AR3.pcs39>0)?(AR3.pcs39 - sum()):0",
                    pcs39Type: "Float",
                    pcs39Format: ",0",
                    pcs39ClassFormula: "(Value>0)?'red-l3':''",


                    pcs40: "Float",
                    pcs40Formula: "(AR3.pcs40>0)?(AR3.pcs40 - sum()):0",
                    pcs40Type: "Float",
                    pcs40Format: ",0",
                    pcs40ClassFormula: "(Value>0)?'red-l3':''",


                    pcs41: "Float",
                    pcs41Formula: "(AR3.pcs41>0)?(AR3.pcs41 - sum()):0",
                    pcs41Type: "Float",
                    pcs41Format: ",0",
                    pcs41ClassFormula: "(Value>0)?'red-l3':''",


                    pcs42: "Float",
                    pcs42Formula: "(AR3.pcs42>0)?(AR3.pcs42 - sum()):0",
                    pcs42Type: "Float",
                    pcs42Format: ",0",
                    pcs42ClassFormula: "(Value>0)?'red-l3':''",


                    pcs43: "Float",
                    pcs43Formula: "(AR3.pcs43>0)?(AR3.pcs43 - sum()):0",
                    pcs43Type: "Float",
                    pcs43Format: ",0",
                    pcs43ClassFormula: "(Value>0)?'red-l3':''",


                    pcs44: "Float",
                    pcs44Formula: "(AR3.pcs44>0)?(AR3.pcs44 - sum()):0",
                    pcs44Type: "Float",
                    pcs44Format: ",0",
                    pcs44ClassFormula: "(Value>0)?'red-l3':''",


                    pcs45: "Float",
                    pcs45Formula: "(AR3.pcs45>0)?(AR3.pcs45 - sum()):0",
                    pcs45Type: "Float",
                    pcs45Format: ",0",
                    pcs45ClassFormula: "(Value>0)?'red-l3':''",


                    pcs46: "Float",
                    pcs46Formula: "(AR3.pcs46>0)?(AR3.pcs46 - sum()):0",
                    pcs46Type: "Float",
                    pcs46Format: ",0",
                    pcs46ClassFormula: "(Value>0)?'red-l3':''",


                    pcs47: "Float",
                    pcs47Formula: "(AR3.pcs47>0)?(AR3.pcs47 - sum()):0",
                    pcs47Type: "Float",
                    pcs47Format: ",0",
                    pcs47ClassFormula: "(Value>0)?'red-l3':''",


                    pcs48: "Float",
                    pcs48Formula: "(AR3.pcs48>0)?(AR3.pcs48 - sum()):0",
                    pcs48Type: "Float",
                    pcs48Format: ",0",
                    pcs48ClassFormula: "(Value>0)?'red-l3':''"

                },



                // completed %
                {
                    Spanned: 1,
                    Calculated: 1,
                    Class: "control-label text-info",
                    Visible: ($scope.Widgets.radioset1.datavalue == 'CONTRAST') ? 0 : 1,

                    dyejob: "Completed % :  ",
                    dyejobClass: "displayPrompt",
                    dyejobSpan: 11,
                    dyejobAligh: "Right",

                    CanEdit: 0,
                    CanCopy: 0,
                    CanDelete: 0,

                    dyejobTotpcscut: "Float",
                    dyejobTotpcscutFormula: "(AR3.dyejobTotpcscut>0)?((sum() * 100)/AR3.dyejobTotpcscut):0",
                    dyejobTotpcscutType: "Float",
                    dyejobTotpcscutFormat: ",0",

                    pcs1: "Float",
                    pcs1Formula: "(AR3.pcs1>0)?((sum() * 100)/AR3.pcs1):0",
                    pcs1Type: "Float",
                    pcs1Format: ",0",


                    pcs2: "Float",
                    pcs2Formula: "(AR3.pcs2>0)?((sum() * 100)/AR3.pcs2):0",
                    pcs2Type: "Float",
                    pcs2Format: ",0",

                    pcs3: "Float",
                    pcs3Formula: "(AR3.pcs3>0)?((sum() * 100)/AR3.pcs3):0",
                    pcs3Type: "Float",
                    pcs3Format: ",0",

                    pcs4: "Float",
                    pcs4Formula: "(AR3.pcs4>0)?((sum() *100)/AR3.pcs4):0",
                    pcs4Type: "Float",
                    pcs4Format: ",0",


                    pcs5: "Float",
                    pcs5Formula: "(AR3.pcs5>0)?((sum() *100)/AR3.pcs5):0",
                    pcs5Type: "Float",
                    pcs5Format: ",0",

                    pcs6: "Float",
                    pcs6Formula: "(AR3.pcs6>0)?((sum() * 100)/AR3.pcs6):0",
                    pcs6Type: "Float",
                    pcs6Format: ",0",

                    pcs7: "Float",
                    pcs7Formula: "(AR3.pcs7>0)?((sum() *100)/AR3.pcs7):0",
                    pcs7Type: "Float",
                    pcs7Format: ",0",

                    pcs8: "Float",
                    pcs8Formula: "(AR3.pcs8>0)?((sum() *100)/AR3.pcs8):0",
                    pcs8Type: "Float",
                    pcs8Format: ",0",

                    pcs9: "Float",
                    pcs9Formula: "(AR3.pcs9>0)?((sum() *100)/AR3.pcs9):0",
                    pcs9Type: "Float",
                    pcs9Format: ",0",

                    pcs10: "Float",
                    pcs10Formula: "(AR3.pcs10>0)?((sum() *100)/AR3.pcs10):0",
                    pcs10Type: "Float",
                    pcs10Format: ",0",


                    pcs11: "Float",
                    pcs11Formula: "(AR3.pcs11>0)?((sum() * 100)/AR3.pcs11):0",
                    pcs11Type: "Float",
                    pcs11Format: ",0",


                    pcs12: "Float",
                    pcs12Formula: "(AR3.pcs12>0)?((sum() * 100)/AR3.pcs12):0",
                    pcs12Type: "Float",
                    pcs12Format: ",0",


                    pcs13: "Float",
                    pcs13Formula: "(AR3.pcs13>0)?((sum() *100)/AR3.pcs13):0",
                    pcs13Type: "Float",
                    pcs13Format: ",0",


                    pcs14: "Float",
                    pcs14Formula: "(AR3.pcs14>0)?((sum() *100)/AR3.pcs14):0",
                    pcs14Type: "Float",
                    pcs14Format: ",0",


                    pcs15: "Float",
                    pcs15Formula: "(AR3.pcs15>0)?((sum() *100)/AR3.pcs15):0",
                    pcs15Type: "Float",
                    pcs15Format: ",0",


                    pcs16: "Float",
                    pcs16Formula: "(AR3.pcs16>0)?((sum() *100)/AR3.pcs16):0",
                    pcs16Type: "Float",
                    pcs16Format: ",0",


                    pcs17: "Float",
                    pcs17Formula: "(AR3.pcs17>0)?((sum() *100)/AR3.pcs17):0",
                    pcs17Type: "Float",
                    pcs17Format: ",0",


                    pcs18: "Float",
                    pcs18Formula: "(AR3.pcs18>0)?((sum() *100)/AR3.pcs18):0",
                    pcs18Type: "Float",
                    pcs18Format: ",0",


                    pcs19: "Float",
                    pcs19Formula: "(AR3.pcs19>0)?((sum() *100)/AR3.pcs19):0",
                    pcs19Type: "Float",
                    pcs19Format: ",0",


                    pcs20: "Float",
                    pcs20Formula: "(AR3.pcs20>0)?((sum() *100)/AR3.pcs20):0",
                    pcs20Type: "Float",
                    pcs20Format: ",0",


                    pcs21: "Float",
                    pcs21Formula: "(AR3.pcs21>0)?((sum() *100)/AR3.pcs21):0",
                    pcs21Type: "Float",
                    pcs21Format: ",0",


                    pcs22: "Float",
                    pcs22Formula: "(AR3.pcs22>0)?((sum() *100)/AR3.pcs22):0",
                    pcs22Type: "Float",
                    pcs22Format: ",0",


                    pcs23: "Float",
                    pcs23Formula: "(AR3.pcs23>0)?((sum() *100)/AR3.pcs23):0",
                    pcs23Type: "Float",
                    pcs23Format: ",0",


                    pcs24: "Float",
                    pcs24Formula: "(AR3.pcs24>0)?((sum() *100)/AR3.pcs24):0",
                    pcs24Type: "Float",
                    pcs24Format: ",0",


                    pcs25: "Float",
                    pcs25Formula: "(AR3.pcs25>0)?((sum() *100)/AR3.pcs25):0",
                    pcs25Type: "Float",
                    pcs25Format: ",0",


                    pcs26: "Float",
                    pcs26Formula: "(AR3.pcs26>0)?((sum() *100)/AR3.pcs26):0",
                    pcs26Type: "Float",
                    pcs26Format: ",0",


                    pcs27: "Float",
                    pcs27Formula: "(AR3.pcs27>0)?((sum() *100)/AR3.pcs27):0",
                    pcs27Type: "Float",
                    pcs27Format: ",0",


                    pcs28: "Float",
                    pcs28Formula: "(AR3.pcs28>0)?((sum() *100)/AR3.pcs28):0",
                    pcs28Type: "Float",
                    pcs28Format: ",0",


                    pcs29: "Float",
                    pcs29Formula: "(AR3.pcs29>0)?((sum() *100)/AR3.pcs29):0",
                    pcs29Type: "Float",
                    pcs29Format: ",0",


                    pcs30: "Float",
                    pcs30Formula: "(AR3.pcs30>0)?((sum() *100)/AR3.pcs30):0",
                    pcs30Type: "Float",
                    pcs30Format: ",0",


                    pcs31: "Float",
                    pcs31Formula: "(AR3.pcs31>0)?((sum() *100)/AR3.pcs31):0",
                    pcs31Type: "Float",
                    pcs31Format: ",0",


                    pcs32: "Float",
                    pcs32Formula: "(AR3.pcs32>0)?((sum() *100)/AR3.pcs32):0",
                    pcs32Type: "Float",
                    pcs32Format: ",0",


                    pcs33: "Float",
                    pcs33Formula: "(AR3.pcs33>0)?((sum() *100)/AR3.pcs33):0",
                    pcs33Type: "Float",
                    pcs33Format: ",0",


                    pcs34: "Float",
                    pcs34Formula: "(AR3.pcs34>0)?((sum() *100)/AR3.pcs34):0",
                    pcs34Type: "Float",
                    pcs34Format: ",0",


                    pcs35: "Float",
                    pcs35Formula: "(AR3.pcs35>0)?((sum() *100)/AR3.pcs35):0",
                    pcs35Type: "Float",
                    pcs35Format: ",0",


                    pcs36: "Float",
                    pcs36Formula: "(AR3.pcs36>0)?((sum() *100)/AR3.pcs36):0",
                    pcs36Type: "Float",
                    pcs36Format: ",0",


                    pcs37: "Float",
                    pcs37Formula: "(AR3.pcs37>0)?((sum() *100)/AR3.pcs37):0",
                    pcs37Type: "Float",
                    pcs37Format: ",0",


                    pcs38: "Float",
                    pcs38Formula: "(AR3.pcs38>0)?((sum() *100)/AR3.pcs38):0",
                    pcs38Type: "Float",
                    pcs38Format: ",0",


                    pcs39: "Float",
                    pcs39Formula: "(AR3.pcs39>0)?((sum() *100)/AR3.pcs39):0",
                    pcs39Type: "Float",
                    pcs39Format: ",0",


                    pcs40: "Float",
                    pcs40Formula: "(AR3.pcs40>0)?((sum() *100)/AR3.pcs40):0",
                    pcs40Type: "Float",
                    pcs40Format: ",0",


                    pcs41: "Float",
                    pcs41Formula: "(AR3.pcs41>0)?((sum() *100)/AR3.pcs41):0",
                    pcs41Type: "Float",
                    pcs41Format: ",0",


                    pcs42: "Float",
                    pcs42Formula: "(AR3.pcs42>0)?((sum() *100)/AR3.pcs42):0",
                    pcs42Type: "Float",
                    pcs42Format: ",0",


                    pcs43: "Float",
                    pcs43Formula: "(AR3.pcs43>0)?((sum() *100)/AR3.pcs43):0",
                    pcs43Type: "Float",
                    pcs43Format: ",0",


                    pcs44: "Float",
                    pcs44Formula: "(AR3.pcs44>0)?((sum() *100)/AR3.pcs44):0",
                    pcs44Type: "Float",
                    pcs44Format: ",0",


                    pcs45: "Float",
                    pcs45Formula: "(AR3.pcs45>0)?((sum() *100)/AR3.pcs45):0",
                    pcs45Type: "Float",
                    pcs45Format: ",0",


                    pcs46: "Float",
                    pcs46Formula: "(AR3.pcs46>0)?((sum() *100)/AR3.pcs46):0",
                    pcs46Type: "Float",
                    pcs46Format: ",0",


                    pcs47: "Float",
                    pcs47Formula: "(AR3.pcs47>0)?((sum() *100)/AR3.pcs47):0",
                    pcs47Type: "Float",
                    pcs47Format: ",0",


                    pcs48: "Float",
                    pcs48Formula: "(AR3.pcs48>0)?((sum() *100)/AR3.pcs48):0",
                    pcs48Type: "Float",
                    pcs48Format: ",0"


                }

            ],

            Solid: [{
                    Space: "-1",
                    Cells: "M,N,P,Q",
                    M: "To Filter the grid:",
                    N: "1.  Click on X",
                    P: "2.  Choose the type of filtering",
                    Q: "3.  Type your text and press Enter",
                    MType: "Html",
                    NType: "Html",
                    PType: "Html",
                    QType: "Html",
                    MWidth: 100,
                    NWidth: 150,
                    NAligh: "Center",
                    PWidth: 200,
                    PAligh: "Center",
                    QWidth: 200,
                    QAligh: "Center"
                }

                /*, {
                    Space: "2",
                    Cells: "tot",
                    tot: "",
                    totType: "Html",
                    totClass: "Bold"
                }*/


                /* ,{
                     Space: "3",
                     Cells: "tot",
                     tot: "Balances",
                     totType: "Html"
                 }*/
            ],

            Toolbar: {
                Link: 0,
                Visible: 1,
                //Cells: "Export,PAGER,TotRows,TotCountRows",
                Cells: "Export,PAGER",
                PAGERType: "Pager"
                //Formula: "'Found <b>'+Grid.FilterCount+'</b> results'"

                /* ,
                TotRowsType: "Html",
                TotRowsCanEdit: 0,
                TotRows: "Total records:",

                TotCountRows: "Html",
                TotCountRowsCanEdit: 0,
                TotCountRows: $scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutCutbySize.length */
                //$scope.Variables.statCountFilteredRows.dataSet.dataValue


            },

        };
        // end of var

        $scope.Variables.tgridDyejob = TreeGridHelper('tgridDyejob', {
            data: $scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutCutbySize,
            layout: gridLayout
        });

        Grids.OnFocus = $scope.tableOnFocus;


        Grids.OnKeyDown = function(grid, key, event, name, prefix) {
            $scope.Widgets.lblCutAvg_mainriblace.caption = Math.round($scope.Variables.tgridDyejob.Rows.AR3.avgcutavgFabclr * 100) / 100;
        };

        Grids.OnClickCell = function(Grid, Row, Col, Event) {
            if ($scope.Variables.tgridDyejob.Rows.AR3.avgcutavgFabclr !== undefined) {
                $scope.Widgets.lblCutAvg_mainriblace.caption = Math.round($scope.Variables.tgridDyejob.Rows.AR3.avgcutavgFabclr * 100) / 100;
            }

        }

        Grids.OnFilterFinish = function(grid, type) {
            if ($scope.Variables.tgridDyejob.Rows.AR3.avgcutavgFabclr !== undefined) {
                $scope.Widgets.lblCutAvg_mainriblace.caption = Math.round($scope.Variables.tgridDyejob.Rows.AR3.avgcutavgFabclr * 100) / 100;
            }

            $scope.Variables.statCountFilteredRows.dataSet.dataValue = grid.FilterCount;

            //  $scope.Variables.tgridDyejob.Rows.Toolbar.TotCountRows = grid.FilterCount;

            //  console.log("TotCountRows " + $scope.Variables.tgridDyejob.Rows.Toolbar.TotCountRows);
            //  console.log("Dataset length " + $scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet.poutCutbySize.length);

            // grid.RefreshCell($scope.Variables.tgridDyejob.Rows.Toolbar, "TotCountRows");

            $scope.$apply();

            /*console.log("Filter count " + grid.FilterCount);
            $scope.Variables.tgridDyejob.Rows.Toolbar.TotCountRows = grid.FilterCount;
            grid.RefreshRow($scope.Variables.tgridDyejob.Rows.Toolbar);*/

            // count of dyejob
            //$scope.Variables.statTgridCountJob.dataSet.dataValue = $scope.Variables.tgridDyejob.Rows.AR3.fabseq;
        }


    };

    //-------------------------------------------------------------------------------------------------------
    // force focus on grid
    $scope.tableOnFocus = function(grid, row, col, orow, ocol, pagepos, rect, orect) {
        $scope.Widgets.lblCutAvg_mainriblace.caption = Math.round($scope.Variables.tgridDyejob.Rows.AR3.avgcutavgFabclr * 100) / 100;

        $scope.Widgets.lblTotcomp.caption = Math.round($scope.Variables.tgridDyejob.FRow.totcomp);
        $scope.Widgets.lblComp1.caption = Math.round($scope.Variables.tgridDyejob.FRow.comp1);
        $scope.Widgets.lblComp2.caption = Math.round($scope.Variables.tgridDyejob.FRow.comp2);
        $scope.Widgets.lblComp3.caption = Math.round($scope.Variables.tgridDyejob.FRow.comp3);
        $scope.Widgets.lblComp4.caption = Math.round($scope.Variables.tgridDyejob.FRow.comp4);
        $scope.Widgets.lblComp5.caption = Math.round($scope.Variables.tgridDyejob.FRow.comp5);
        $scope.Widgets.lblComp6.caption = Math.round($scope.Variables.tgridDyejob.FRow.comp6);
        $scope.Widgets.lblComp7.caption = Math.round($scope.Variables.tgridDyejob.FRow.comp7);
        $scope.Widgets.lblComp8.caption = Math.round($scope.Variables.tgridDyejob.FRow.comp8);
        $scope.Widgets.lblComp9.caption = Math.round($scope.Variables.tgridDyejob.FRow.comp9);
        $scope.Widgets.lblComp10.caption = Math.round($scope.Variables.tgridDyejob.FRow.comp10);
        $scope.Widgets.lblComp11.caption = Math.round($scope.Variables.tgridDyejob.FRow.comp11);
        $scope.Widgets.lblComp12.caption = Math.round($scope.Variables.tgridDyejob.FRow.comp12);
        $scope.Widgets.lblComp13.caption = Math.round($scope.Variables.tgridDyejob.FRow.comp13);
        $scope.Widgets.lblComp14.caption = Math.round($scope.Variables.tgridDyejob.FRow.comp14);
        $scope.Widgets.lblComp15.caption = Math.round($scope.Variables.tgridDyejob.FRow.comp15);
        $scope.Widgets.lblComp16.caption = Math.round($scope.Variables.tgridDyejob.FRow.comp16);
        $scope.Widgets.lblComp17.caption = Math.round($scope.Variables.tgridDyejob.FRow.comp17);
        $scope.Widgets.lblComp18.caption = Math.round($scope.Variables.tgridDyejob.FRow.comp18);
        $scope.Widgets.lblComp19.caption = Math.round($scope.Variables.tgridDyejob.FRow.comp19);
        $scope.Widgets.lblComp20.caption = Math.round($scope.Variables.tgridDyejob.FRow.comp20);
        $scope.Widgets.lblComp21.caption = Math.round($scope.Variables.tgridDyejob.FRow.comp21);
        $scope.Widgets.lblComp22.caption = Math.round($scope.Variables.tgridDyejob.FRow.comp22);
        $scope.Widgets.lblComp23.caption = Math.round($scope.Variables.tgridDyejob.FRow.comp23);
        $scope.Widgets.lblComp24.caption = Math.round($scope.Variables.tgridDyejob.FRow.comp24);
        $scope.Widgets.lblComp25.caption = Math.round($scope.Variables.tgridDyejob.FRow.comp25);
        $scope.Widgets.lblComp26.caption = Math.round($scope.Variables.tgridDyejob.FRow.comp26);
        $scope.Widgets.lblComp27.caption = Math.round($scope.Variables.tgridDyejob.FRow.comp27);
        $scope.Widgets.lblComp28.caption = Math.round($scope.Variables.tgridDyejob.FRow.comp28);
        $scope.Widgets.lblComp29.caption = Math.round($scope.Variables.tgridDyejob.FRow.comp29);
        $scope.Widgets.lblComp30.caption = Math.round($scope.Variables.tgridDyejob.FRow.comp30);
        $scope.Widgets.lblComp31.caption = Math.round($scope.Variables.tgridDyejob.FRow.comp31);
        $scope.Widgets.lblComp32.caption = Math.round($scope.Variables.tgridDyejob.FRow.comp32);
        $scope.Widgets.lblComp33.caption = Math.round($scope.Variables.tgridDyejob.FRow.comp33);
        $scope.Widgets.lblComp34.caption = Math.round($scope.Variables.tgridDyejob.FRow.comp34);
        $scope.Widgets.lblComp35.caption = Math.round($scope.Variables.tgridDyejob.FRow.comp35);
        $scope.Widgets.lblComp36.caption = Math.round($scope.Variables.tgridDyejob.FRow.comp36);
        $scope.Widgets.lblComp37.caption = Math.round($scope.Variables.tgridDyejob.FRow.comp37);
        $scope.Widgets.lblComp38.caption = Math.round($scope.Variables.tgridDyejob.FRow.comp38);
        $scope.Widgets.lblComp39.caption = Math.round($scope.Variables.tgridDyejob.FRow.comp39);
        $scope.Widgets.lblComp40.caption = Math.round($scope.Variables.tgridDyejob.FRow.comp40);
        $scope.Widgets.lblComp41.caption = Math.round($scope.Variables.tgridDyejob.FRow.comp41);
        $scope.Widgets.lblComp42.caption = Math.round($scope.Variables.tgridDyejob.FRow.comp42);
        $scope.Widgets.lblComp43.caption = Math.round($scope.Variables.tgridDyejob.FRow.comp43);
        $scope.Widgets.lblComp44.caption = Math.round($scope.Variables.tgridDyejob.FRow.comp44);
        $scope.Widgets.lblComp45.caption = Math.round($scope.Variables.tgridDyejob.FRow.comp45);
        $scope.Widgets.lblComp46.caption = Math.round($scope.Variables.tgridDyejob.FRow.comp46);
        $scope.Widgets.lblComp47.caption = Math.round($scope.Variables.tgridDyejob.FRow.comp47);
        $scope.Widgets.lblComp48.caption = Math.round($scope.Variables.tgridDyejob.FRow.comp48);
        debugger;
        $scope.$apply();

    };
    //-------------------------------------------------------------------------------------------------------

    $scope.svProcCU1000PK0_QryCutBySize_OrderDetonSuccess = function(variable, data) {
        // console.log(data);
        /*$scope.Variables.statTgridCountJob.dataSet.dataValue = data.poutSizes;
        console.log($scope.Variables.statTgridCountJob.dataSet);
        var result = $scope.Variables.statTgridCountJob.clearData();
        console.log($scope.Variables.statTgridCountJob.dataSet);*/

        var result = $scope.Variables.statOrdSize.clearData();

        if (data.poutSizes !== undefined) {
            var m_szedes;
            var m_lectra;
            var i;

            var m_dummyItem = {
                "sizedes": "",
                "clireflectra": ""
            };

            if (data.poutSizes !== undefined) {

                for (i = 0; i < data.poutSizes.length; i++) {

                    var item = {
                        "sizedes": "",
                        "clireflectra": ""
                    };

                    m_szedes = "";
                    m_lectra = "";


                    m_szedes = "Size : " + data.poutSizes[i].szedes;

                    if (data.poutSizes[i].cliref !== "" && data.poutSizes[i].cliref !== null) {
                        m_lectra = "Cliref : " + data.poutSizes[i].cliref + "\nLectra : " + data.poutSizes[i].lectcod;
                    } else {
                        m_lectra = "Cliref : " + "\nLectra : " + data.poutSizes[i].lectcod;
                    }

                    item.sizedes = m_szedes;
                    item.clireflectra = m_lectra;
                    $scope.Variables.statOrdSize.dataSet.push(item);

                }

                if (data.poutSizes.length < 48) {
                    for (var j = i + 1; j <= 48; j++) {
                        var itemEmpty = m_dummyItem;
                        $scope.Variables.statOrdSize.dataSet.push(itemEmpty);

                    }
                }
            }
        }

        // console.log($scope.Variables.statOrdSize.dataSet);

    };
    //-----------------------------------------------------------------------------------------------------------------------------------------------

    $scope.button4Click = function($event, $isolateScope) {
        $scope.Widgets.pOrdnum.datavalue = null;
        $scope.Widgets.pColour.datavalue = null;
        $scope.Widgets.pGarment.datavalue = null;
        $scope.Variables.svProcCU1000PK0_QryCutBySize_OrderDet.dataSet = null;
        $scope.Variables.svProcCU1000PK0_QryCuttingBySize.dataSet = null;
        //  $scope.Variables.svProcCU1000PK0_OrszSizes.dataSet = null;
        $scope.Widgets.gridDyejob.show = false;
    };


    $scope.button6Click = function($event, $isolateScope) {
        var m_Ordnum = $scope.Widgets.form1.formWidgets.pOrdnum.datavalue;
        var m_Colour = $scope.Widgets.form1.formWidgets.pColour.datavalue;
        var m_Garment = $scope.Widgets.form1.formWidgets.pGarment.datavalue;
        if (m_Ordnum === "" || m_Ordnum === null || m_Ordnum === undefined) {
            $scope.Variables.notifMsg.setMessage("Order number should be entered to query");
            $scope.Variables.notifMsg.notify();
            return false;
        } else {
            if (m_Ordnum === null) {
                m_Ordnum = '%';
            } else {
                m_Ordnum = $scope.Widgets.form1.formWidgets.pOrdnum.datavalue;
            }
            if (m_Colour === null) {
                m_Colour = 0;
            } else {
                m_Colour = $scope.Widgets.form1.formWidgets.pColour.datavalue;
            }
            if (m_Garment === null) {
                m_Garment = '%';
            } else {
                m_Garment = $scope.Widgets.form1.formWidgets.pGarment.datavalue;
            }
        }
    };




    $scope.svProcCU1000PK0_QryCuttingBySizeonBeforeUpdate = function(variable, inputData) {
        if (inputData.pOrdnum == undefined || inputData.pOrdnum == "" || inputData.pOrdnum == null) {
            return false;
        }
    };



    $scope.pOrdnumChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.pOrdnum.datavalue = newVal.toUpperCase();
    };


    $scope.pGarmentChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.pGarment.datavalue = newVal.toUpperCase();
    };


    $scope.svProcCU1000PK0_QryCuttingBySizeonSuccess = function(variable, data) {
        if (data.poutCutbySize !== undefined) {
            $scope.Variables.statCountFilteredRows.dataSet.dataValue = data.poutCutbySize.length;
        } else {
            $scope.Variables.statCountFilteredRows.dataSet.dataValue = 0;
        }

        $scope.showGridDyejob(data);
        $scope.Widgets.gridDyejob.show = true;

    };






    /*
        $scope.svCU1000pk0QryOrdsizesonSuccess = function(variable, data) {
            var m_szedes;
            var m_lectra;
            var i;

            var m_dummyItem = {
                "sizedes": "",
                "clireflectra": ""
            };

            // $scope.Variables.statOrdSize.dataSet = item;

            if (data.poutSizes !== undefined) {

                for (i = 0; i < data.poutSizes.length; i++) {

                    var item = {
                        "sizedes": "",
                        "clireflectra": ""
                    };

                    m_szedes = "";
                    m_lectra = "";


                    m_szedes = "Sze " + data.poutSizes[i].szeseq + " : " + data.poutSizes[i].szedes;

                    if (data.poutSizes[i].cliref !== "" && data.poutSizes[i].cliref !== null) {
                        m_lectra = "Cliref : " + data.poutSizes[i].cliref + "\nLectra : " + data.poutSizes[i].lectcod;
                    } else {
                        m_lectra = "Cliref : " + "\nLectra : " + data.poutSizes[i].lectcod;
                    }

                    item.sizedes = m_szedes;
                    item.clireflectra = m_lectra;
                    $scope.Variables.statOrdSize.dataSet.push(item);

                }

                if (data.poutSizes.length < 16) {
                    for (var j = i + 1; j <= 16; j++) {
                        var itemEmpty = m_dummyItem;
                        $scope.Variables.statOrdSize.dataSet.push(itemEmpty);

                    }
                }
            }

        };*/
    //------------------------------------------------------------------------------------------------------------------------------------------

    $scope.button3Click = function($event, $isolateScope) {
        debugger;
    };

}]);

Application.$controller("grid1Controller", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);