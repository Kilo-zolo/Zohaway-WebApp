const sql = require('mssql');

module.exports = async function (context, req) {
    // Configuration for your SQL Server.
    const config = {
        user: 'zohteksqladmin',
        password: process.env.AZURE_SQL_CONNECTION_STRING,
        server: 'zohaway-server.database.windows.net', 
        database: 'zohaway-db',
        options: {
            encrypt: true
        }
    };

    try
    {
        var uid = req.body.user.ID;
        var rset;
        // Create connection instance
        let pool = await sql.connect(config);
            // If the UID is empty the user will be prompted to register as a member/non-member
            if (uid == "")
            {
                var first = req.body.user.first;
                var last = req.body.user.last;
                var pnum = req.body.user.pnum;
                var email = req.body.user.email;
                var pass = req.body.user.pass;
                var member = req.body.user.member;                

                // IF a user mistankenly registers and uses an already utilized email the db will not consider 
                //the records inputted and instead sign the user in directly
                
                let sresult = await pool.request()
                    .input('email', sql.NVarChar, email)
                    .query('SELECT ID FROM Users WHERE (Email IS NOT NULL AND Email <> \'\') AND EMAIL = @email');
                    rset = sresult.recordset;
                    if(sresult.rowsAffected == 0)
                    {
                        let iresult = await pool.request()
                            .input('first', sql.NVarChar, first)
                            .input('last', sql.NVarChar, last)
                            .input('pnum', sql.Int, pnum)
                            .input('email', sql.NVarChar, email)
                            .input('password', sql.NVarChar, pass)
                            .input('member', sql.Bit, Number(member))
                            .query('INSERT INTO Users(FName, LName, PNumber, Email, Passwords, Membership) VALUES (@first, @last, @pnum, @email, @password, @member)');
                            rset = iresult.recordset;                    
                            // Print the result
                            context.log(iresult);

                            let uresult = await pool.request()
                            .query('select IDENT_CURRENT(\'Users\') as ID');
                            rset = uresult.recordset;                                        
                            // Print the result
                            context.log(uresult);   

                    }                                      
                    // Print the result
                    context.log(sresult);
                    uid = rset[0]['ID'];   
            }

            //Create order id out of the current DateTime 
            var oid = Date.now();
            var cost = req.body.cost;
            var date = new Date(oid);
            //Populate the Orders table using the cost, oid, uid and date params
            let fresult = await pool.request()
                .input('oid', sql.BigInt, oid)
                .input('uid', sql.Int, uid)
                .input('cost', sql.Money, cost)
                .input('date', sql.VarChar, date.toString())
                .query('INSERT INTO Orders(ID, UserID, Price, Date_Time) VALUES (@oid, @uid, @cost, @date)');
                rset = fresult.recordset;
                // Print the result
                context.log(fresult);
            // Create a for loop that will iterate over the order list to save the product id's and quantities to the order items table
             for (var i = 0; i < req.body.order.length; i++) {
                var pid = req.body.order[i].id;
                var qnty = req.body.order[i].quantity;
                let itresult = await pool.request()
                    .input('oid', sql.BigInt, oid)
                    .input('pid', sql.Int, pid)
                    .input('qnty', sql.Int, qnty)
                    .query('INSERT INTO Order_Items(OrderID, ProductID, Quantity) VALUES (@oid, @pid, @qnty)');
                    rset = itresult.recordset;
                    // Print the result
                    context.log(itresult);
             }   

            context.res = {
                // status: 200, /* Defaults to 200 */
                body: rset
            };
    } catch (err) 
    {
        context.log.error('SQL Error', err);
        context.res = {
            status: 500,
            body: "Error executing SQL query"
        };
        sql.close();
    }    
}
