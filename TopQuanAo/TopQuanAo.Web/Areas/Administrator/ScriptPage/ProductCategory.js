var ProductCategory = {
    init: function () {
        ProductCategory.RegisterEvent();
    },
    RegisterEvent: function () {
        $(window).on('resize.jqGrid', function () {
            $("#jqGrid").jqGrid('setGridWidth', $("#wrap-content").width());
        });
        ProductCategory.initGirdViewProductCategory();
    },
    initGirdViewProductCategory: function () {

        $("#jqGrid").jqGrid({
            url: '/ProductCategory/GetProductCategories',
            mtype: "GET",
            styleUI: 'Bootstrap',
            datatype: "json",
            colNames: ['ID', 'Tên danh mục', 'cấp cha', 'độ ưu tiên', 'hiển thị trang chủ', 'Mô tả', 'Status'],
            colModel: [
                { label: 'ID', name: 'ID', key: true, width: 20 },
                { label: 'Name', name: 'Name', width: 20 },
                { label: 'ParentName', name: 'ParentName',width: 20 },
                { label: 'DisplayOrder', name: 'DisplayOrder', width: 20 },
                { label: 'HomeFlag', name: 'HomeFlag', width: 20 },
                { label: 'Description', name: 'Description', width: 20 },
                { label: 'Status', name: 'Status', width: 20 }
                
            ],
            postData:{
                keyword: ""
            },
            viewrecords: true,
            height: 'auto',
            width: $('#wrap-content').width(),
            rowNum: 10,
            pager: "#jqGridPager"
        });
    }
}
ProductCategory.init();