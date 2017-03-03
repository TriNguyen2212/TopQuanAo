using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace TopQuanAo.Web.Areas.Administrator.Controllers
{
    [AuthorizeController]
    public class HomeController : Controller
    {
        // GET: Administrator/Home
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult NotPermission()
        {
            return View();
        }
    }
}