var CommonFactory = {
    PostDataAjax: function (url, data, beforeSend, success, errorFunction, timeout) {
        try {
            waiting.Show();
            if (!timeout) {
                timeout = 60000;
            }
            $.ajax({
                url: url,
                type: "POST",
                timeout: timeout,
                cache: true,
                crossDomain: true,
                contentType: "application/json; charset=utf-8;",//cho nay dung thi data phai stringjfly
                dataType: "json",
                data: data,
                processData: true,
                beforeSend: beforeSend,//được kích hoạt trươc khi một Ajax request được bắt đầu
                async: true,
                tryCount: 0,
                retryLimit: 3,
                success: function (response) {
                    success(response);
                },
                error: function (error) {
                    errorFunction(error);
                },
                complete: function (complete) {
                }
            }).always(function () {
                waiting.Hide();
            });
        } catch (e) {
            console.log('CommonFactory.PostDataAjax() error :' + e);
        }
    },
    UploadAjax: function (url, data, beforeSend, success, errorFunction, timeout) {
        try {
            waiting.Show();
            if (!timeout) {
                timeout = 60000;
            }
            $.ajax({
                url: url,
                type: "POST",
                timeout: timeout,
                cache: true,
                crossDomain: true,
                contentType: false,
                dataType: "json",
                data: data,
                processData: false,
                beforeSend: beforeSend,//được kích hoạt trươc khi một Ajax request được bắt đầu
                async: true,
                tryCount: 0,
                retryLimit: 3,
                success: function (response) {
                    success(response);
                },
                error: function (error) {
                    errorFunction(error);
                },
                complete: function (complete) {
                }
            }).always(function () {
                waiting.Hide();
            });
        } catch (e) {
            console.log('CommonFactory.UploadAjax() error :' + e);
        }
    },
    replaceAll: function (str, find, replace) {
        return str.replace(new RegExp(find, 'g'), replace);
    },
    isNumber:function(evt) {
        var iKeyCode = (evt.which) ? evt.which : evt.keyCode
        if ((iKeyCode < 48 || iKeyCode > 57))
            return false;
        return true;
    },
    reloadGrid: function (idGrid, result) {
        try {
            $(idGrid).jqGrid('clearGridData');
            $(idGrid).jqGrid('setGridParam', { data: result });
            $(idGrid).trigger('reloadGrid');
        } catch (e) {
            console.log('CommonFactory.reloadGrid() error :' + e);
        }
    },
    jqGrid: function (jqGridID, jqControlsID, colNames, colModel, DataSource, sortname, caption, rowNum, ControlID, footerrow) {
        try {
            if (caption == '') {
                $(jqGridID + " > .ui-jqgrid-titlebar").hide();
            }
            if (rowNum == undefined || rowNum == '') rowNum = 10;
            if (footerrow == undefined || footerrow == '') footerrow = false;
            var grid = $(jqGridID);
            $(jqGridID).jqGrid({
                data: DataSource,
                datatype: 'local',
                colNames: colNames,
                colModel: colModel,
                pager: jQuery(jqControlsID),
                rowNum: rowNum,
                height: '100%',
                width: '100%',
                sortname: sortname,
                shrinkToFit: true,
                viewrecords: true,
                pginput: false,
                footerrow: footerrow,
                //userDataOnFooter: (columnNameSum == undefined && columnNameSum == ''),
                align: "center",
                sortorder: "asc",
                caption: caption,
                emptyrecords: 'Không có dữ liệu',
                jsonReader: {
                    root: "rows",
                    page: "page",
                    total: "total",
                    records: "records",
                    repeatitems: false
                },
                loadComplete: function () {

                    var i, myPageRefresh = function (e) {
                        var newPage = $(e.target).text();
                        grid.trigger("reloadGrid", [{ page: newPage }]);
                        e.preventDefault();
                    };
                    $(grid[0].p.pager + '_center td.myPager').remove();
                    var pagerPrevTD = $('<td>', { class: "myPager" }), prevPagesIncluded = 0,
                        pagerNextTD = $('<td>', { class: "myPager" }), nextPagesIncluded = 0,
                        totalStyle = grid[0].p.pginput === false;
                    var currentPage = this.p.page;
                    var startPage = currentPage - 3;
                    var endPage = currentPage + 1;
                    if (startPage <= 0) {
                        endPage -= (startPage - 1);
                        startPage = 1;
                    }
                    if (endPage > this.p.lastpage) {
                        endPage = this.p.lastpage;
                        if (endPage > 5) {
                            startPage = endPage - 4;
                        }
                    }
                    for (i = startPage; i <= this.p.lastpage && i <= endPage; i++) {
                        if (i <= 0) { continue; }
                        var link = "";
                        if (i === this.p.page)
                            link = $('<a>', { href: 'javascript:void(0);', class: 'btn btn-sm btn-default btn-pager', style: 'color:red;font-weight:bold;background-color:#e6e6e6' });
                        else
                            link = $('<a>', { href: '#', class: 'btn btn-sm btn-default btn-pager', click: myPageRefresh });
                        link.text(String(i));
                        if (i < this.p.page || totalStyle) {
                            if (prevPagesIncluded > 0) { pagerPrevTD.append('<span>&nbsp;</span>'); }
                            pagerPrevTD.append(link);
                            prevPagesIncluded++;
                        } else {
                            if (nextPagesIncluded > 0 || (totalStyle && prevPagesIncluded > 0)) { pagerNextTD.append('<span>&nbsp;</span>'); }
                            pagerNextTD.append(link);
                            nextPagesIncluded++;
                        }
                    }
                    if (prevPagesIncluded > 0) {
                        $(grid[0].p.pager + '_center td[id^="prev"]').after(pagerPrevTD);
                    }
                    if (nextPagesIncluded > 0) {
                        $(grid[0].p.pager + '_center td[id^="next"]').before(pagerNextTD);
                    }

                    CommonFactory.SetChekedBox(ControlID);
                },
                autowidth: true,
            });
            CommonFactory.CssGrid();
            CommonFactory.SetHeaderCenter($(jqGridID));
        } catch (e) {
            console.log('CommonFactory.jqGrid() error :' + e);
        }
    },
    jqGridUrl: function (jqGridID, jqControlsID, colNames, colModel, url, sortname, caption, rowNum, ControlID, footerrow, columnGroup) {
        try {
            if (caption == '') {
                $(jqGridID + " > .ui-jqgrid-titlebar").hide();
            }
            if (rowNum == undefined || rowNum == '') rowNum = 10;
            if (footerrow == undefined || footerrow == '') footerrow = false;
            var grid = $(jqGridID);
            $(jqGridID).jqGrid({
                url: url,
                datatype: 'json',
                colNames: colNames,
                colModel: colModel,
                pager: jQuery(jqControlsID),
                rowNum: rowNum,
                height: '100%',
                width: '100%',
                sortname: sortname,
                shrinkToFit: true,
                viewrecords: true,
                pginput: false,
                footerrow: footerrow,
                userDataOnFooter: footerrow,
                grouping: (columnGroup != undefined && columnGroup != ''),
                groupingView: {
                    //groupField: columnGroup,
                    //groupColumnShow: [false],
                    //groupOrder: ["desc"],
                    //groupDataSorted: true
                    groupField: columnGroup,
                    groupColumnShow: [false],
                    groupText: ["<b>{0}</b>"],
                    groupCollapse: false,
                    groupOrder: ["asc"]
                },
                align: "center",
                sortorder: "asc",
                caption: caption,
                emptyrecords: 'Không có dữ liệu',
                jsonReader: {
                    root: "rows",
                    page: "page",
                    total: "total",
                    records: "records",
                    repeatitems: false
                },
                resizeStop: function () {
                    // see http://stackoverflow.com/a/9599685/315935
                    var $self = $(grid),
                        shrinkToFit = $self.jqGrid("getGridParam", "shrinkToFit");

                    $self.jqGrid("setGridWidth", this.grid.newWidth, shrinkToFit);
                    setHeaderWidth.call(this);
                },
                loadComplete: function () {
                    var i, myPageRefresh = function (e) {
                        var newPage = $(e.target).text();
                        grid.trigger("reloadGrid", [{ page: newPage }]);
                        e.preventDefault();
                    };
                    $(grid[0].p.pager + '_center td.myPager').remove();
                    var pagerPrevTD = $('<td>', { class: "myPager" }), prevPagesIncluded = 0,
                        pagerNextTD = $('<td>', { class: "myPager" }), nextPagesIncluded = 0,
                        totalStyle = grid[0].p.pginput === false;
                    var currentPage = this.p.page;
                    var startPage = currentPage - 3;
                    var endPage = currentPage + 1;
                    if (startPage <= 0) {
                        endPage -= (startPage - 1);
                        startPage = 1;
                    }
                    if (endPage > this.p.lastpage) {
                        endPage = this.p.lastpage;
                        if (endPage > 5) {
                            startPage = endPage - 4;
                        }
                    }
                    for (i = startPage; i <= this.p.lastpage && i <= endPage; i++) {
                        if (i <= 0) { continue; }
                        var link = "";
                        if (i === this.p.page)
                            link = $('<a>', { href: 'javascript:void(0);', class: 'btn btn-sm btn-default btn-pager', style: 'color:red;font-weight:bold;background-color:#e6e6e6' });
                        else
                            link = $('<a>', { href: '#', class: 'btn btn-sm btn-default btn-pager', click: myPageRefresh });
                        link.text(String(i));
                        if (i < this.p.page || totalStyle) {
                            if (prevPagesIncluded > 0) { pagerPrevTD.append('<span>&nbsp;</span>'); }
                            pagerPrevTD.append(link);
                            prevPagesIncluded++;
                        } else {
                            if (nextPagesIncluded > 0 || (totalStyle && prevPagesIncluded > 0)) { pagerNextTD.append('<span>&nbsp;</span>'); }
                            pagerNextTD.append(link);
                            nextPagesIncluded++;
                        }
                    }
                    if (prevPagesIncluded > 0) {
                        $(grid[0].p.pager + '_center td[id^="prev"]').after(pagerPrevTD);
                    }
                    if (nextPagesIncluded > 0) {
                        $(grid[0].p.pager + '_center td[id^="next"]').before(pagerNextTD);
                    }
                    CommonFactory.SetChekedBox(ControlID);
                    

                },
                autowidth: true,
            });
            CommonFactory.CssGrid();
            CommonFactory.SetHeaderCenter($(jqGridID));
        } catch (e) {
            console.log('CommonFactory.jqGridUrl() error :' + e);
        }
    },
    jqGridUrlMultiselect: function (jqGridID, jqControlsID, colNames, colModel, url, sortname, caption, rowNum, ControlID, footerrow, columnGroup,CallBack) {
        try {
            if (caption == '') {
                $(jqGridID + " > .ui-jqgrid-titlebar").hide();
            }
            if (rowNum == undefined || rowNum == '') rowNum = 10;
            if (footerrow == undefined || footerrow == '') footerrow = false;
            var grid = $(jqGridID);
            $(jqGridID).jqGrid({
                url: url,
                datatype: 'json',
                colNames: colNames,
                colModel: colModel,
                pager: jQuery(jqControlsID),
                rowNum: rowNum,
                height: '100%',
                width: '100%',
                sortname: sortname,
                shrinkToFit: true,
                viewrecords: true,
                pginput: false,
                footerrow: footerrow,
                userDataOnFooter: footerrow,
                grouping: (columnGroup != undefined && columnGroup != ''),
                groupingView: {
                    //groupField: columnGroup,
                    //groupColumnShow: [false],
                    //groupOrder: ["desc"],
                    //groupDataSorted: true
                    groupField: columnGroup,
                    groupColumnShow: [false],
                    groupText: ["<b>{0}</b>"],
                    groupCollapse: false,
                    groupOrder: ["asc"]
                },
                align: "center",
                sortorder: "asc",
                caption: caption,
                emptyrecords: 'Không có dữ liệu',
                jsonReader: {
                    root: "rows",
                    page: "page",
                    total: "total",
                    records: "records",
                    repeatitems: false
                },
                resizeStop: function () {
                    // see http://stackoverflow.com/a/9599685/315935
                    var $self = $(grid),
                        shrinkToFit = $self.jqGrid("getGridParam", "shrinkToFit");

                    $self.jqGrid("setGridWidth", this.grid.newWidth, shrinkToFit);
                    setHeaderWidth.call(this);
                },
                loadComplete: function () {
                    var i, myPageRefresh = function (e) {
                        var newPage = $(e.target).text();
                        grid.trigger("reloadGrid", [{ page: newPage }]);
                        e.preventDefault();
                    };
                    $(grid[0].p.pager + '_center td.myPager').remove();
                    var pagerPrevTD = $('<td>', { class: "myPager" }), prevPagesIncluded = 0,
                        pagerNextTD = $('<td>', { class: "myPager" }), nextPagesIncluded = 0,
                        totalStyle = grid[0].p.pginput === false;
                    var currentPage = this.p.page;
                    var startPage = currentPage - 3;
                    var endPage = currentPage + 1;
                    if (startPage <= 0) {
                        endPage -= (startPage - 1);
                        startPage = 1;
                    }
                    if (endPage > this.p.lastpage) {
                        endPage = this.p.lastpage;
                        if (endPage > 5) {
                            startPage = endPage - 4;
                        }
                    }
                    for (i = startPage; i <= this.p.lastpage && i <= endPage; i++) {
                        if (i <= 0) { continue; }
                        var link = "";
                        if (i === this.p.page)
                            link = $('<a>', { href: 'javascript:void(0);', class: 'btn btn-sm btn-default btn-pager', style: 'color:red;font-weight:bold;background-color:#e6e6e6' });
                        else
                            link = $('<a>', { href: '#', class: 'btn btn-sm btn-default btn-pager', click: myPageRefresh });
                        link.text(String(i));
                        if (i < this.p.page || totalStyle) {
                            if (prevPagesIncluded > 0) { pagerPrevTD.append('<span>&nbsp;</span>'); }
                            pagerPrevTD.append(link);
                            prevPagesIncluded++;
                        } else {
                            if (nextPagesIncluded > 0 || (totalStyle && prevPagesIncluded > 0)) { pagerNextTD.append('<span>&nbsp;</span>'); }
                            pagerNextTD.append(link);
                            nextPagesIncluded++;
                        }
                    }
                    if (prevPagesIncluded > 0) {
                        $(grid[0].p.pager + '_center td[id^="prev"]').after(pagerPrevTD);
                    }
                    if (nextPagesIncluded > 0) {
                        $(grid[0].p.pager + '_center td[id^="next"]').before(pagerNextTD);
                    }
                    CommonFactory.SetChekedBox(ControlID);
                    //console.log('ddddd');
                    //$('#cb_CheckAll').prop('checked', false);

                    if (typeof CallBack == 'function')
                        CallBack(CallBack);
                },
                autowidth: true,
            });
            CommonFactory.CssGrid();
            CommonFactory.SetHeaderCenter($(jqGridID));
        } catch (e) {
            console.log('CommonFactory.jqGridUrl() error :' + e);
        }
    },
    CssGrid: function () {
        // remove classes
        $(".ui-jqgrid").removeClass("ui-widget ui-widget-content");
        $(".ui-jqgrid-view").children().removeClass("ui-widget-header ui-state-default");
        $(".ui-jqgrid-labels, .ui-search-toolbar").children().removeClass("ui-state-default ui-th-column ui-th-ltr");
        $(".ui-jqgrid-pager").removeClass("ui-state-default");
        $(".ui-jqgrid").removeClass("ui-widget-content");

        // add classes
        $(".ui-jqgrid-htable").addClass("table table-bordered table-hover");
        $(".ui-jqgrid-btable").addClass("table table-bordered table-striped");

        $(".ui-pg-div").removeClass().addClass("btn btn-sm btn-primary");
        $(".ui-icon.ui-icon-plus").removeClass().addClass("fa fa-plus");
        $(".ui-icon.ui-icon-pencil").removeClass().addClass("fa fa-pencil");
        $(".ui-icon.ui-icon-trash").removeClass().addClass("fa fa-trash-o");
        $(".ui-icon.ui-icon-search").removeClass().addClass("fa fa-search");
        $(".ui-icon.ui-icon-refresh").removeClass().addClass("fa fa-refresh");
        $(".ui-icon.ui-icon-disk").removeClass().addClass("fa fa-save").parent(".btn-primary").removeClass("btn-primary").addClass("btn-success");
        $(".ui-icon.ui-icon-cancel").removeClass().addClass("fa fa-times").parent(".btn-primary").removeClass("btn-primary").addClass("btn-danger");

        $(".ui-icon.ui-icon-seek-prev").wrap("<div class='btn btn-sm btn-default'></div>");
        $(".ui-icon.ui-icon-seek-prev").removeClass().addClass("fa fa-backward");

        $(".ui-icon.ui-icon-seek-first").wrap("<div class='btn btn-sm btn-default'></div>");
        $(".ui-icon.ui-icon-seek-first").removeClass().addClass("fa fa-fast-backward");

        $(".ui-icon.ui-icon-seek-next").wrap("<div class='btn btn-sm btn-default'></div>");
        $(".ui-icon.ui-icon-seek-next").removeClass().addClass("fa fa-forward");

        $(".ui-icon.ui-icon-seek-end").wrap("<div class='btn btn-sm btn-default'></div>");
        $(".ui-icon.ui-icon-seek-end").removeClass().addClass("fa fa-fast-forward");
    },
    SetHeaderCenter: function (gridObj) {
        var cm = gridObj.jqGrid("getGridParam", "colModel");
        for (var i = 0; i < cm.length; i++) {
            gridObj.jqGrid('setLabel', cm[i].name, '',
                { 'text-align': ('center') },
                (cm[i].titletext ? { 'title': cm[i].titletext } : {}));
        }
    },
    SetChekedBox: function (controlID) {
        if (controlID == undefined || controlID == '') return;
        $("[id*='_ckb']").prop('checked', false);
        var listid = $(controlID).val().split(',');
        $.each(listid, function (i, item) {
            $('#' + item + '_ckb').prop('checked', true);
        });
    },
    cellsrenderer: function (row, column, value) {
        return '<div style="text-align: center; margin-top: 5px;">' + value + '</div>';
    },
    columnsrenderer: function (value) {
        return '<div style="text-align: center; margin-top: 5px;">' + value + '</div>';
    },
    FooterSum: function (grid, columnNameSum) {
        var item = {};
        var properties = Object.keys(columnNameSum);
        $(properties).each(function (i, NameColumn) {
            var colSum = grid.jqGrid('getCol', NameColumn, false, 'sum');
            item[NameColumn];
            item[NameColumn] = colSum > 0 ? "<span style='color:red;font-size: 13px;padding-left: 5px;'>" + colSum + "</span>" : colSum;
            if (properties.length - 1 == i) {
                grid.jqGrid('footerData', 'set', item);
            }
        });
    },
    FormatDate: function (strdate) {
        var datearray = strdate.split("/");
        var newdate = datearray[1] + '/' + datearray[0] + '/' + datearray[2];
        return newdate;
    },
    GroupHeader: function (grid, itemgroup) {
        $(grid).jqGrid('setGroupHeaders', {
            useColSpanStyle: true,
            groupHeaders: itemgroup
        });
    },
    setHeaderWidth : function (grid) {
        var $self = $(grid),
            colModel = $self.jqGrid("getGridParam", "colModel"),
            cmByName = {},
            ths = $(grid).grid.headers,
            cm,
            i,
            l = colModel.length;

        for(i = 0; i < l; i++) {
            cm = colModel[i];
            cmByName[cm.name] = $(ths[i].el).outerWidth();
        }
        $("#h1").width(cmByName.amount + cmByName.tax + cmByName.total - 1);
        $("#h2").width(cmByName.closed + cmByName.ship_via - 1);
        //$("#h2").width($("#h0").width() - $("#h1").outerWidth());
    },
};