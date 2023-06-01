using System;
using System.Data;
using System.Data.SqlClient;
using System.Threading.Tasks;
using Dapper;

public class ScalerValue
{
    public static int Sum(int a, int b)
    {
        return a + b;
    }
}