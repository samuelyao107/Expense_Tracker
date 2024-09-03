using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
    public class Transactions
    {
        public int Id { get; set; }
        public DateTime transactionDate { get; set;}= DateTime.Now;
        public decimal amount { get; set; }
        public string note { get; set; } =string.Empty;

        public User? User {get; set;}
        public int UserId { get; set; }
        public Category? Category {get; set;}
        public int CategoryId { get; set; }
    }
}