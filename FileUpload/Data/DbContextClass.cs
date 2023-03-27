using FileUpload.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace FileUpload.Data
{
  public class DbContextClass : DbContext
  {
    public DbContextClass(DbContextOptions<DbContextClass> options)
           : base(options)
    {

    }
    public DbSet<FileDetails> FileDetails { get; set; }
  }
}
