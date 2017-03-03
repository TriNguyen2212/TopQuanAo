using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace TopQuanAo.Web.Areas.Administrator.Controllers
{
    [AuthorizeController]
    public class ProductController : Controller
    {
        // GET: Administrator/Product
        public ActionResult List()
        {
            return View();
        }

        // GET: Administrator/Product/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: Administrator/Product/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Administrator/Product/Create
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

        // GET: Administrator/Product/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: Administrator/Product/Edit/5
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

        // GET: Administrator/Product/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: Administrator/Product/Delete/5
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