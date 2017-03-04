using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace TopQuanAo.Web.Areas.Administrator.Controllers
{
    public class ApplicationRoleController : Controller
    {
        // GET: Administrator/ApplicationRoles
        public ActionResult ApplicationRoleList()
        {
            return View();
        }
        public ActionResult ApplicationRoleCreate()
        {
            return View();
        }
    }
}