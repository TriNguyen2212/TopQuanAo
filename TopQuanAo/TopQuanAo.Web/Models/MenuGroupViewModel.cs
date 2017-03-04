using System.Collections.Generic;

namespace TopQuanAo.Web.Models
{
    public class MenuGroupViewModel
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public virtual IEnumerable<MenuViewModel> Menus { set; get; }
    }
}