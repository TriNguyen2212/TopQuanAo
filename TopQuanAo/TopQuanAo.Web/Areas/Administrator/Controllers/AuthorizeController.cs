using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace TopQuanAo.Web.Areas.Administrator.Controllers
{
    public class AuthorizeController : ActionFilterAttribute
    {
        // GET: Administrator/Authorize
        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            string[] listPermission = { "Product-List", "Category-List", "Home-NotPermission" };
            string actionName = filterContext.ActionDescriptor.ControllerDescriptor.ControllerName + "-" + filterContext.ActionDescriptor.ActionName;
            if (!listPermission.Contains(actionName))
            {
                filterContext.Result = new RedirectResult("~/Administrator/Home/NotPermission");
            }
        }
    }
}