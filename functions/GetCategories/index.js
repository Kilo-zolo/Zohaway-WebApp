const sql = require('mssql');

module.exports = async function (context, req) {
    // Configuration for your SQL Server.
    const config = {
        user: 'zohteksqladmin',
        password: <password>,
        server: 'zohaway-server.database.windows.net', 
        database: 'zohaway-db',
        options: {
            encrypt: true
        }
    };

    try {
        // Create connection instance
        let pool = await sql.connect(config);
        
        // Execute a SQL statement.
        let result = await pool.request()
            .query('select CatName, IMG FROM Categories');
        
        // Print the result
        context.log(result);

        // Return the result
        context.res = {
            body: result.recordset
        };
        
        // Close the connection
        sql.close();
    } catch (err) {
        context.log.error('SQL Error', err);
        context.res = {
            status: 500,
            body: "Error executing SQL query"
        };
        sql.close();
    }
};
