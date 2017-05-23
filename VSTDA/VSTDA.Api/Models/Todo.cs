using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace VSTDA.Api.Models
{
    public class Todo
    {
        //primary key
        public int TodoId { get; set; }

        // additional columns
        public string name { get; set; }
        public string Text { get; set; }
        public DateTime CreateDate { get; set; }
    }
}