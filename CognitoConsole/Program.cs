using System;
using System.Data;
using System.Data.SqlClient;
using System.Threading.Tasks;
using Dapper;
using static ScalerValue;

public class Person
{
    public string CustomerId { get; set; }
    public string ContactName { get; set; }
}

class Program
{
    static async Task Main(string[] args)
    {
        using IDbConnection connection = new SqlConnection(@"Server=localhost\SQLEXPRESS;Database=Northwind;Trusted_Connection=True;");
        // var customer = await connection.QueryAsync<Person>("Select CustomerId, ContactName From Customers");

        // foreach(var cus in customer)
        // {
            // Console.WriteLine($"Hello from {cus.CustomerId} {cus.ContactName}");
        // }

        var sql = "SELECT COUNT(*) FROM Products";
        var count = connection.ExecuteScalar<int>(sql);
        
        // Console.WriteLine($"Total products: {count}");

        int result = Sum(2, 3);

        Console.WriteLine(result);
       
    }
}
