using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TopQuanAo.Service;

namespace TopQuanAo.Web.Areas.Administrator.Controllers
{
    [AuthorizeController]
    public class ProductCategoryController : Controller
    {
        private IProductCategoryService _productCategoryService;

        public ProductCategoryController(IProductCategoryService productCategoryService)
        {
            _productCategoryService = productCategoryService;
        }
        // GET: Administrator/Category
        public ActionResult ProductCategoryList()
        {
            return View();
        }
        public JsonResult GetProductCategories(string sidx, string sord, int page, int rows,string keyword)
        {
            var productCategories = _productCategoryService.GetAll(keyword);
            var pageIndex = Convert.ToInt32(page) - 1;
            var pageSize = rows;
            var totalRecords = productCategories.Count();
            var totalPages = (int)Math.Ceiling((float)totalRecords / (float)pageSize);
            productCategories = productCategories.Skip(pageIndex * pageSize).Take(pageSize);

            var jsonData = new
            {
                total = totalPages,
                page,
                records = totalRecords,
                rows = productCategories.Select(x => new
                {
                    x.ID,
                    x.Name,
                    x.Description,
                    x.ParentID,
                    ParentName = x.ParentID == null ? "" : (productCategories.SingleOrDefault(k => k.ID == x.ParentID).Name),
                    x.DisplayOrder,
                    x.Image,
                    x.HomeFlag,
                    x.MetaKeyword,
                    x.MetaDescription,
                    x.Status

                }).ToList()
            };
            return Json(jsonData, JsonRequestBehavior.AllowGet);
        }
        // GET: Administrator/Category/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: Administrator/Category/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Administrator/Category/Create
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

        // GET: Administrator/Category/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: Administrator/Category/Edit/5
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

        // GET: Administrator/Category/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: Administrator/Category/Delete/5
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