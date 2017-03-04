var ApplicationRole = {
    init: function () {
        ApplicationRole.RegisterEvent();
    },
    RegisterEvent: function () {
        $(window).on('resize.jqGrid', function () {
            $("#jqGrid").jqGrid('setGridWidth', $("#wrap-content").width());
        });
        ApplicationRole.initGirdViewAplicationRole();
    },
    initGirdViewAplicationRole: function () {
        $("#jqGrid").jqGrid({
            url: '/api/applicationRole/getlistall',
            mtype: "GET",
            styleUI: 'Bootstrap',
            datatype: "json",
            colName:['ID','Tên quyền','Mô tả quyền'],
            colModel: [
                { label: 'Id', name: 'Id', key: true, width: 20 },
                { label: 'NameID', name: 'NameID', width: 20 },
                { label: 'Description', name: 'Description', width: 20 }
            ],
            viewrecords: true,
            height: 'auto',
            width: $('#wrap-content').width(),
            rowNum: 10,
            pager: "#jqGridPager"
        });
    }
}
ApplicationRole.init();