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
        // Variable for User param choice- js
        var first = req.body.first;
        var last = req.body.last;
        var pnum = req.body.pnum;
        var email = req.body.email;
        var pass = req.body.password;
        var member = req.body.member;

        // Create connection instance
        let pool = await sql.connect(config);
            
        var rset;
        
        // If the email is not already present allow user to register otherwise prompt user to sign-in
        let sresult = await pool.request()
            .input('email', sql.NVarChar, email)
            .query('SELECT Email FROM Users WHERE Email = @email');
            rset = sresult.recordset;
            if(sresult.rowsAffected == 0)
            {
                let iresult = await pool.request()
                    .input('first', sql.NVarChar, first)
                    .input('last', sql.NVarChar, last)
                    .input('pnum', sql.Int, pnum)
                    .input('email', sql.NVarChar, email)
                    .input('password', sql.NVarChar, pass)
                    .input('member', sql.Bit, member)
                    .query('INSERT INTO Users(FName, LName, PNumber, Email, Passwords, Membership) VALUES (@first, @last, @pnum, @email, @password, @member)');
                    rset = iresult.recordset;                    
                    // Print the result
                    context.log(iresult);
            }            
            // Print the result
            context.log(sresult);

        // Return the result
        context.res = {
            body: rset
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
