using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
    public class Category
    {
        public int Id { get; set; }
        public string title { get; set; }=string.Empty;
        public string type { get; set; }=string.Empty;
        public List<Transactions> Transactions { get; set; } = new List<Transactions>();
        
        
    }
}