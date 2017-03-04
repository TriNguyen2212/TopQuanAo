using System.Web;
using System.Web.Optimization;

namespace TopQuanAo.Web
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));

            //Script admin
            bundles.Add(new ScriptBundle("~/scripts/administrator").Include(
                 // "~/Areas/Administrator/assets/global/plugins/jquery.min.js",
                 // "~/Areas/Administrator/assets/global/plugins/jquery-migrate.min.js",
                 // "~/Areas/Administrator/assets/global/plugins/jquery-ui/jquery-ui-1.10.3.custom.min.js",
                 "~/Areas/Administrator/assets/global/plugins/bootstrap/js/bootstrap.min.js",
                 "~/Areas/Administrator/assets/global/plugins/bootstrap-hover-dropdown/bootstrap-hover-dropdown.min.js",
                 "~/Areas/Administrator/assets/global/plugins/jquery-slimscroll/jquery.slimscroll.min.js",
                 "~/Areas/Administrator/assets/global/plugins/jquery.blockui.min.js",
                 "~/Areas/Administrator/assets/global/plugins/jquery.cokie.min.js",
                 "~/Areas/Administrator/assets/global/plugins/uniform/jquery.uniform.min.js",
                 "~/Areas/Administrator/assets/global/plugins/bootstrap-switch/js/bootstrap-switch.min.js",
                 "~/Areas/Administrator/assets/global/scripts/metronic.js",
                 "~/Areas/Administrator/assets/admin/layout/scripts/layout.js",
                 "~/Areas/Administrator/assets/admin/layout/scripts/quick-sidebar.js",
                 "~/Areas/Administrator/ScriptPage/Shared/CommonFactory.js",
                 "~/Areas/Administrator/ScriptPage/Shared/AlertConfirm.js",
                 "~/ Areas/Administrator/ScriptPage/Shared/show-waiting/show-waiting.js"));

            //Style admin
            bundles.Add(new StyleBundle("~/styles/administrator").Include(
                      "~/Areas/Administrator/ScriptPage/Shared/show-waiting/show-waiting.css"
                      ));
        }
    }
}