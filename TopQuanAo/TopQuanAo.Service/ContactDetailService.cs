using TopQuanAo.Data.Infrastructure;
using TopQuanAo.Data.Reponsitories;
using TopQuanAo.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TopQuanAo.Service
{
    public interface IContactDetailService
    {
        ContactDetail GetDefaultContact();
    }

    public class ContactDetailService : IContactDetailService
    {
        public IUnitOfWork _unitOfWork;
        public IContactDetailRepository _contactDetailRepository;

        public ContactDetailService(IUnitOfWork unitOfWork, IContactDetailRepository contactDetailRepository)
        {
            this._unitOfWork = unitOfWork;
            this._contactDetailRepository = contactDetailRepository;
        }

        public ContactDetail GetDefaultContact()
        {
            return _contactDetailRepository.GetSingleByCondition(x => x.Status);
        }
    }
}