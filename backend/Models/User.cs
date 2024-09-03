using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
    public class User
    {
        public int Id { get; set; }
        public string firstName { get; set; } = string.Empty;
        public string lastName { get; set; }= string.Empty;
        public string userName { get; set; }= string.Empty;
        public string password { get; set; }=string.Empty;
        public List<Transactions> Transactions { get; set; } = new List<Transactions>();
    }
}