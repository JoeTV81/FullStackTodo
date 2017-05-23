using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
using VSTDA.Api.Models;

namespace VSTDA.Api.Infrastructure
{
    public class TodoDataContext : DbContext
    {
        public TodoDataContext() : base("VSTDA")
        {

        }

        public IDbSet<Todo> Todoes { get; set; }
    }
}