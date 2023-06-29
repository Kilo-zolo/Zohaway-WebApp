const sql = require('mssql');

module.exports = async function (context, req) {
    // Configuration for your SQL Server.
    const config = {
        user: 'zohteksqladmin',
        password: 'Ch@osisbalanc3',
        server: 'zohaway-server.database.windows.net', 
        database: 'zohaway-db',
        options: {
            encrypt: true
        }
    };

    try {
        // Variable for User param choice- js
        var email = req.body.email;
        var pass = req.body.password;

        // Create connection instance
        let pool = await sql.connect(config);
            
        // Execute a SQL statement.
        let result = await pool.request()
            .input('email', sql.NVarChar, email)
            .input('password', sql.NVarChar, pass)
            .query('SELECT ID, FName, LName, PNumber, Email, Membership FROM Users WHERE Email=@email AND Passwords=@password');
        
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
