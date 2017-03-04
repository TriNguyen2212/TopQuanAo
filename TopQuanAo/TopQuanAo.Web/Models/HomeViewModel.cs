using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TopQuanAo.Web.Models
{
    public class HomeViewModel
    {
        public IEnumerable<SlideViewModel> Slides { set; get; }
        public IEnumerable<ProductViewModel> LastestProducts { set; get; }
        public IEnumerable<ProductViewModel> TopSaleProduct { set; get; }
    }
}