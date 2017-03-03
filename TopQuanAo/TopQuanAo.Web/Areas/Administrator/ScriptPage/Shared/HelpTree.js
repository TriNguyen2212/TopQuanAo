var HelpTrees = {
    init: function () {
        HelpTrees.registerEvents();
    },
    registerEvents: function () {
        var style = '';
        var span = '';
        $('.HelpTrees').each(function (i,o) {
            style = $(o).attr('data-style');
            $(o).jstree({
                core: { themes: { icons: false } },
                "search": {
                    "case_insensitive": true,
                    "show_only_matches": true,
                    "show_only_matches_children": true
                },
                "plugins": ["wholerow", style, "search"]
            });
            $(o).on('click', function (e) {
                    e.stopPropagation();
                });
            $(".searchInput_HelpTrees").keyup(function () {
                var searchString = $(this).val();
                $(this).parent().find('div.HelpTrees').jstree('search', searchString);
            });

            $(o).on("changed.jstree", function (e, data) {
                var i, j, r = [], v = [];
                for (i = 0, j = data.selected.length; i < j; i++) {
                    r.push(data.instance.get_node(data.selected[i]).text.trim());
                    v.push(data.instance.get_node(data.selected[i]).id);
                }
                $(this).parents('div.dropdown').children('input.dropdown_HelpTrees').val(r.join(', ').trim());
                $(this).parents('div.dropdown').children('input.dropdown_HelpTrees').attr('data-ids', v.join(','));
                //console.log(v.join(', '));
            });

            span = $(o).parents('.input-group').children().eq(1);
            $(span).click(function (e) {
                e.stopPropagation();
                $(this).parent().children().eq(0).children().children().eq(0).click();
            });
        });
        
    }
}
HelpTrees.init();