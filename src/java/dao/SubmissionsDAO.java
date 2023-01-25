/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import DBUtil.MainConnection;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Date;

/**
 *
 * @author User
 */
public class SubmissionsDAO {

    public static boolean submit(Date date, String rewardID, int donation) throws ClassNotFoundException, SQLException {
        CallableStatement statement;
        try (Connection connection = MainConnection.getConnection()) {
            if(connection == null) {
                return false;
            }   String sql = "INSERT INTO dbo.[Submissions] (submission_date, rewardID, donation)\n"
                    + "VALUES (?, ?, ?);";
            statement = connection.prepareCall(sql);
            statement.setString(2, rewardID);
            statement.setDate(1, date);
            statement.setInt(3, donation);
        }
        return statement.execute();
    }
}
