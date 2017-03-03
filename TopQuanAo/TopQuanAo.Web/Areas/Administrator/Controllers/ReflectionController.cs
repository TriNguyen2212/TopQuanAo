using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Web;
using System.Web.Mvc;

namespace TopQuanAo.Web.Areas.Administrator.Controllers
{
    public class ReflectionController
    {
        // GET: Administrator/Reflection
        public List<Type> GetController(string namespaces)
        {
            List<Type> listController = new List<Type>();
            Assembly assembly = Assembly.GetExecutingAssembly();
            IEnumerable<Type> types = assembly.GetTypes().Where(type => typeof(Controller).IsAssignableFrom(type) && type.Namespace.Contains(namespaces)).OrderBy(x => x.Name);
            return types.ToList();
        }

        public List<MemberInfo> GetActions(Type Controller)
        {
            List<MemberInfo> listMemberInfo = new List<MemberInfo>();
            IEnumerable<MemberInfo> memberinfo = Controller.GetMethods(BindingFlags.Instance | BindingFlags.DeclaredOnly | BindingFlags.Public).
                Where(x => !x.GetCustomAttributes(typeof(System.Runtime.CompilerServices.CompilerGeneratedAttribute), true).Any()).
                OrderBy(y => y.Name);
            foreach (MemberInfo method in memberinfo)
            {
                if (method.ReflectedType.IsPublic && !method.IsDefined(typeof(NonActionAttribute)))
                {
                    listMemberInfo.Add(method);
                }
            }
            return listMemberInfo;
        }
    }
}