using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TopQuanAo.Common;

namespace TopQuanAo.Web.Areas.Administrator.Controllers
{
    public class SystemConfigController : Controller
    {
        // GET: Administrator/SystemConfig
        public ActionResult ListControllerName()
        {
            ReflectionController reflection = new ReflectionController();
            List<Type> list = reflection.GetController(CommonConstants.Namespace);
            return View(list);
        }

        // GET: Administrator/SystemConfig/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: Administrator/SystemConfig/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Administrator/SystemConfig/Create
        [HttpPost]
        public ActionResult Create(FormCollection collection)
        {
            try
            {
                // TODO: Add insert logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Administrator/SystemConfig/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: Administrator/SystemConfig/Edit/5
        [HttpPost]
        public ActionResult Edit(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Administrator/SystemConfig/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: Administrator/SystemConfig/Delete/5
        [HttpPost]
        public ActionResult Delete(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }
    }
}